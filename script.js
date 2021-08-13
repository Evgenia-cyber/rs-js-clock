const clockFaceElem = document.querySelector('.clock-face');

const secondElem = document.querySelector('.second-hand');
const minuteElem = document.querySelector('.minute-hand');
const hourElem = document.querySelector('.hour-hand');

const digitsElems = document.querySelectorAll('.digit');

const createClockFace = () =>
  digitsElems.forEach((elem, index) => {
    elem.style.transform = `rotate(${30 * index}deg)`;

    elem.children[0].style.transform = `rotate(${-30 * index}deg)`;
  });

const setTime = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = (360 / 60) * seconds + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  secondElem.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = (360 / 60) * minutes + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  minuteElem.style.transform = `rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (360 / 12) * hours + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  hourElem.style.transform = `rotate(${hoursDegrees}deg)`;
};

createClockFace();

let timerId = setTimeout(function tick() {
  setTime();
  timerId = setTimeout(tick, 1000);
}, 1000);
