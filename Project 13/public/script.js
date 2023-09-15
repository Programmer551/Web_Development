const submit = document.getElementById("submit");
const input = document.getElementById("inputPassword2");
const mean = (value) => {
  div.innerHTML = value;
  //   document.body.append(div);
};
const fire = (event) => {
  event.preventDefault();
  let word = input.value;
  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      try {
        const meaning = response[0].meanings[0].definitions[0].definition;
        mean(meaning);
      } catch {
        const div = document.getElementById("div");
        div.innerHTML = "Word is not Found";
      }
      // console.log(response);
    });
};
submit.addEventListener("click", fire);
