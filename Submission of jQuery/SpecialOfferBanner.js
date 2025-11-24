$(function() {
$('#hide').on('click', function() {
$('#b2').hide();
});

$('#show').on('click', function() {
$('#b2').show();
});

$('#slide-toggle').on('click', function() {
$('.banner').slideToggle();
});

$('#fade-toggle').on('click', function() {
$('.banner').fadeToggle();
});


const banners = $('.banner');
let idx = 0;
banners.hide();
$(banners[idx]).show();
setInterval(function() {
$(banners[idx]).fadeOut(600, function() {
idx = (idx + 1) % banners.length;
$(banners[idx]).fadeIn(600);
});
}, 5000);
});