$(document).ready(function(){
	$(".suave").click(function(event){
	    event.preventDefault();
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 1500);
	});

});


const animationClass = 'animate';

function animeScroll(){
	const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3);
	document.querySelectorAll('[data-anime]').forEach(function(element){
		if((windowTop) > element.offsetTop){
			element.classList.add(animationClass);
		} else {
			element.classList.remove(animationClass);
		}
	});
}

animeScroll();

window.addEventListener('scroll', function(){
	animeScroll();
});
