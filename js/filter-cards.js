function doEventsJs() {
console.log("events");


console.log("events in listener");
//Cards
var cardContainer = document.querySelector('.cards-container');
var iSyninguBtn = document.querySelector('.i-syningu');
var vidburdirBtn = document.querySelector('.vidburdir');
var leikarBtn = document.querySelector('.leikar');
var show_focus = "now_showing";
var cards =[
{
	names:'Svartlyng',
	other_event:false,
	img:'img/cards/1.png',
	now_showing:true
},{
	names:'Sol',
	other_event:false,
	img:'img/cards/2.png',
	now_showing:true
},{
	names:'Tómir vasar',
	other_event:false,
	img:'img/cards/3.png',
	now_showing:true
},{
	names:'Crescendo',
	other_event:false,
	img:'img/cards/4.png',
	now_showing:true
},{
	names:'Rejúníon',
	other_event:false,
	img:'img/cards/5.png',
	now_showing:true
},{
	names:'The Vallay',
	other_event:false,
	img:'img/cards/6.png',
	now_showing:true
},{
	names:'Hafið bláa',
	other_event:true,
	img:'img/cards/7.png',
	now_showing:false
},{
	names:'Persónur',
	other_event:false,
	img:'img/cards/8.png',
	now_showing:true
},{
	names:'Svartlyng',
	other_event:false,
	img:'img/cards/9.png',
	now_showing:true
},{
	names:'Persónur2',
	other_event:false,
	img:'img/cards/8.png',
	now_showing:false
},{
	names:'Svartlyng2',
	other_event:false,
	img:'img/cards/9.png',
	now_showing:false
}

]
// Kortin 3, "í sýningu"
/*
for(var i = 0; i < 3; i++){
	cardContainer.innerHTML +=`
			<div class="card i-syningu">
				<img src="${cards[i].img}">
				<div class="hover-slide"></div>
				<h4>${cards[i].names}</h4>			
			</div>`
}
*/	
	iSyninguBtn.onclick = function(){
		show_focus = "now_showing";
		show()
	}
	vidburdirBtn.onclick = function(){
		show_focus = "events";
		show()
	}
	leikarBtn.onclick = function(){
		show_focus = "all";
		show()
	}
	

	document.addEventListener("DOMContentLoaded", function(){
  	show();
	});
	
	// loopar í gegnum array og rúllar í hverju load
	var show = function(){
		cardContainer.innerHTML = "";
		if(show_focus==="now_showing"){	
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
		}else if(show_focus==="events"){
			for(var i = 0; i < cards.length; i++){		
				if(cards[i].other_event){
					cardContainer.innerHTML +=`
							<div class="card i-syningu">		
									<img src="${cards[i].img}">
									<div class="hover-slide"></div>		
									<h4>${cards[i].names}</h4>			
							</div>
					`
					}	
			}
		} else {
			for(var i = 0; i < cards.length; i++){		
				if(!(cards[i].other_event)){
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
	}


}


