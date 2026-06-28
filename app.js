'use strict'

const switcher = document.querySelector('.btn');

function updateButtonLabel() {
    if (!switcher) return;
    const isDark = document.body.classList.contains('dark-theme');
    switcher.textContent = isDark ? 'dark' : 'light';
}

if (switcher) {
    switcher.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        updateButtonLabel();
    });
    updateButtonLabel();
} else {
    console.warn('Theme switch button not found.');
}

console.log('Current class name: ' + document.body.className);
