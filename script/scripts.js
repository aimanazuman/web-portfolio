// JavaScript function for the digital clock
function updateTime() {
    // Get the current time
    const now = new Date();

    // Find the element with the id of "time" from HTML to display the time
    const timeElement = document.getElementById('time');

    // Format the time as HH:MM:SS
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    // Display the time
    timeElement.textContent = timeString;
}

// JavaScript for updating time every second
setInterval(updateTime, 1000);

// Initial call to display time immediately
updateTime();

// JavaScript for theme changer
function toggleTheme() {
    const themeIcon = document.getElementById('themeIcon'); // Find anf get the element with the id "themeIcon" from HTML
    const body = document.body;

    // Toggle between light and dark themes
    body.classList.toggle('dark-theme');

    // Change the icon based on the theme
    if (body.classList.contains('dark-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
    }
}

// JavaScript function for changing text effect
const welcomeText = document.getElementById('welcome-text');
const texts = ['Welcome!', 'Selamat Datang!']; // Welcoming text in different language
let currentIndex = 0;

function changeTextWithFade() {
    welcomeText.style.opacity = 0; // Set opacity to 0 for fade effect

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % texts.length; // Loop through texts
        welcomeText.textContent = texts[currentIndex];
        welcomeText.style.opacity = 1; // Fade in new text
    }, 500); // Adjust the fade duration
}

// Initial call to start the text changing process
changeTextWithFade();

// Automatically change text every 5 seconds
setInterval(changeTextWithFade, 5000); // 5000 milliseconds = 5 seconds

function createBlob() {
    const blob = document.createElement('div');
    blob.classList.add('blob');
            
    const size = Math.random() * 200 + 100;
    blob.style.width = `${size}px`;
    blob.style.height = `${size}px`;
            
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;
    blob.style.left = `${x}px`;
    blob.style.top = `${y}px`;
            
    const hue1 = Math.random() * 360;
    const hue2 = (hue1 + 180) % 360;
    blob.style.background = `linear-gradient(45deg, hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%))`;
            
    document.body.appendChild(blob);
            
    return blob;
}

function animateBlob(blob) {
    const duration = Math.random() * 10000 + 5000;
    const xMove = Math.random() * 200 - 100;
    const yMove = Math.random() * 200 - 100;

    blob.animate([
        { transform: 'translate(0, 0)' },
        { transform: `translate(${xMove}px, ${yMove}px)` }
    ], {
        duration: duration,
        direction: 'alternate',
        iterations: Infinity,
        easing: 'ease-in-out'
    });
}

function createBlobs(count) {
    for (let i = 0; i < count; i++) {
        const blob = createBlob();
        animateBlob(blob);
    }
}

createBlobs(10);

// Comment are used for self reference and future modifications. DO NOT DELETE!
