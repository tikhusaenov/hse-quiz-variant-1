
$("#carousel-example-generic").carousel({
    interval : false
});
$('#carousel-example-generic div:first-child').css({'position' : 'relative'});

$(".nextSlide1").click(function(){
    $('#carousel-example-generic div:last-child').css({'position' : 'relative'});
});





