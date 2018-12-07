
//Cards
var cardContainer = document.querySelector('.cards-container');
var iSyninguBtn = document.querySelector('.i-syningu');
var vidburdirBtn = document.querySelector('.vidburdir');
var leikarBtn = document.querySelector('.leikar');
var show_focus = "now_showing";
var cards =[
{
	names:'svartlyng',
	other_event:false,
	img:'img/cards/1.png',
	now_showing:true
},{
	names:'sol',
	other_event:false,
	img:'img/cards/2.png',
	now_showing:true
},{
	names:'tómir vasar',
	other_event:false,
	img:'img/cards/3.png',
	now_showing:true
},{
	names:'crescendo',
	other_event:false,
	img:'img/cards/4.png',
	now_showing:true
},{
	names:'rejúníon',
	other_event:false,
	img:'img/cards/5.png',
	now_showing:true
},{
	names:'the vallay',
	other_event:false,
	img:'img/cards/6.png',
	now_showing:true
},{
	names:'hafið bláa',
	other_event:true,
	img:'img/cards/7.png',
	now_showing:false
},{
	names:'persónur',
	other_event:false,
	img:'img/cards/8.png',
	now_showing:true
},{
	names:'svartlyng',
	other_event:false,
	img:'img/cards/9.png',
	now_showing:true
},{
	names:'persónur2',
	other_event:false,
	img:'img/cards/8.png',
	now_showing:false
},{
	names:'svartlyng2',
	other_event:false,
	img:'img/cards/9.png',
	now_showing:false
}
]
// Kortin 3, "í sýningu"
for(var i = 0; i < 3; i++){
	cardContainer.innerHTML +=`
			<div class="card">
				<img src="${cards[i].img}">
				<div class="hover-slide"></div>
				<h4>${cards[i].names}</h4>			
			</div>	`
}



    
