const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const calculateDiv = document.getElementById('calculatediv');
const countdownDiv = document.getElementById('countdown');
const calculateBtn = document.getElementById('Calculate');

let randomDay = randomDate();

function countDown() {
    let newYearsDate = new Date(randomDay);
    const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
        const days = Math.floor(totalSeconds / 3600/ 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const minutes = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;

        daysEl.innerHTML = days;
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(minutes);
        secondsEl.innerHTML = formatTime(seconds);
}

function randomDate() {
    let startDate = new Date();
    let endDate = new Date('1 Jan 2040');

    return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
}

function formatTime(time) {
    return time < 10 ? (`0${time}`) : time;
}

function selectedDate() {
    let x = document.getElementById('date-picker').value;
    return x;
}


calculateBtn.addEventListener('click', () => {
    let selectedDates = selectedDate();
    if(!selectedDates)
    {
        alert('Please select one date');
    }
    else {
        calculateDiv.style.display = "none";
        countdownDiv.style.display = "block";
        countDown();
        setInterval(countDown, 1000);
    }
});





