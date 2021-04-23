
		//получаем случайное число от 0 до size-1
		let  getRandomNumber = function (size) { // рандомайзер
			return Math.floor(Math.random()*size);
		}

		let width = 300;
		let height = 300;

		
		let target = { 	// сохраняем в переменную target случайные координаты x и y
			x: getRandomNumber(width),
			y: getRandomNumber(height)
		};

		let clicks = 0;

		//вычислить расстояние от клика(event) до клада(target)
		let getDistance = function(event, target) {
			let diffX = event.offsetX - target.x;
			let diffY = event.offsetY - target.y;
			return Math.sqrt((diffX * diffX) + (diffY * diffY));
		}

		//получить для расстояние строку подсказки
		let getDistanceHint = function (distance) {
			if(distance < 10) {
				return "Оббожёшься!";
			} else if (distance < 20) {
				return "Очень горячо";
			} else if (distance < 40) {
				return "Горячо";
			} else if(distance < 80) {
				return "Тепло";
			} else if(distance < 160) {
				return "Холодно";
			} else if(distance < 320) {
				return "Очень холодно";
			} else {
				return "Замерзнешь!";
			}

		}

		

		$("#map").click(function (event) { // обработчик кликов
			clicks++;
			//подсчёт кликов

			let numberOfClicks =41 - clicks;
			$("#clicks").text("Осталось " + (numberOfClicks) + " кликов!");

			//если превысить количество кликов
			if (numberOfClicks <= 0) {
				alert("Клад потерялся :(");
				location.reload(); // перезагружает браузер
			}

			//получаем расстояние от места клика до клада
			let distance = getDistance(event, target);

			//преобразуем расстояние в подсказку
			let distanceHint = getDistanceHint(distance);

			//записываем в элемент distance новую подсказку
			$("#distance").text(distanceHint);
				
			//проверка на победу
			if(distance < 8) {
				alert("Клад найден! Сделано кликов: " + clicks);
				$("#klad").offset({top: target.y + 65, left: target.x + -10});

				$("#klad").show();




			}
		});
