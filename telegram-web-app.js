let tg = window.Telegram.WebApp;
let booking = document.getElementById("booking");

booking.addEventListener("click", () => {
	let arendator = document.getElementById("id_arendator").value;
	let date_start = document.getElementById("id_date_start").value;
	let date_finish = document.getElementById("id_date_finish").value;
	let data = {
		arendator: arendator,
		date_start: date_start,
		date_finish: date_finish
		}
		tg.sendData(JSON.stringify(data));
		tg.close()
	});

var c = document.querySelector('#id_delivery');
c.onclick = function() {
 if (c.checked) {
  alert( 'Введите адрес' );
 } else {
  alert( 'Доставка отменена' );
 }
}

var v = document.querySelector('#id_undelivery');
v.onclick = function() {
 if (v.checked) {
  alert( 'Введите адрес' );
 } else {
  alert( 'Забор ТС отменен' );
 }
}
