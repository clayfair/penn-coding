$(".scroll").click(function() {
    console.log("hello");
    $('html,body').animate({
        scrollTop: $("#container-two").offset().top},
        'slow');
});

$(".up-scroll").click(function() {
    console.log("hello");
    $('html,body').animate({
        scrollTop: $("#container-one").offset().top},
        'slow');
});
