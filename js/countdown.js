export const timer = document.querySelector('.countdown');
let refreshCountDown = true;

 export const countdown = () => {
    timer.style.display = 'block';
    let givenTime = 30;
    refreshCountDown =true
    const setCountdown = setInterval(() => {
        givenTime--;
        givenTime === 0 || refreshCountDown ===false ? clearInterval(setCountdown) : null;
        showCountdown(givenTime)
    }, 1000);
}
const showCountdown = (givenTime) => {
    timer.textContent = '';
    const span = document.createElement('span');
    span.textContent = givenTime;
    timer.appendChild(span);
}
export const stopCountdown = () => {
    timer.style.display = 'none';
    refreshCountDown = false;
}
