$(function(){
const now = new Date();
const h = now.getHours();
let part = 'Evening';
if(h < 12) part = 'Morning';
else if(h < 17) part = 'Afternoon';
$('#greeting').text(`Good ${part}, welcome to StudySnap!`);

$('#changeGreeting').on('click', function(){
$('#greeting').text('Keep going — progress, not perfection!');
});

$('#toggleWelcome').on('click', function(){
$('#welcomeMsg').toggleClass('hidden');
});

$('#greeting').on('click', function(){
alert($(this).text());
});
});