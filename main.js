const introSection = document.querySelector('.intro');
const introVideo = introSection.querySelector('video');
const introText = introSection.querySelector('h1');
//end section
const secondSection = document.querySelector('.second-section');
const end = secondSection.querySelector('h1');

//scrollMagic

const controller = new ScrollMagic.controller();

const scene = new ScrollMagic.scene({
    duration: 1000,
    triggerElement: introSection,
    triggerHook: 0
})
.addIndicators()
.addTo(controller);

