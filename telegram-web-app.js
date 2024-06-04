let tg = window.Telegram.WebApp;
let booking = document.getElementById("booking");

booking.addEventListener("click", () => {
	let arendator = document.getElementById("id_arendator").value;
	let date_start = document.getElementById("id_date_start").value;
	let date_finish = document.getElementById("id_date_finish").value
	let ts = document.getElementById("id_ts").value;
	let period = document.getElementById("id_period").value;
	let prepay = document.getElementById("id_prepay").value;
	let currency = document.getElementById("id_currency").value;
	let tarif = document.getElementById("id_tarif").value;
	let deposite = document.getElementById("id_deposite").value;
	let count = document.getElementById("id_count").value;
	let refer = document.getElementById("id_refer").value;
	let helmets = document.getElementById("id_helmets").value;
	let location_start = document.getElementById("id_bt_location_start").value;
	let location_finish = document.getElementById("id_bt_location_finish").value;
	let comment = document.getElementById("id_comment").value;
	let data = {
		arendator: arendator,
		date_start: date_start,
		date_finish: date_finish,
		ts: ts,
		period: period,
		prepay: prepay,
		currency: currency,
		tarif: tarif,
		deposite: deposite,
		count: count,
		refer: refer,
		helmets: helmets,
		location_start: location_start,
		location_finish: location_finish,
		comment: comment
		}
		tg.sendData(JSON.stringify(data));
		tg.close()
	});
