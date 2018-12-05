//AÐAL STUFFIÐ - HLAÐA DRASLI INNÁ SÍÐUNNA
var header = document.querySelector('header');
var footer = document.querySelector('footer');
var main = document.querySelector('main');
//það sem gerist þegar ég kem fyrst inn á síðuna:
header.innerHTML = templates.header;
footer.innerHTML = templates.footer;
main.innerHTML = templates.frontPage;

var showEvents = function(){
    main.innerHTML = templates.events;
    doEventsJs();
}
var showCalendar = function(){
	main.innerHTML = templates.calendar;
	doCalJs();
}