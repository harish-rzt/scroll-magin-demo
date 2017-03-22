(function($) {
    var wh = window.innerHeight,
        $iphone = $('.iphone'),
        $innerS1 = $('.innerS1'),
        $innerS2 = $('.innerS2'),
        $innerS3 = $('.innerS3'),
        $innerS4 = $('.innerS4'),
        $screenHat = $('.screenHat'),
        $screenA = $('.screenA'),
        $screenB = $('.screenB'),
        $screenC = $('.screenC');

    // Keep adding code here
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // Create scene
    $("section").each(function() {

        new ScrollMagic.Scene({
            triggerElement: this,
            duration: '50%'
        })
            .setPin(this)
            .addTo(ctrl);
    });

})(jQuery);