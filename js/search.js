function search() {
    if(event.keyCode == 13) {

    main.innerHTML = templates.searchResult;
    var cardContainer = document.querySelector('.cards-container');
    var searchInput = document.getElementById('searchInput').value;
	//looopa til þess að fara í gegnum array og leita	
	for(var i = 0; i < cards.length; i++){
	var index = cards[i].names.indexOf(searchInput.toLowerCase());
	
	if(index !== -1){
	console.log('kunta')	
	cardContainer.innerHTML +=`
			<div class="card i-syningu">
				<img src="${cards[i].img}">
				<div class="hover-slide"></div>
				<h4>${cards[i].names}</h4>			
			</div>	`	
	}
	else{
		console.log('no match');
			}
		}

	}
}
