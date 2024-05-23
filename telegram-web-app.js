let tg = window.Telegram.WebApp;
let booking = document.getElementById("booking");

booking.addEventListener("click", () => {
	let arendator = document.getElementById("id_arendator").value;
	let data = {
		arendator: arendator,
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
