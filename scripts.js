// Detect when the page is reloaded or revisited and trigger the animations
window.addEventListener('load', () => {
    const heroHeading = document.querySelector('.hero h1');
    const heroParagraph = document.querySelector('.hero p');
    
    // Add the slide-in class to start the animation
    heroHeading.classList.add('slide-in');
    heroParagraph.classList.add('slide-in');
});
console.log("Hello")