function getLocalTime() {
  return new Date().toLocaleTimeString();
}

let currentDate = new Date();

let day = currentDate.getDay();
let month = currentDate.getMonth();
let date = currentDate.getDate();
let year = currentDate.getFullYear();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.getElementById("day").innerText = days[day].slice(0, 3);
document.getElementById("month").innerText = months[month];
document.getElementById("date").innerText = date;
document.getElementById("year").innerText = year;
