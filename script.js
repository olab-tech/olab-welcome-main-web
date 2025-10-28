// --- COUNTDOWN TIMER SCRIPT ---

// Set the date we're counting down to
const countDownDate = new Date("December 25, 2025 00:00:00").getTime();

// Get the element where the countdown will be displayed
const countdownElement = document.getElementById("countdown");

// Update the countdown every 1 second
const interval = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(interval);
        countdownElement.innerHTML = "LAUNCHED!";
    }
}, 1000);