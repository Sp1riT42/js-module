import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import {selectTab} from "./tabSwitcher.js";
import {timerFunc, timerStop} from "./timer.js";
import css from './css/style.css'
import timerSound from './assets/timerEnd.mp3'

const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    }
    else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}


// переключение вкладок
const tabList = document.querySelector('.tab-list')
tabList.addEventListener("click",(event) => selectTab(event));


//таймер
const timer = document.querySelector('#timer-time')
const timerStartBtn = document.querySelector('#timer-start')
const timerStopBtn = document.querySelector('#timer-stop')

timerStartBtn.addEventListener('click', () => {
    let time = timer.value*60
    timerFunc(time)
})

timerStopBtn.addEventListener('click',timerStop)
