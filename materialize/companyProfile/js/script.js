
// sidebar
const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

//slider
const slider = document.querySelectorAll('.slider');
M.Slider.init(slider, {
    indicators: false,
    height: 500,
    transition: 600,
    interval: 3000
});

// clients
const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);

//portfolion
const materialBox = document.querySelectorAll('.materialboxed')
M.Materialbox.init(materialBox);

//scrollspy
const scrollSpy = document.querySelectorAll('.scrollspy')
M.ScrollSpy.init(scrollSpy, {
    scrollOffset: 50
});