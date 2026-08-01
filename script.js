let timer;
let isRunning = false;
let timeLeft = 25 * 60; // 25 minutes in seconds

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    document.getElementById('timer').textContent = 
        `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function toggleTimer() {
    const btn = document.getElementById('start-btn');
    
    if (isRunning) {
        clearInterval(timer);
        btn.textContent = "Start";
    } else {
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                alert("Focus session completed! Great job ✨");
            }
        }, 1000);
        btn.textContent = "Pause";
    }
    isRunning = !isRunning;
}
