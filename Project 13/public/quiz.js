const button = document.getElementById("button");
const qus = document.getElementById("qus");
const op1 = document.getElementById("option1");
const op2 = document.getElementById("option2");
const op3 = document.getElementById("option3");

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
      const a = response.results[0];
      console.log(a.question);
      console.log(a.correct_answer);
      qus.innerHTML = a.question;
      let ran1 = Math.floor(Math.random() * 3 + 1);
      let ran2 = Math.floor(Math.random() * 3 + 1);
      let ran3 = Math.floor(Math.random() * 3 + 1);
      // if (ran1 == 1 && ran2 == 1) {
      //   ran1++;
      // }
      // if (ran1 == 1 && ran3 == 1) {
      //   ran3++;
      // }
      // if (ran1 == 2 && ran2 == 2) {
      //   ran2++;
      // }
      // if (ran1 == 2 && ran3 == 2) {
      //   ran1++;
      // }
      // if (ran1 == 3 && ran3 == 3) {
      //   ran1--;
      // }
      // if (ran2 == 1 && ran3 == 1) {
      //   ran2++;
      // }
      // if (ran2 == 2 && ran3 == 2) {
      //   ran3++;
      // }
      // if (ran2 == 3 && ran3 == 3) {
      //   ran2--;
      // }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }
      if (ran1 == ran2 || ran1 == ran3 || ran2 == ran3) {
        ran1 = Math.floor(Math.random() * 3 + 1);
        ran2 = Math.floor(Math.random() * 3 + 1);
        ran3 = Math.floor(Math.random() * 3 + 1);
      }

      console.log(ran1, ran2, ran3);
    });
  console.log("done");
});
