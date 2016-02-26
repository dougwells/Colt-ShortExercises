var body = document.querySelector('body');
var p = document.querySelectorAll('p')[0];
var h1 = document.querySelector('h1');
var button = document.querySelector('button');

button.addEventListener('click', function(){
	document.querySelector('p').textContent="Yeah!  I have been clicked";
	document.querySelector('h1').style.color ="red";
	document.querySelector('body').classList.toggle('flip');
});