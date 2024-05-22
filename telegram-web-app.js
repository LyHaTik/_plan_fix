let tg = window.Telegram.WebApp;
let create_tr = document.getElementById("create_tr");

create_tr.addEventListener("click", () => {
	let date_start = document.getElementById("id_date_start").value;
	let date_finish = document.getElementById("id_date_finish").value;
	let time_tr = document.getElementById("id_time_tr").value;
	let location = document.getElementById("id_location").value;
	let hidden_survey = document.getElementById("id_hidden_survey").checked;
	let type_tr = document.getElementById("id_type_tr").value;
	let count_gamer = document.getElementById("id_count_gamer").value;
	let comment = document.getElementById("id_comment").value;
	let level = document.getElementById("id_level").value;
	let data = {
		date_start: date_start,
		date_finish: date_finish,
		time_tr: time_tr,
		location: location,
		hidden_survey: hidden_survey,
		type_tr: type_tr,
		count_gamer: count_gamer,
		comment: comment,
		level: level
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
