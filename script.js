const clockFaceElem = document.querySelector('.clock-face');

const secondElem = document.querySelector('.second-hand');
const minuteElem = document.querySelector('.minute-hand');
const hourElem = document.querySelector('.hour-hand');

const digitsElems = document.querySelectorAll('.digit');

const dateTimeElem = document.querySelector('.date-time');

const themeButton = document.querySelector('.change-theme-btn');

const bgButton = document.querySelector('.change-bg-btn');

let click = 0;

themeButton.addEventListener('click', (event) => {
  const htmlElem = document.querySelector('html');
  if (htmlElem.classList.contains('dark')) {
    htmlElem.classList.remove('dark');
    event.target.textContent = 'Выбрать тёмную тему';
  } else {
    htmlElem.classList.add('dark');
    event.target.textContent = 'Выбрать светлую тему';
  }
});

bgButton.addEventListener('click', (event) => {
  click++;
  const htmlElem = document.querySelector('html');
  if (click > 5) {
    click = 0;
    htmlElem.style.backgroundImage = 'none';
    event.target.textContent = 'Добавить изображение';
  } else {
    event.target.textContent = 'Изменить изображение';
    htmlElem.style.backgroundImage = `url(assets/img/${click}.jpg)`;
    htmlElem.style.backgroundRepeat = 'no-repeat';
    htmlElem.style.backgroundPosition = 'center';
    htmlElem.style.backgroundSize = 'cover';
  }
});

const createClockFace = () =>
  digitsElems.forEach((elem, index) => {
    elem.style.transform = `rotate(${30 * index}deg)`;

    elem.children[0].style.transform = `rotate(${-30 * index}deg)`;
  });

const setTime = () => {
  const options = {
    day: 'numeric',
    month: 'long',
    weekday: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  };

  const dateTime = new Date().toLocaleString('ru-RU', options);

  const dateTimeArr = dateTime.split('г., ');
  const date = dateTimeArr[0];
  const time = dateTimeArr[1];

  dateTimeElem.textContent = `${time} ${date}`;

  const timeArr = time.split(':');
  const hours = timeArr[0];
  const minutes = timeArr[1];
  const seconds = timeArr[2];

  const secondsDegrees = (360 / 60) * seconds + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  secondElem.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutesDegrees = (360 / 60) * minutes + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  minuteElem.style.transform = `rotate(${minutesDegrees}deg)`;

  const hoursDegrees = (360 / 12) * hours + 90; // 360 degrees - clock-face, 90 degrees - rotate in css for .hand
  hourElem.style.transform = `rotate(${hoursDegrees}deg)`;
};

createClockFace();

let timerId = setTimeout(function tick() {
  setTime();
  timerId = setTimeout(tick, 1000);
}, 1000);
