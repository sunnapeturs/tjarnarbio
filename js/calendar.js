function doCalJs(){

	var calendar = document.querySelector('.calendar-dates');
	var dates =[
	{
		date:'01',
		titles:'Griðarstaður',
		whatTime:'19:30',
		time:'90 ',
		price:'4.500',
		day: 'mán',
		img:'valin-syning-img-1.jpg',
		headline:'Allir deyja, mamma. Allir deyja.',
		texts:'Griðastaður er einleikur um dauðleikann, fjöldaframleiðslu húsgagna, Billy-hillur, bældar tilfinningar, mömmur, sænskar grænmetisbollur, fyrrverandi kærustur, krúttlegar skjaldbökur.'
	},{
		date:'02',
		titles:'Rejúníon',
		whatTime:'20:00',
		time:'115',
		price:'4.400',
		day: 'þri',
		img:'29871635_2102024873416679_9213494363312494935_o.jpg',
		headline:'Allir deyja, mamma. Allir deyja.',
		texts:'Griðastaður er einleikur um dauðleikann, fjöldaframleiðslu húsgagna, Billy-hillur, bældar tilfinningar, mömmur, sænskar grænmetisbollur, fyrrverandi kærustur, krúttlegar skjaldbökur.'

	},{
		date:'05',
		titles:'Svartlyng',
		whatTime:'19:30',
		time:'90',
		price:'4.400',
		day: 'fös',
		img:'',
		headline:'',
		texts:''

	},{
		date:'07',
		titles:'Rejúníon',
		whatTime:'18:30',
		time:'115',
		price:'3.500',
		day: 'sun',
		img:'',
		headline:'',
		texts:''

	},{
		date:'',
		titles:'Griðarstaður',
		whatTime:'21:00',
		time:'115',
		price:'3.500',
		day: '',
		img:'',
		headline:'',
		texts:''

	},{
		date:'10',
		titles:'Rauðhetta',
		whatTime:'16:30',
		time:'95',
		price:'2.900',
		day: 'mið',
		img:'',
		headline:'',
		texts:''

	},{
		date:'12',
		titles:'Rauðhetta',
		whatTime:'16:30',
		time:'95',
		price:'2.900',
		day: 'fös',
		img:'',
		headline:'',
		texts:''

	},{
		date:'',
		titles:'Griðarstaður',
		whatTime:'19:30',
		time:'115',
		price:'4.400',
		day: '',
		img:'',
		headline:'',
		texts:''

	},{
		date:'13',
		titles:'Svartlyng',
		whatTime:'18:30',
		time:'110',
		price:'4.900',
		day: 'lau',
		img:'',
		headline:'',
		texts:''
	},
	]
	for(var i = 0; i < dates.length; i++){
		calendar.innerHTML +=`
			<div class="filter-result">
				<ul class="show-info">
					<li class="dates filter">${dates[i].date}
						<div class="day">${dates[i].day}</div>
					</li>
					<li class="shows filter">${dates[i].titles}</li>
					<div class="accordion">&#8964;</div>
					<li class="what-time filter">Kl. ${dates[i].whatTime}</li>
					<li class="time filter">${dates[i].time} mín.</li>
					<li class="price filter">${dates[i].price} kr.</li>
				</ul>
				<button class="kaupa-btn cal">Kaupa miða</button>	
			</div>
			<div class="filter-result panel">
				<div class="panel-container">
					<img src="img/cal/${dates[i].img}"></img>
					<div class="panel-content-holder">
						<p><span>${dates[i].headline}</span><br>
						${dates[i].texts}</p>
						<button onclick="showSingleEvent()" class="kaupa-btn">Sjá meira</button>
					</div>		
				</div>
			</div>`
	}
	var acc = document.getElementsByClassName("accordion");
	var i;

	for (i = 0; i < acc.length; i++) {
	    acc[i].addEventListener("click", function() {
	        this.classList.toggle("active");
	        var panel = this.parentElement.parentElement.nextElementSibling;
	        if (panel.style.display === "block") {
	            panel.style.display = "none";
	        } else {
	            panel.style.display = "block";
	        }
	    });
	}
}
