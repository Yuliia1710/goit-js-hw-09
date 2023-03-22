const startBtn = document.querySelector('button[data-start]');
console.log(startBtn);
const stopBtn = document.querySelector('button[data-stop]');
console.log(stopBtn);

startBtn.addEventListener('click', onClickBtnStart);
stopBtn.addEventListener('click', onClickBtnStop);
timerColorId = null;

function onClickBtnStart(e) {
  e.preventDefault();
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerColorId = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor = color;
  }, 1000);
}

function onClickBtnStop(e) {
  e.preventDefault();

  clearInterval(timerColorId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// const button = document.querySelector("button");

// const onClick = () => {
//   setTimeout(() => {
//     alert("I love async JS!");
//   }, 2000);
// };

// // Two seconds after clicking the button,
// // alert specified inside the setTimeout callback will appear.
// button.addEventListener("click", onClick);
