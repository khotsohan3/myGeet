// Show apology page on button click
document.getElementById('open-apology').addEventListener('click', function () {
    document.getElementById('landing-page').style.display = 'none';
    document.getElementById('apology-page').classList.remove('hidden');
});

// Slideshow effect for photos
let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
function showNextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.opacity = 1;
}
setInterval(showNextSlide, 3000); // Change image every 3 seconds

// Countdown Timer (Set your special date)
const eventDate = new Date("2025-04-14T00:00:00").getTime();
function updateCountdown() {
    const now = new Date().getTime();
    const difference = eventDate - now;
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    document.getElementById("countdown").innerHTML = `${days} days to go!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Forgive Button
document.getElementById('forgive-btn').addEventListener('click', function () {
    document.getElementById('forgive-message').classList.remove('hidden');
});
