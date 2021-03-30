
$(document).ready(function() {
    // Defalt behaviour
    $('#cross').cross2({
        clickEnabled: false,
        easing: 'easeOutElastic',
        animationDuration: 5000,
        mousewheelEnabled: false,
        value: 0
    });
    $('#cross').data('cross2').showHalfs();
    // setTimeout(function () {
    //     if ($('#cross').length > 0) {
    //         $('#cross').data('cross2').showHalfs();
    //     }
    // }, 456);
    // function startCrossAnim() {
    //     if (ready1 && ready2) $('#cross').data('cross2').showHalfs();
    //     else setTimeout(startCrossAnim, 100);
    // }
});