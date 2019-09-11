$(document).ready(() => {
  const questions = [
    {
      Q: "Q10 What is going on!?",
      A1: {
        Id: "420470b743cc5ded",
        Value: "????PM????"
      },
      A2: {
        Id: "2baf94cae39f2605",
        Value: "????NO????"
      },
      A3: {
        Id: "43b0321c3afb3c1c",
        Value: "????Hi????"
      },
      A4: {
        Id: "5f3823799ad4d2a2",
        Value: "????AM????"
      }
    },
    {
      Q: "Q9 Yo! Which shit you pickin?",
      A1: {
        Id: "85cbfc06135bfb0b",
        Value: "????PM????"
      },
      A2: {
        Id: "955bcbfb95f9b418",
        Value: "????NO????"
      },
      A3: {
        Id: "8434faa9ccc1e11b",
        Value: "????Hi????"
      },
      A4: {
        Id: "7328a063dac08627",
        Value: "????AM????"
      }
    },
    {
      Q: "Q8 Pick yo shit!?",
      A1: {
        Id: "f71854db14e73545",
        Value: "????PM????"
      },
      A2: {
        Id: "4b3e865c6a283ad5",
        Value: "????NO????"
      },
      A3: {
        Id: "1f1a4b359681d4c0",
        Value: "????Hi????"
      },
      A4: {
        Id: "df55aa22bd7ea7f2",
        Value: "????AM????"
      }
    },
    {
      Q: "Q7 ??????????????Hi??????????????",
      A1: {
        Id: "7af448886f225658",
        Value: "????PM????"
      },
      A2: {
        Id: "a56a0d8e1a3e8b36",
        Value: "????NO????"
      },
      A3: {
        Id: "4a5d1efc659bc87c",
        Value: "????Hi????"
      },
      A4: {
        Id: "c14763af0c5da0df",
        Value: "????AM????"
      }
    },
    {
      Q: "Q6 ??????????????Hi??????????????",
      A1: {
        Id: "0c2466c6b657d0ee",
        Value: "????PM????"
      },
      A2: {
        Id: "158f69577e3e0fa2",
        Value: "????NO????"
      },
      A3: {
        Id: "098b031bd43aedbd",
        Value: "????Hi????"
      },
      A4: {
        Id: "d657c9d60f569188",
        Value: "????AM????"
      }
    },
    {
      Q: "Q5 ??????????????Hi??????????????",
      A1: {
        Id: "2832e8ec9483ac56",
        Value: "????PM????"
      },
      A2: {
        Id: "5a5ac84883213600",
        Value: "????NO????"
      },
      A3: {
        Id: "29d26ddc060329db",
        Value: "????Hi????"
      },
      A4: {
        Id: "3a4b00decfaa6a18",
        Value: "????AM????"
      }
    },
    {
      Q: "Q4 ??????????????Hi??????????????",
      A1: {
        Id: "8fc8a862dd920e5e",
        Value: "????PM????"
      },
      A2: {
        Id: "db96363c44aa4af6",
        Value: "????NO????"
      },
      A3: {
        Id: "32f758010303f43c",
        Value: "????Hi????"
      },
      A4: {
        Id: "2b48073cad8d8829",
        Value: "????AM????"
      }
    },
    {
      Q: "Q3 ??????????????Hi??????????????",
      A1: {
        Id: "d0b4d587a41926f1",
        Value: "????PM????"
      },
      A2: {
        Id: "d3dbcc3dd45bcd0f",
        Value: "????NO????"
      },
      A3: {
        Id: "de9a48cb99e9a936",
        Value: "????Hi????"
      },
      A4: {
        Id: "cb5a834f0380b2b8",
        Value: "????AM????"
      }
    },
    {
      Q: "Q2 ??????????????Hi??????????????",
      A1: {
        Id: "b5909ad8c8cee52b",
        Value: "????PM????"
      },
      A2: {
        Id: "96bd00f0c2f9d673",
        Value: "????NO????"
      },
      A3: {
        Id: "bcbc90ca0d3ba708",
        Value: "????Hi????"
      },
      A4: {
        Id: "1e7713aace897d9f",
        Value: "????AM????"
      }
    },
    {
      Q: "Q1 ??????????????Hi??????????????",
      A1: {
        Id: "67d259092c325b13",
        Value: "????PM????"
      },
      A2: {
        Id: "9c2db64b1573a8cb",
        Value: "????NO????"
      },
      A3: {
        Id: "02366a0f0420b587",
        Value: "????Hi????"
      },
      A4: {
        Id: "60dd3b848a01b827",
        Value: "????AM????"
      }
    }
  ];

  const TIME_PER_QUESTION = 30;
  var right = 0;
  var wrong = 0;
  //   var i = 0;
  var numberOfQuestions = questions.length;
  var theLooper = numberOfQuestions => {
    setTimeout(() => {
      $(".question-card").remove();
      numberOfQuestions--;
      if (numberOfQuestions >= 0) {
        console.log(numberOfQuestions);
        console.log("going again");
        createQuestionCard(numberOfQuestions);
        $(".choices").on("click", function() {
          console.log("clicked!");
          console.log(parseInt($(this).attr("id"), 16));
          if (
            parseInt($(this).attr("id"), 16) === triviaKey[numberOfQuestions]
          ) {
            console.log("CORRECT!");
          } else {
            console.log("WRONG!!!");
          }
        });
        theLooper(numberOfQuestions);
      }
    }, TIME_PER_QUESTION * 1000);
  };

  var startTrivia = () => {
    console.log("Starting!");
    var startCard = $("<div>"),
      heading = $("<h1>"),
      startBtn = $("<button>");
    startCard.attr("class", "card question-card");
    heading.text("Welcome to TriFia");
    startBtn.text("START!");
    heading.appendTo(startCard);
    startBtn.appendTo(startCard);
    startCard.appendTo($(".trivia-questions"));
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
    c1.attr("class", "list-group-item choices");
    c1.attr("id", questions[i].A1.Id);
    c2.attr("class", "list-group-item choices");
    c2.attr("id", questions[i].A2.Id);
    c3.attr("class", "list-group-item choices");
    c3.attr("id", questions[i].A3.Id);
    c4.attr("class", "list-group-item choices");
    c4.attr("id", questions[i].A4.Id);
    c4.text(questions[i].A4.Value);
    c3.text(questions[i].A3.Value);
    c2.text(questions[i].A2.Value);
    c1.text(questions[i].A1.Value);
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
  var triviaKey = [
    4877453493272263708,
    9641076530341477131,
    16092955909663139826,
    8859786117761881688,
    874937231265485038,
    3013591892425386459,
    15822893973290765046,
    14653168712987751096,
    2195244967696891295,
    159431449544537479
  ];
  startTrivia();
});
