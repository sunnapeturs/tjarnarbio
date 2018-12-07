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
	img:'2.png',
	headline:'Allir deyja, mamma. Allir deyja.',
	texts:'Griðastaður er einleikur um dauðleikann, fjöldaframleiðslu húsgagna, Billy-hillur, bældar tilfinningar, mömmur, sænskar grænmetisbollur, fyrrverandi kærustur, krúttlegar skjaldbökur.'

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
	img:'',
	headline:'',
	texts:''

},{
	date:'01',
	titles:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán',
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
				<li class="what-time filter">${dates[i].whatTime}</li>
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
					<button class="kaupa-btn">Sjá meira</button>
				</div>		
			</div>
		</div>	
		`
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
