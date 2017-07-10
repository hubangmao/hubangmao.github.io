/**
 * Created by ºú°îÃ¯ on 2017/6/22.
 */

$(document).ready(function () {
    $(window).resize(function () {
        var height = $(window).height();
        var width = $(window).width();

    })

    $(".item").fadeOut(0);
    setTimeout(function () {
        $(".item").fadeIn(1000);
    }, 1000);

});