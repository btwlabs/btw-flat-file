$(function() {
    var scroll = new SmoothScroll('a[href*="#section-"]',{
        // Speed & Duration
        speed: 1000,
        speedAsDuration: false, // If true, use speed as the total duration of the scroll animation
        // easing
        easing: 'easeInOutCubic', // Easing pattern to use
        // offset
        offset: 0,
        // History
        updateURL: true, // Update the URL on scroll
        popstate: true, // Animate scrolling with the forward/backward browser buttons (requires updateURL to be true)
        // selectors
        header: '.navbar' // Selector for fixed headers (must be a valid CSS selector)
    });
});