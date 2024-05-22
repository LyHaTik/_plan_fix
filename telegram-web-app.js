let tg = window.Telegram.WebApp;
let create_tr = document.getElementById("create_tr");

create_tr.addEventListener("click", () => {
	let arendator = document.getElementById("id_arendator").value;
	let date_start = document.getElementById("id_date_start").value;
	let date_finish = document.getElementById("id_date_finish").value;
	let adres = document.getElementById("id_adres").value;
	let ts = document.getElementById("id_ts").value;
	let period = document.getElementById("id_period").value;
	let prepay = document.getElementById("id_prepay").value;
	let currency = document.getElementById("id_currency").value;
	let tarif = document.getElementById("id_tarif").value;
	let deposite = document.getElementById("id_deposite").value;
	let count = document.getElementById("id_count").value;
	let hz = document.getElementById("id_hz").value;
	let delivery = document.getElementById("id_delivery").checked;
	let location_start = document.getElementById("id_location_start").value;
	let undelivery = document.getElementById("id_undelivery").checked;
	let location_finish = document.getElementById("id_location_finish").value;
	let comment = document.getElementById("id_comment").value;
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
		delivery: delivery,
		location_start: location_start,
		undelivery: undelivery,
		location_finish: location_finish,
		comment: comment
		}
		tg.sendData(JSON.stringify(data));
		tg.close()
	});

var c = document.querySelector('#id_hidden_survey');
c.onclick = function() {
 if (c.checked) {
  alert( '🥷 Скрытая тренировка: опрос тренировки в личку' );
 } else {
  alert( 'Открытая тренировка: опрос тренировки в личку и группу' );
 }
}
