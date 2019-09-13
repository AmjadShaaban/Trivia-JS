$(document).ready(() => {
  const questions = [
    {
      Q: { l1: '"1" - - "1";', l2: "", l3: "What is the result?" },
      A1: {
        Id: "420470b743cc5ded",
        Value: "0"
      },
      A2: {
        Id: "2baf94cae39f2605",
        Value: "11"
      },
      A3: {
        Id: "43b0321c3afb3c1c",
        Value: "2"
      },
      A4: {
        Id: "5f3823799ad4d2a2",
        Value: '"11"'
      }
    },
    {
      Q: {
        l1: "String('Hello') === 'Hello';",
        l2: "",
        l3: "What is the result?"
      },
      A1: {
        Id: "85cbfc06135bfb0b",
        Value: "True"
      },
      A2: {
        Id: "955bcbfb95f9b418",
        Value: "False"
      },
      A3: {
        Id: "8434faa9ccc1e11b",
        Value: "TypeError"
      },
      A4: {
        Id: "7328a063dac08627",
        Value: "NaN"
      }
    },
    {
      Q: {
        l1: "(true + false) > 2 + true;",
        l2: "",
        l3: "What is the result?"
      },
      A1: {
        Id: "f71854db14e73545",
        Value: "True"
      },
      A2: {
        Id: "df55aa22bd7ea7f2",
        Value: "False"
      },
      A3: {
        Id: "1f1a4b359681d4c0",
        Value: "TypeError"
      },
      A4: {
        Id: "4b3e865c6a283ad5",
        Value: "NaN"
      }
    },
    {
      Q: {
        l1: "var a = 0, b = 10;",
        l2: "var a = --b;",
        l3: "What is the value of a & b?"
      },
      A1: {
        Id: "4a5d1efc659bc87c",
        Value: "a = 9, b = 0"
      },
      A2: {
        Id: "a56a0d8e1a3e8b36",
        Value: "a = 0, b = 9"
      },
      A3: {
        Id: "7af448886f225658",
        Value: "a = 9, b = 9"
      },
      A4: {
        Id: "c14763af0c5da0df",
        Value: "a = 10, b = 9"
      }
    },
    {
      Q: {
        l1: "var a = 0, b = 10;",
        l2: "var a = ++b;",
        l3: "What is the value of a & b?"
      },
      A1: {
        Id: "0c2466c6b657d0ee",
        Value: "a = 11, b = 11"
      },
      A2: {
        Id: "158f69577e3e0fa2",
        Value: "a = 10, b = 11"
      },
      A3: {
        Id: "098b031bd43aedbd",
        Value: "a = 0, b = 10"
      },
      A4: {
        Id: "d657c9d60f569188",
        Value: "a = 11, b = 0"
      }
    },
    {
      Q: {
        l1: "var a = 0, b = 10;",
        l2: "var a = b--;",
        l3: "What is the value of a & b?"
      },
      A1: {
        Id: "2832e8ec9483ac56",
        Value: "a = 9, b = 9"
      },
      A2: {
        Id: "5a5ac84883213600",
        Value: "a = 0, b = 9"
      },
      A3: {
        Id: "29d26ddc060329db",
        Value: "a = 10, b = 9"
      },
      A4: {
        Id: "3a4b00decfaa6a18",
        Value: "a = 9, b = 0"
      }
    },
    {
      Q: {
        l1: "var a = 0, b = 10;",
        l2: "var a = b++;",
        l3: "What is the value of a & b?"
      },

      A1: {
        Id: "8fc8a862dd920e5e",
        Value: "a = 11, b = 0"
      },
      A2: {
        Id: "2b48073cad8d8829",
        Value: "a = 11, b = 11"
      },
      A3: {
        Id: "32f758010303f43c",
        Value: "a = 0, b = 11"
      },
      A4: {
        Id: "db96363c44aa4af6",
        Value: "a = 10, b = 11"
      }
    },
    {
      Q: {
        l1: "",
        l2: "Where is the correct place to insert a JavaScript?",
        l3: ""
      },
      A1: {
        Id: "d0b4d587a41926f1",
        Value: "<head>"
      },
      A2: {
        Id: "d3dbcc3dd45bcd0f",
        Value: "<body>"
      },
      A3: {
        Id: "cb5a834f0380b2b8",
        Value: "<head> & <body>"
      },
      A4: {
        Id: "de9a48cb99e9a936",
        Value: "Anywhere in HTML"
      }
    },
    {
      Q: {
        l1: "",
        l2: 'How do you call a function named "myFunction"',
        l3: ""
      },
      A1: {
        Id: "b5909ad8c8cee52b",
        Value: "call function myFunction();"
      },
      A2: {
        Id: "1e7713aace897d9f",
        Value: "myFunction();"
      },
      A3: {
        Id: "bcbc90ca0d3ba708",
        Value: "myFunction;"
      },
      A4: {
        Id: "96bd00f0c2f9d673",
        Value: "call(411).Then({if(answered){ask for myFunction;});"
      }
    },
    {
      Q: {
        l1: "",
        l2: "Which of the following is a self-closing tag?",
        l3: ""
      },
      A1: {
        Id: "67d259092c325b13",
        Value: "<p>"
      },
      A2: {
        Id: "9c2db64b1573a8cb",
        Value: "<div>"
      },
      A3: {
        Id: "02366a0f0420b587",
        Value: "<input>"
      },
      A4: {
        Id: "60dd3b848a01b827",
        Value: "None of the Above."
      }
    }
  ];
  var gamesPlayed = 0;
  var correct = 0;
  var wrong = 0;
  var numberOfQuestions = questions.length - 1;
  var secs = 29;
  var timeCounter = () => {
    $(".choices").hover(
      function() {
        $(this).css("background-color", "lightgray");
      },
      function() {
        $(this).css("background-color", "white");
      }
    );
    $(".choices").on("click", function() {
      if (
        parseInt($(this).attr("id"), 16) === triviaKey[numberOfQuestions].Key
      ) {
        correct++;
        $(".question-card").remove();
        $(".c-a").text(correct);
        numberOfQuestions--;
        clearInterval(xxx);
        $(".question-result").css("color", "green");
        $(".question-result").text("CORRECT!");
        $(".trivia-msg").text("Nice work!");
        setTimeout(() => {
          $(".question-result").text(" ");
          $(".trivia-msg").text("");
          $(".t-r").text("30");
          secs = 29;
          nextQ();
        }, 3500);
      } else {
        wrong++;
        $(".question-card").remove();
        $(".w-a").text(wrong);
        numberOfQuestions--;
        clearInterval(xxx);
        $(".question-result").css("color", "red");
        $(".question-result").text("WRONG!");
        $(".trivia-msg").text("Here is the correct answer:");
        var imgDiv = $("<div>"),
          img = $("<img>"),
          target = $(".trivia-msg");
        img.attr("src", triviaKey[numberOfQuestions + 1].Img);
        img.appendTo(imgDiv);
        imgDiv.appendTo(target);
        setTimeout(() => {
          $(".question-result").text(" ");
          $(".trivia-msg").text("");
          $(".t-r").text("30");
          secs = 29;
          nextQ();
        }, 7000);
      }
    });
    var xxx = setInterval(() => {
      $(".t-r").text(secs);
      secs--;
      if (secs < 0) {
        wrong++;
        $(".question-card").remove();
        $(".w-a").text(wrong);
        numberOfQuestions--;
        clearInterval(xxx);
        $(".question-result").css("color", "red");
        $(".question-result").text("TIME'S UP!");
        $(".trivia-msg").text("Here is the correct answer:");
        var imgDiv = $("<div>"),
          img = $("<img>"),
          target = $(".trivia-msg");
        img.attr("src", triviaKey[numberOfQuestions + 1].Img);
        img.appendTo(imgDiv);
        imgDiv.appendTo(target);
        setTimeout(() => {
          $(".question-result").text(" ");
          $(".trivia-msg").text("");
          $(".t-r").text("30");
          secs = 29;
          nextQ();
        }, 7000);
      }
    }, 1000);
  };
  var startTrivia = () => {
    var startCard = $("<div>"),
      startHead = $("<h3>"),
      startBtn = $("<button>");
    startCard.attr("class", "card question-card1");
    startBtn.attr("class", "btn btn-warning");
    startBtn.attr("type", "button");
    startBtn.attr("id", "start-button");
    startHead.text("Click button to start");
    startBtn.text("START!");
    startHead.appendTo(startCard);
    startBtn.appendTo(startCard);
    startCard.appendTo($(".trivia-questions"));
    $("#start-button").on("click", function() {
      $(".question-card1").remove();
      $(".question-card2").remove();
      $(".c-a").text(correct);
      $(".w-a").text(wrong);
      nextQ();
    });
  };
  var nextQ = () => {
    if (numberOfQuestions === -1) {
      var endCard = $("<div>"),
        endHead = $("<h1>");
      endCard.attr("class", "card question-card2");
      endHead.text("Game Over!, Go again?");
      endHead.appendTo(endCard);
      endCard.appendTo($(".trivia-questions"));
      numberOfQuestions = questions.length - 1;
      correct = 0;
      wrong = 0;
      gamesPlayed++;
      $(".t-p").text(gamesPlayed);
      startTrivia();
    } else {
      createQuestionCard(numberOfQuestions);
      timeCounter();
    }
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
      q = $("<code>"),
      cBox = $("<ul>"),
      c1 = $("<li>"),
      c2 = $("<li>"),
      c3 = $("<li>"),
      c4 = $("<li>");
    qCard.attr("class", "card question-card");
    t.attr("class", "card-header timer");
    q.attr("class", "question");
    $(".question").css("padding: 2em");
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
    q.append(
      questions[i].Q.l1 +
        "<br/>" +
        questions[i].Q.l2 +
        "<br/>" +
        questions[i].Q.l3
    );
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
    {
      Key: 4877453493272263708,
      Img: "./assets/images/4877453493272263708.png"
    },
    {
      Key: 9641076530341477131,
      Img: "./assets/images/9641076530341477131.png"
    },
    {
      Key: 16092955909663139826,
      Img: "./assets/images/16092955909663139826.png"
    },
    {
      Key: 8859786117761881688,
      Img: "./assets/images/8859786117761881688.png"
    },
    {
      Key: 874937231265485038,
      Img: "./assets/images/874937231265485038.png"
    },
    {
      Key: 3013591892425386459,
      Img: "./assets/images/3013591892425386459.png"
    },
    {
      Key: 15822893973290765046,
      Img: "./assets/images/15822893973290765046.png"
    },
    {
      Key: 14653168712987751096,
      Img: "./assets/images/14653168712987751096.png"
    },
    {
      Key: 2195244967696891295,
      Img: "./assets/images/2195244967696891295.png"
    },
    {
      Key: 159431449544537479,
      Img: "./assets/images/159431449544537479.png"
    }
  ];
  startTrivia();
});
