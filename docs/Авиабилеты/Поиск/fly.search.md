## fly.search 

### Описание полей запроса
* class - класс обслуживания. Значением может быть латинский символ E, B или F. Где E - эконом, B - бизнес и F - первый класс, соответственно.
* routes - список направлений. Каждый элемент которого, это JSON объект с полями from, to и date.
* routes[].from - IATA код пункта отправления (город или аэропорт). IATA код указывается буквами верхнего регистра. Например: SFO, MIA
* routes[].to - IATA код пункта отправления (город или аэропорт). IATA код указывается буквами верхнего регистра. Например: SFO, MIA
* routes[].date - дата вылета в формате YYYY-MM-DD
  
### Описание полей ответа
* error - описание ошибки. Запрос выполнен с ошибкой если значение поля пришло в строковом формате
* search_id - идентификатор поиска, по которому можно получить результаты
