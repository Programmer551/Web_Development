const button = document.getElementById("button");
const qus = document.getElementById("qus");
const op1 = document.getElementById("option1");
const op2 = document.getElementById("option2");
const op3 = document.getElementById("option3");
const button2 = document.getElementById("button2");

// https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple
button.addEventListener("click", () => {
  fetch(
    "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
      var a = response.results[0];
      console.log(a.question);
      console.log(a.correct_answer);
      qus.innerHTML = a.question;
      let ran1 = Math.floor(Math.random() * 3 + 1);

      let ran2; //= Math.floor(Math.random() * 3 + 1);
      let ran3; //= Math.floor(Math.random() * 3 + 1);
      if (ran1 == 1) {
        // ran1++;
        // ran2 = 1;
        // ran3 = 3;
        op1.innerHTML = "Option1: " + a.correct_answer;
        op2.innerHTML = "Option2: " + a.incorrect_answers[0];
        op3.innerHTML = "Option3: " + a.incorrect_answers[1];
      } else if (ran1 == 2) {
        // ran3 = 1;
        // ran2 = 3;
        op2.innerHTML = "Option2:" + a.correct_answer;
        op3.innerHTML = "Option3: " + a.incorrect_answers[0];
        op1.innerHTML = "Option1: " + a.incorrect_answers[1];
      } else if (ran1 == 3) {
        op3.innerHTML = "Option3: " + a.correct_answer;
        op2.innerHTML = "Option2: " + a.incorrect_answers[0];
        op1.innerHTML = "Option1: " + a.incorrect_answers[1];
        // ran2 = 2;
        // ran3 = 1;
      }
      button2.addEventListener("click", () => {
        let value = input.value;
        value = value.toLowerCase();
        value2 = a.correct_answer.toLowerCase();
        if (value == value2) {
          input.value = "Correct Answer";
        } else {
          input.value = "Wrong Answer";
        }
      });
      // console.log(ran1, ran2, ran3);
    });

  console.log("done");
});
