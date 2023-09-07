let div = document.getElementById("div");
let input = document.getElementById("input");
let button = document.getElementById("button");
let date = new Date();
var str;
setInterval(function fun() {
  date = new Date();
  div.innerHTML = date;
  // console.log(date.getHours());
  // console.log(date.getMinutes());
  // console.log(input.value)
}, 1000);

let fire = () => {
  //   clearInterval(abc);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var str = `${hours}:${minutes}`;

  var str2 = input.value;

  //   console.log(str.startsWith(4));
  console.log(input.value);
  //   if (str.length === 5) {
  // if (str.startsWith("0") && str[4] == 0) {
  if (str.length == 4) {
    str = "0" + str;
  }
  console.log(str);
  var abc = setInterval(function hey() {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var str = `${hours}:${minutes}`;
    console.log(str == str2);
    // let a=input.value
    // let hours=date.getHours()
    // 	let minutes=date.getMinutes()
    // 	var str=`${hours}:${minutes}`
    if (str === str2) {
      console.log(input.value);
      let audio = document.getElementById("audio");
      audio.play();
      console.log("beep");
      // document.body.ClassList.remove("clock")
      // document.body.ClassList.add("alarm")
    } else {
    }
  }, 1000);
};

// 	setInterval(function hello(){
//      document.body.classList.remove("alarm")
// },10000)
// };
button.addEventListener("click", fire);

// document.body.append(div)
