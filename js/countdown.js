const timeLeft = document.querySelector('.countdown');

 const countdown = () => {
    let givenTime = 30;

const setCountdown = setInterval(() => {
    givenTime--;
    givenTime === 0 ? clearInterval(setCountdown) : null;

    showCountdown(givenTime)
}, 1000);
}

const showCountdown = (givenTime) => {
    timeLeft.textContent = '';
    const span = document.createElement('span');
    span.textContent = givenTime;
    timeLeft.appendChild(span);
}

countdown()