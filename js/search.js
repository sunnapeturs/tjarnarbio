function search() {
    if(event.keyCode == 13) {

    main.innerHTML = templates.searchResult;
    var cardContainer = document.querySelector('.cards-container');
    var searchInput = document.getElementById('searchInput').value;
	//looopa til þess að fara í gegnum array og leita	
	for(var i = 0; i < cards.length; i++){
	var index = cards[i].names.indexOf(searchInput.toLowerCase());
	
	if(index !== -1){	
	cardContainer.innerHTML +=`
			<div class="card">
				<img src="${cards[i].img}">
				<div class="hover-slide">
					<button class="kaupa-btn">Kaupa miða</button>
					<div class="card-info">
						<p>${cards[i].leikfelag}</p>
						<p>${cards[i].date}</p>
						<p>${cards[i].price}</p>
					</div>
				</div>
				<h4>${cards[i].names}</h4>			
			</div>`	
	}
	else{
		console.log('no match');
			}
		}

	}
}
