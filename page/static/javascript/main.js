/**
 * Created by ºú°îÃ¯ on 2017/6/22.
 */

$(document).ready(function () {

    var colorArr = new Array();
    colorArr.push("#191919");
    colorArr.push("#2e2e2e");
    colorArr.push("#191919");
    colorArr.push("#2e2e2e");
    colorArr.push("#2b2b2b");

    setInterval(function () {
        var num = Math.floor(Math.random() * 5 + 1);
        var color = colorArr[num];
        $(".div-nav-bg").css("background-color", color);
    }, 6000);

    $(".a-github img").mouseenter(function () {
        $(this).attr("src", "page/static/images/ui-github-dow.png");

    });
    $(".a-github img").mouseleave(function () {
        $(this).attr("src", "page/static/images/ui-github-up.png");
    });

    $(window).resize(function(){
        var Height = $(window).height();
        var Width = $(window).width();

         console.log(Width);
    })

});