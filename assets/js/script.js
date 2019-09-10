$(document).ready(() => {
  const questions = [
    {
      Q: "What is going on!?",
      A1: "I Don't Know!",
      A2: "I Do Know!   ",
      A3: "Maybe I do?",
      A4: "Fuck! I need HALP!"
    },
    {
      Q: "Q2 Yo! Which shit you pickin?",
      A1: "Pick dis",
      A2: "Pick the First on!",
      A3: "No maybe Dis?",
      A4: "100% Dis"
    },
    {
      Q: "Q3 Pick yo shit!?",
      A1: "DONT! Pick dis",
      A2: "Dont pick the 1st or 2nd!",
      A3: "maybe Pick Dis?",
      A4: "100% Dis"
    },
    {
      Q: "Q4 ??????????????Hi??????????????",
      A1: "????PM????",
      A2: "????NO????",
      A3: "????Hi????",
      A4: "????AM????"
    }
  ];

  const questionsMap = {
    Q: "Question",
    A1: "First Choice",
    A2: "Second Choice",
    A3: "Third Choice",
    A4: "Forth Choice"
  };
  const TIME_PER_QUESTION = 30;
  //   var i = 0;
  var numberOfQuestions = questions.length;
  var theLooper = numberOfQuestions => {
    setTimeout(() => {
      $(".question-card").remove();
      numberOfQuestions--;
      if (numberOfQuestions > 0) {
        console.log(numberOfQuestions - 1);
        console.log("going again");
        createQuestionCard(numberOfQuestions - 1);
        theLooper(numberOfQuestions);
      }
    }, 5000);
  };

  var qTimer = () => {
    console.log("Starting!");
    createQuestionCard(numberOfQuestions - 1);
    theLooper(numberOfQuestions);
  };

  /*
   *
   * qCard = Questions & Choices box <div
   * t = timer <div
   * q = question <h2
   * cBox = choices box <ul
   * c1, c2, c3, c4 = choices <li
   *
   */
  const createQuestionCard = i => {
    var qCard = $("<div>"),
      t = $("<div>"),
      q = $("<h2>"),
      cBox = $("<ul>"),
      c1 = $("<li>"),
      c2 = $("<li>"),
      c3 = $("<li>"),
      c4 = $("<li>");
    qCard.attr("class", "card question-card");
    t.attr("class", "card-header timer");
    q.attr("class", "question");
    cBox.attr("class", "list-group list-group-flush");
    c1.attr("class", "list-group-item");
    c2.attr("class", "list-group-item");
    c3.attr("class", "list-group-item");
    c4.attr("class", "list-group-item");
    c4.text(questions[i].A4);
    c3.text(questions[i].A3);
    c2.text(questions[i].A2);
    c1.text(questions[i].A1);
    q.text(questions[i].Q);
    c1.appendTo(cBox);
    c2.appendTo(cBox);
    c3.appendTo(cBox);
    c4.appendTo(cBox);
    q.appendTo(t);
    cBox.appendTo(t);
    t.appendTo(qCard);
    qCard.appendTo($(".trivia-questions"));
  };
  qTimer();
});
