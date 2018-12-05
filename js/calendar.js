function doCalJs(){

var calendar = document.querySelector('.calendar-dates');
var dates =[
{
	date:'01',
	show:'Griðarstaður',
	whatTime:'19:30',
	time:'90 ',
	price:'4.500',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},{
	date:'01',
	show:'01',
	whatTime:'01',
	time:'01',
	price:'01',
	day: 'mán'
},
]
for(var i = 0; i < dates.length; i++){
	calendar.innerHTML +=`
		<div class="filter-result">
			<ul class="show-info">
				<li class="dates filter">${dates[i].date}
					<div class="day">${dates[i].day}</div>
				</li>
				<li class="shows filter">${dates[i].show}</li>
				<button class="accordion">></button>
				<li class="what-time filter">${dates[i].whatTime}</li>
				<li class="time filter">${dates[i].time} mín.</li>
				<li class="price filter">${dates[i].price} kr.</li>
			</ul>
			<button class="kaupa-btn">Kaupa miða</button>	
		</div>
		<div class="filter-result panel">
			<div class="bla"></div>
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
