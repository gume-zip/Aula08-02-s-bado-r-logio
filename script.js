let digitalElement = document.querySelector('.digital');
let sElemente = document.querySelector('.p_s');
let mElemente = document.querySelector('.p_m');
let hElemente = document.querySelector('.p_h');

function updateClock() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`

    let sDeg = ((360 / 60) * second)-90;
    sElemente.style.transform = `rotate(${sDeg}deg)`;

    
    let mDeg = ((360 / 60) * minute)-90;
    mElemente.style.transform = `rotate(${mDeg}deg)`;

    
    let hDeg = ((360 / 12) * hour)-90;
    hElemente.style.transform = `rotate(${hDeg}deg)`;
}

function fixZero(time){
    return time < 10 ? `0${time}` : time;
}

setInterval(updateClock, 1000);