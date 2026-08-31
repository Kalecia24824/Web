const toggleBtn = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');

toggleBtn.addEventListener('click', () => {
  document.documentElement.classList.toggle('nighttime');

  if (document.documentElement.classList.contains('nighttime')) {
    toggleIcon.src = './images/Moon.png'; // swap to your moon icon filename
  } else {
    toggleIcon.src = './images/Sun (Icons 8).png';
  }
});