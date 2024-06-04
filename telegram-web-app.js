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

function updateCoordinates(lat, lng) {
  document.getElementById('lat').value = lat;
  document.getElementById('lng').value = lng;
  }

function initMap() {
	var map, marker;
	var myLatlng = {
	  lat: 7.93,
	  lng: 98.36
	};
	document.getElementById('lat').value = myLatlng.lat;
	document.getElementById('lng').value = myLatlng.lng;
  
	map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 12,
	  center: myLatlng
	});
	  
	marker = new google.maps.Marker({
	  position: myLatlng,
	  map: map,
	  draggable: true
	});
  
	marker.addListener('dragend', function(e) {
	  var position = marker.getPosition();
	  updateCoordinates(position.lat(), position.lng())
	});
  
	map.addListener('click', function(e) {
	  marker.setPosition(e.latLng);
	  updateCoordinates(e.latLng.lat(), e.latLng.lng());
	});
  
	map.panTo(myLatlng);
  }

function tg.popupClosed() {
	var popup = document.querySelector('.popup');
	popup.style.display = 'none';
	}

function tg.showPopup() {
	var popup = document.querySelector('.popup');
	popup.style.display = 'block';
	}

function autoPeriod() {
	document.getElementById("id_period").value = 5;
}



// Получаем элементы ввода дат и поле продолжительности
const startDateInput = document.getElementById('id_date_start');
const endDateInput = document.getElementById('id_date_finish');
window.onload = calculatePeriod();

// Функция для вычисления разницы между датами
function calculatePeriod() {
	// Получаем значения дат
	const startDate = new Date(startDateInput.value);
	const endDate = new Date(endDateInput.value);

	// Проверяем, что обе даты установлены
	if (startDate && endDate) {
		// Вычисляем разницу в миллисекундах
		const timeDiff = endDate - startDate;

		// Вычисляем разницу в днях
		const dayDiff = timeDiff / (1000 * 60 * 60 * 24);

		// Устанавливаем значение продолжительности
		document.getElementById('id_period') = dayDiff;
	}
}

// Добавляем обработчики событий для обновления продолжительности при изменении дат
startDateInput.addEventListener('change', calculatePeriod);
endDateInput.addEventListener('change', calculatePeriod);
