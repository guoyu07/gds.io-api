## Общие положения

Взаимодействие с системой gds.io происходит посредством HTTP и/или через WEBSOCKET интерфейс. Структура данных и формат каждого запроса к серверу не зависят от интерфейса передачи данных и полностью описывает себя в формате JSON.

В зависимости от того, какой интерфейс используется, доступны следующие узлы:
* https://api.gds.io
* wss://api.gds.io

JSON объект каждого запроса всегда содержит обязательные поля:
* {api} - определяет действие, выполняемое на сервере
* {env} - используемое окружение
* {token} - ключевой идентификатор партнера

Окружение делится на тестовое и настоящее. И может принимать следующие значения поля {env}:
* T - для отладки и тестирования. 
* P - продакшн

Система gds.io реализует концепцию независимых друг от друга услуг, в рамках которых происходит процесс поиска, бронирования и оплаты.

Такими услугами является API:
* Авиабилеты
* Отели
* Поезда
* Платежный шлюз

Независимость услуг “развязывает руки”, позволяя нашим партнерам максимально эффективно и гибко использовать API, как в связке, так и без, и контролировать весь процесс. Партнер самостоятельно решает, использовать ему наш платежный шлюз для списания денежных средства с карты клиента или воспользоваться собственной реализацией любого стороннего банковского API на своей стороне. С другой стороны, наш платежный шлюз предлагает установку суммы списания для оплаты дополнительных услуг с наценками и/или скидками, а также гарантирует:
* безопасность
* высокую степень защиты
* антифрод систему
* низкую процентную ставку за транзакцию.
