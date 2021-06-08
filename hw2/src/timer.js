const timerResult = document.querySelector('#timer-result')
//let time
let timerInterval
export const timerFunc =  function (time) {
     timerInterval = setInterval(()=> {
        console.log(time)
        let seconds = time%60
        let minutes = time/60%60
        let hour = time/60/60%60
        if (time <= 0) {
            timerResult.textContent  = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`
            const audio = new Audio('./assets/timerEnd.mp3');
            audio.play();
            clearInterval(timerInterval);
        } else {
            timerResult.textContent  = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`
        }
        --time;
    }, 1000)

}

export const timerStop = function () {
    clearInterval(timerInterval)
}