
// Mobile Menu
var mobileMenu = document.querySelector('.mobile-menu');
var close = document.querySelector('.fa-times');
var hamburgerIcon = document.querySelector('.mobile');
//Cards
var cardContainer = document.querySelector('.cards-container');
var iSyninguBtn = document.querySelector('.i-syningu');
var cards =[
{
	names:'Svartlyng',
	img:'img/cards/1.png',
},{
	names:'Sol',
	img:'img/cards/2.png',
},{
	names:'Tómir vasar',
	img:'img/cards/3.png',
},{
	names:'Crescendo',
	img:'img/cards/4.png',
},{
	names:'Rejúníon',
	img:'img/cards/5.png',
},{
	names:'The Vallay',
	img:'img/cards/6.png',
},{
	names:'Hafið bláa',
	img:'img/cards/7.png',
},{
	names:'Persónur',
	img:'img/cards/8.png',
},{
	names:'Svartlyng',
	img:'img/cards/9.png',
}

]
iSyninguBtn.onclick = function(){
	show()
}
window.addEventListener("load", function () {
	show();
}, false);
// loopar í gegnum array og rúllar í hverju load
var show = function(){
for(var i = 0; i < cards.length; i++){
	cardContainer.innerHTML +=`
			<div class="card i-syningu">		
					<img src="${cards[i].img}">
					<div class="hover-slide"></div>		
					<h4>${cards[i].names}</h4>			
			</div>
	`
}
}
//hringekja


//Mobile Menu
hamburgerIcon.onclick = function(){ 
	mobileMenu.classList.add("show-menu"); 
}
close.onclick = function(){
	mobileMenu.classList.remove("show-menu");
}

