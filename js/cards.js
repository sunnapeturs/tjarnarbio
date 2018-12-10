
//Cards
var cardContainer = document.querySelector('.cards-container');
var iSyninguBtn = document.querySelector('.i-syningu');
var vidburdirBtn = document.querySelector('.vidburdir');
var leikarBtn = document.querySelector('.leikar');
var show_focus = "now_showing";
var cards =[
{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'svartlyng',
	other_event:false,
	img:'img/cards/1.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'sol',
	other_event:false,
	img:'img/cards/2.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'tómir vasar',
	other_event:false,
	img:'img/cards/3.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'crescendo',
	other_event:false,
	img:'img/cards/4.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'rejúníon',
	other_event:false,
	img:'img/cards/5.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'the vallay',
	other_event:false,
	img:'img/cards/6.png',
	now_showing:true
},{
	price: '4.500',
	date:'6.Nóv.– 16.des. 2018',
	leikfelag:'Skoppandi trúðar',
	names:'hafið bláa',
	other_event:true,
	img:'img/cards/7.png',
	now_showing:false
},{
	price: '3.500',
	date:'1.Jan.– 14.feb. 2019',
	leikfelag:'Allir deyja leikfélag',
	names:'Lífið er drasl',
	other_event:true,
	img:'img/cards/Griðastaður.jpg',
	now_showing:false
},{
	price: '3.900',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'Iður',
	other_event:true,
	img:'img/cards/Iður.jpg',
	now_showing:false
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'persónur',
	other_event:false,
	img:'img/cards/8.png',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'lífið er drals',
	other_event:false,
	img:'img/cards/Griðastaður.jpg',
	now_showing:true
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'iður',
	other_event:false,
	img:'img/cards/Iður.jpg',
	now_showing:false
},{
	price: '4.500',
	date:'2.Nóv.– 16.des. 2018',
	leikfelag:'Allir deyja leikfélag',
	names:'griðarstaður',
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
				<div class="hover-slide">
					<button class="kaupa-btn">Kaupa miða</button>
					<div class="card-info">
						<p>${cards[i].leikfelag}</p>
						<p>${cards[i].date}</p>
						<p>${cards[i].price} kr.</p>
					</div>
				</div>
				<h4>${cards[i].names}</h4>			
			</div>`
}



    
