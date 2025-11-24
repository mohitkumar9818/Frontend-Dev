$(function() {
$('#products').on('click', '.product', function() {
$('.product').removeClass('highlight');
$(this).addClass('highlight');
});


$('#products').on('mouseenter', '.product', function() {
$(this).find('.details').append('<span class="extra"> — Extra specs shown on hover</span>');
}).on('mouseleave', '.product', function() {
$(this).find('.extra').remove();
});


$('#products').on('click', '.fav', function(e) {
e.stopPropagation(); 
$(this).closest('.product').toggleClass('selected');
});


$('[data-discount]').addClass('discount');


$('#products').on('click', '.product', function() {
const stock = $(this).data('stock');
if (stock === 'out') alert($(this).find('.p-title').text() + ' is out of stock');
});
});