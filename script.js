"use strict";
const currentTime = document.querySelector(".current-time");
const currentDay = document.querySelector(".current-day");

function displayCurrentTime() {
  const now = new Date();

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayName = daysOfWeek[now.getUTCDay()];

  const hours = now.getUTCHours().toString();

  const min = now.getUTCMinutes().toString();
  const seconds = now.getUTCSeconds().toString();

  const formartedTime = `${hours}:${min}:${seconds}`;
  currentTime.textContent = formartedTime;
  currentDay.textContent = dayName;
}

setInterval(displayCurrentTime, 1000);
// window.onload = displayCurrentTime;

displayCurrentTime();
