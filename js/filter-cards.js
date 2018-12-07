function doEventsJs() {

//Cards
var cardContainer = document.querySelector('.cards-container');
var iSyninguBtn = document.querySelector('.i-syningu');
iSyninguBtn.classList.add("syning-active-btn"); 
var vidburdirBtn = document.querySelector('.vidburdir');
var leikarBtn = document.querySelector('.leikar');
var show_focus = "now_showing";

	iSyninguBtn.onclick = function(){
		iSyninguBtn.classList.add("syning-active-btn"); 
		leikarBtn.classList.remove("leikar-active-btn");
		vidburdirBtn.classList.remove("vidburdir-active-btn");
		show_focus = "now_showing";
		show()
	}
	vidburdirBtn.onclick = function(){
		vidburdirBtn.classList.add("vidburdir-active-btn");
		leikarBtn.classList.remove("leikar-active-btn");
		iSyninguBtn.classList.remove("syning-active-btn");
		show_focus = "events";
		show()
	}
	leikarBtn.onclick = function(){
		leikarBtn.classList.add("leikar-active-btn");
		iSyninguBtn.classList.remove("syning-active-btn");
		vidburdirBtn.classList.remove("vidburdir-active-btn");
		
		show_focus = "all";
		show()
	}
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
// first load
show()

}


