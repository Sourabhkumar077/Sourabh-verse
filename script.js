// for smooth scrolling added locomotive

import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});