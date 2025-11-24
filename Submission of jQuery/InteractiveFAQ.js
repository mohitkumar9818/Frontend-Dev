$(function() {
$('#faq').on('click', '.question', function() {
$(this).next('.answer').slideToggle();
});


$('#faq').on('mouseenter', '.question', function() {
$(this).css('color', 'teal');
}).on('mouseleave', '.question', function() {
$(this).css('color', '');
});


$('#faq').on('dblclick', '.question', function() {
$('.answer').slideUp();
});


$('#answer-input').on('focus', function() {
$('#faq .qa').first().find('.question').css('background', '#fffbcc');
});


$('#answer-input').on('blur', function() {
$('#faq .question').css('background', '');
});
});