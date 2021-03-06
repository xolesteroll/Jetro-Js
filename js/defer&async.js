'use sctrict';

<script defer src="script.js"></script> 
// Атрибут defer сообщает бразузеру чтобы он продолжать загружать контент странцы
// а сам скрипт прогружал в фоновом режиме и не останавливался на нем
// Все скрипты с этим атрибутом будут выполнятся в порядке очереди
// Позволяет работать с элементами на странице когда они ниже в хтмл чем скрипт
// ТОесть позволяет взаимодейтсвовать с элементами которые по сути еще не загрузились


<script async src="script.js"></script>
// Страница не ждет скрипты с атрибутом async содержимое просто обрабатывается и отображается
// DOMContentLoaded и асинхронные скрипты не ждут друг друга
// Скрипты с этим атрибутом являются полностью не зависимымиони никого и ничего не жду
// Их никто и ничто не ждет и выполняются они по мере обнаружения

const script = document.createTextNode('script');
script.src = 'js/test.js';
script.async = false; // так как у созданных и вставляемых с помозью js на страницу
// элементов по умолчанию стоит атрибут async, таким образом мы можем его отменить
document.body.append(script);

