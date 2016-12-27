## fly.search.get

### Описание полей запроса
* search_id - поисковой идентификатор

### Описание полей ответа
* error - описание ошибки. Запрос выполнен с ошибкой если значение поля пришло в строковом формате
* search - объект содержащий в себе информацию о запросе и список предложений
* search.id - идентификатор поиска
* search.env - определяет в каком окружении был сделан запрос. T - в тестовой среде. P - в настоящей.
* search.partner_id - партнерский идентификатор
* search.class - класс обслуживания (E - эконом, B - бизнес, F - первый класс)
* search.travelers - информация о пассажирах. По умолчанию поисковой результат содержит стоимость по каждой возрастной категории пассажиров.  
* search.travelers.A - количество взрослых. 
* search.travelers.С - количество детей (возраст от 2 до 12 лет)
* search.travelers.I - количество младенцев (возраст до 2 лет)
* search.routes - список маршрутов
* search.routes[].from - IATA код пункта отправления
* search.routes[].to - IATA код пункта назначения
* search.routes[].date - дата вылета в формате YYYY-MM-DD
* search.solutions - список найденых предложений
* search.solutions[].id - идентификатор предложения. 
* search.solutions[].currency - валюта, по которой билет будет оформлен
* search.solutions[].refundable - определяет возможность возврата билета и может принимать значения true/false. Условия возврата зависят от правил расчета тарифа.
* search.solutions[].class - класс обслуживания, совпадает с поисковым запросом
* search.solutions[].from - IATA код пункта отправления для данного предложения
* search.solutions[].to - IATA код пункта назначения для данного предложения
* search.solutions[].outbound - объект содержащий дату и время отправления
* search.solutions[].outbound.date - дата отправления в формате YYYY-MM-DD
* search.solutions[].outbound.time - местное время отправления в формате HH:mm
* search.solutions[].return - объект содержащий дату и время возвращения обратно. Может принимать значение null, если поиск по направлению в одну сторону
* search.solutions[].return.date - дата возвращения в формате YYYY-MM-DD
* search.solutions[].return.time - местное время возвращения в формате HH:mm
* search.solutions[].carrier - IATA код авиакомпании. В данном случае код маркетинговой авиакомпания на бланке
* search.solutions[].journeys - список маршрутов. Содержит один элемент, если билет в одну сторону (one-way) и два элемента, если туда и обратно (round-trip)
* search.solutions[].journeys[].from - IATA код пункта отправления для данного маршрута
* search.solutions[].journeys[].to - IATA код пункта назначения для данного маршрута
* search.solutions[].journeys[].departure - объект содержащий дату и время отправления для данного маршрута
* search.solutions[].journeys[].departure.date - дата отправления в формате YYYY-MM-DD для данного маршрута
* search.solutions[].journeys[].departure.time - местное время отправления в формате HH:mm для данного маршрута
* search.solutions[].journeys[].arrival.date - дата прибытия в формате YYYY-MM-DD для данного маршрута
* search.solutions[].journeys[].arrival.time - местное время прибытия в формате HH:mm для данного маршрута
* search.solutions[].journeys[].carrier - IATA код авиакомпании. В данном случае код маркетинговой авиакомпания на бланке
* search.solutions[].journeys[].duration - общая длительность маршрута в минутах включая пересадку 
* search.solutions[].journeys[].delay - общая длительность ожидания в минутах во время пересадок на маршруте
* search.solutions[].journeys[].flights - список рейсов на данном маршруте
* search.solutions[].journeys[].flights[].from - IATA код пункта отправления для данного рейса
* search.solutions[].journeys[].flights[].to - IATA код пункта назначения для данного рейса
* search.solutions[].journeys[].flights[].departure - объект содержащий дату и время отправления для данного рейса
* search.solutions[].journeys[].flights[].departure.date - дата отправления в формате YYYY-MM-DD для данного рейса
* search.solutions[].journeys[].flights[]departure.time - местное время отправления в формате HH:mm для данного рейса
* search.solutions[].journeys[].flights[]arrival.date - дата прибытия в формате YYYY-MM-DD для данного рейса
* search.solutions[].journeys[].flights[].arrival.time - местное время прибытия в формате HH:mm для данного рейса
* search.solutions[].journeys[].flights[].carrier - IATA код авиакомпании. Маркетинговая авиакомпания на бланке
* search.solutions[].journeys[].flights[].operating_carrier - IATA код авиакомпании. Авиакомпания осуществляющая рейс
* search.solutions[].journeys[].flights[].number - номер рейса
* search.solutions[].journeys[].flights[].equipment - модель самолета
* search.solutions[].journeys[].flights[].duration - длительность рейса в минутах включая пересадку 
* search.solutions[].journeys[].flights[].delay - длительность ожидания в минутах во время пересадки
* search.solutions[].journeys[].flights[].from_terminal - терминал выхода на посадку
* search.solutions[].journeys[].flights[].to_terminal - терминал прибытия после приземления