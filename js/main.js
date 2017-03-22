$(document).ready(function () {

    // let controller = new ScrollMagic.Controller();
    //
    // let box1Scroll = new TimelineMax();
    //
    // box1Scroll
    //     .fromTo('.c-wrapper', 1,{y: '10%'}, {y: '-10%'},0)
    //     .fromTo('.c-aside', 1,{y: '1000%'}, {y: '-400%'},0)
    //     .fromTo('.c-aside-title', 1,{y: '80%'}, {y: '-80%'},0)
    //     .fromTo('.c-content', 1,{y: '40%'}, {y: '-40%'},0);
    //
    // let section2Animation = new ScrollMagic.Scene({
    //         triggerElement: '#section2',
    //         triggerHook: 1,
    //         duration: '200%'
    //     })
    //         .setTween(box1Scroll)
    //         .addTo(controller);


    let controller = new ScrollMagic.Controller();

    let box1Scroll = new TimelineMax();

    let depth = d => d * 100;

    let depth2 = (depth, elementHeight, x) => {
        let calculation = ((((elementHeight * (window.innerHeight / 100)) / depth) * (11 - depth)) / 10)  * x;
        console.log('calc', calculation);
        return calculation;
    };

    box1Scroll
        .fromTo('.c-wrapper', 1, {y: depth2(10, document.querySelector('.c-wrapper').clientHeight, 1)}, {y: depth2(10, document.querySelector('.c-wrapper').clientHeight, -1)}, 0)
        .fromTo('.c-aside', 1, {y: depth2(1, document.querySelector('.c-aside').clientHeight, 1)}, {y: depth2(1, document.querySelector('.c-aside').clientHeight, -1)}, 0)
        .fromTo('.c-aside-title', 1, {y: depth2(4, document.querySelector('.c-aside-title').clientHeight, 1)}, {y: depth2(4, document.querySelector('.c-aside-title').clientHeight, -1)}, 0)
        .fromTo('.c-content', 1, {y: depth2(2, document.querySelector('.c-content').clientHeight, 1)}, {y: depth(2, document.querySelector('.c-content').clientHeight, -1)}, 0);

    let section2Animation = new ScrollMagic.Scene({
        triggerElement: '#section2',
        triggerHook: 1,
        duration: '200%'
    })
        .setTween(box1Scroll)
        .addTo(controller);


    // let introPin = new ScrollMagic.Scene({
    //    triggerElement: '#intro',
    //     triggerHook: 0,
    //     duration: '30%'
    // })
    //     .setPin('#intro', {pushFollowers: false})
    //     .addIndicators()
    //     .addTo(controller);
    //
    // let introPinReset = new ScrollMagic.Scene({
    //     triggerElement: '#project01',
    //     triggerHook: 0.4,
    // })
    //     .setPin('#intro', {pushFollowers: false})
    //     .addTo(controller);
    //
    // // parallax scene
    //
    // let parallaxTimeline = new TimelineMax();
    // parallaxTimeline
    //     .from('.content-wrapper', 0.4, {autoAlpha: 0, ease: Power0.easeNone})
    //     .from('.bcg', 1, {y: '-50%', ease: Power0.easeNone}, 0);
    //
    // let parallaxScene = new ScrollMagic.Scene({
    //     triggerElement: '.bcg-parallax',
    //     triggerHook: 1,
    //     duration: '150%'
    // })
    //     .setTween(parallaxTimeline)
    //     .addTo(controller);
    //
    // $('.project').each(function() {
    //     let scene = new ScrollMagic.Scene({
    //         triggerElement: this.children[0],
    //         triggerHook: 0.9,
    //     })
    //         .setClassToggle(this, 'fade-in')
    //         .addTo(controller);
    // })


});


















