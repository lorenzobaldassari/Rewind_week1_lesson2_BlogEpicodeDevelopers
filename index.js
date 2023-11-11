// today date easy js
const datePositon = document.getElementById(`date`);
const datePositon1 = document.getElementById(`data1`);
const datePositon2 = document.getElementById(`data2`);
const datePositon3 = document.getElementById(`data3`);
const datePositon8 = document.getElementById(`data8`);

const yearNumber = new Date().getFullYear();
const dayNumber = new Date().getDate();
const monthNumber = new Date().getMonth() + 1;
const date = +dayNumber + "/" + monthNumber + "/" + yearNumber;
datePositon.innerText = date;
datePositon1.innerText = date;
datePositon2.innerText = date;
datePositon3.innerText = date;
datePositon8.innerText = yearNumber;
// end date
