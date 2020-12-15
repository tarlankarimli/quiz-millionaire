export const timer = document.querySelector('.countdown');

 export const countdown = () => {
    let givenTime = 30;

const setCountdown = setInterval(() => {
    givenTime--;
    givenTime === 0 ? clearInterval(setCountdown) : null;

    showCountdown(givenTime)
}, 1000);
}

const showCountdown = (givenTime) => {
    timer.textContent = '';
    const span = document.createElement('span');
    span.textContent = givenTime;
    timer.appendChild(span);
}
