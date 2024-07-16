$(function () {
    /*=================================================
    ハンバーガーメニュー
    ===================================================*/
    $(".burger").on("click", function () {
    ($("#header").toggleClass("open"));
    });

    // $("#mask").on("click", function () {
    // $("#header").toggleClass("open");
    // });


    $("#navi a").on("click", function () {
    $("#header").toggleClass("open");
    });

});