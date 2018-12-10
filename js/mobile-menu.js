var mobileMenu = document.querySelector('.mobile-menu');
var close = document.querySelector('.fa-times');
var hamburgerIcon = document.querySelector('#mobile');

hamburgerIcon.onclick = function(){ 
	mobileMenu.classList.add("show-menu"); 
}
close.onclick = function(){
	mobileMenu.classList.remove("show-menu");
}


