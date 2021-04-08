// import {AlexSlider}  from './core/core';
// import '../css/main.scss'

const slider = new AlexSlider('.slider', {
    slideIndex: 1,
    wrap: '.slider__wrapper',
    items:'.slider__slide',
    dots:false,
    arrowLeft:'.arrow-left',
    arrowRight:'.arrow-right',
});    

window.slider = slider