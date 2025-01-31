// External JS File: script.js

// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed.');

    // Example: Simulate a feature
    const heading = document.querySelector('h1');
    heading.addEventListener('mouseover', () => {
        heading.style.color = '#ff5722';
    });

    heading.addEventListener('mouseout', () => {
        heading.style.color = '#1a73e8';
    });
});
