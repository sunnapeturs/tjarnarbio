
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
	now_showing:true
},{
	names:'Sol',
	img:'img/cards/2.png',
	now_showing:true
},{
	names:'Tómir vasar',
	img:'img/cards/3.png',
	now_showing:true
},{
	names:'Crescendo',
	img:'img/cards/4.png',
	now_showing:true
},{
	names:'Rejúníon',
	img:'img/cards/5.png',
	now_showing:true
},{
	names:'The Vallay',
	img:'img/cards/6.png',
	now_showing:true
},{
	names:'Hafið bláa',
	img:'img/cards/7.png',
	now_showing:true
},{
	names:'Persónur',
	img:'img/cards/8.png',
	now_showing:true
},{
	names:'Svartlyng',
	img:'img/cards/9.png',
	now_showing:true
},{
	names:'Persónur2',
	img:'img/cards/8.png',
	now_showing:false
},{
	names:'Svartlyng2',
	img:'img/cards/9.png',
	now_showing:false
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
	if(cards[i].now_showing){
	cardContainer.innerHTML +=`
			<div class="card i-syningu">		
					<img src="${cards[i].img}">
					<div class="hover-slide"></div>		
					<h4>${cards[i].names}</h4>			
			</div>
	`
	}
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

