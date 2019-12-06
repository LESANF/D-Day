// import "./styles.css";

// You're gonna need this
const frame = document.querySelector(".js-clock");
const time = frame.querySelector(".clock-time");
const NINE_HOURS_MILLISECONDS = 32400000;

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2019-12-24:00:00:00+0900");
  const now = new Date();
  const dDay = xmasDay - now;

  const days = Math.floor(dDay / (1000 * 60 * 60 * 24));
  const hours = Math.floor((dDay / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((dDay / (1000 * 60)) % 60);
  const seconds = Math.floor((dDay / 1000) % 60);

  time.innerHTML = `<span style='font-size:150px; font-family: Oswald; text-shadow : -1px -1px 0px #FFBB00, 3px 3px 0px #FFBB00, 6px  6px 0px #B77300;'>${
    days < 100 ? `0${days}` : days
  }</span>days <span style='font-size:150px; font-family: Oswald; text-shadow : -1px -1px 0px #FFBB00, 3px 3px 0px #FFBB00, 6px  6px 0px #B77300;'>${
    hours < 10 ? `0${hours}` : hours
  }</span>hours <span style='font-size:150px; font-family: Oswald; text-shadow : -1px -1px 0px #FFBB00, 3px 3px 0px #FFBB00, 6px  6px 0px #B77300;'>${
    minutes < 10 ? `0${minutes}` : minutes
  }</span>mins </span> <span style='font-size:150px; font-family: Oswald; text-shadow : -1px -1px 0px #FFBB00, 3px 3px 0px #FFBB00, 6px  6px 0px #B77300;'>${
    seconds < 10 ? `0${seconds}` : seconds
  }</span>secs`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
