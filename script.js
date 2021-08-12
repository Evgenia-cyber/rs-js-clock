const secondElem = document.querySelector('.second-hand');
const minuteElem = document.querySelector('.minute-hand');
const hourElem = document.querySelector('.hour-hand');

const setTime = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (360 / 60) * seconds + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  console.log(seconds, secondsDegrees);
  secondElem.style.transform = `rotate(${secondsDegrees}deg)`;
};

let timerId = setTimeout(function tick() {
  setTime();
  timerId = setTimeout(tick, 1000);
}, 1000);
