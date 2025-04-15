let eggs = document.querySelectorAll('.egg');
let foundCount = 0;
let startTime, endTime;
let timerInterval;

const liveTimerEl = document.getElementById('live-timer');

// Start the timer when the page loads
window.addEventListener('DOMContentLoaded', () => {
    startTime = performance.now();

    // Start live timer update
    timerInterval = setInterval(() => {
        const now = performance.now();
        const elapsed = now - startTime;

        const minutes = Math.floor(elapsed / 60000);
        const seconds = Math.floor((elapsed % 60000) / 1000);
        const milliseconds = Math.floor(elapsed % 1000);

        if (liveTimerEl) {
            liveTimerEl.textContent = `⏱️ Time: ${minutes}m ${seconds}s ${milliseconds}ms`;
        }
    }, 50);
});

eggs.forEach(egg => {
    egg.addEventListener('click', () => {
        if (!egg.classList.contains('clicked')) {
            egg.classList.add('clicked');
            foundCount++;

            if (foundCount === eggs.length) {
                endTime = performance.now();
                clearInterval(timerInterval); // Stop live timer

                const timeTaken = endTime - startTime;
                const minutes = Math.floor(timeTaken / 60000);
                const seconds = Math.floor((timeTaken % 60000) / 1000);
                const milliseconds = Math.floor(timeTaken % 1000);

                const popup = document.getElementById('popup');
                const message = document.createElement('p');
                message.textContent = `⏱️ Time taken: ${minutes}m ${seconds}s ${milliseconds}ms`;
                popup.querySelector('.popup-content').appendChild(message);

                popup.classList.remove('hidden');
            }
        }
    });
});

function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}
