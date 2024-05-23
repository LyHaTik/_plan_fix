let tg = window.Telegram.WebApp;
let booking = document.getElementById("booking");

booking.addEventListener("click", () => {
	let arendator = document.getElementById("id_arendator").value;
	let data = {
		arendator: arendator,
		date_start: date_start,
		date_finish: date_finish,
		adres: adres,
		ts: ts,
		period: period,
		prepay: prepay,
		currency: currency,
		tarif: tarif,
		deposite: deposite,
		count: count,
		hz: hz,
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
