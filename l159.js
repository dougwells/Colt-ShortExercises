$('button').on('click', function(event){
	event.stopPropagation();
	$('.child').fadeOut(1000,function(){
		$(this).parent().remove();
	});
});

$('body').on('click',function(){
	alert("you clicked on body");
});
