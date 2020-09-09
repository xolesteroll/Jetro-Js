window.addEventListener('DOMContentLoaded', () => {
    // Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
        // Получаем все табы с заголовками
        tabsContent = document.querySelectorAll('.tabcontent'),
        // ПОлучаем все табы с контентом
        tabsParent = document.querySelector('.tabheader__items');
    // Получаем родителя табов с заголовками

    function hideTabContent() { // Создаем функцию которая будет прятать все табы с контентом
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            // С помощью этого перебора все табы с контентом получат display none
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
            // С помощтю этого перебора все табы с заголовками лишатся активного класса
        });
    }

    function showTabContent(i = 0) { // Если функция вызывается без аргумента он будет по  умолчанию равен 0
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // Данная функция работает для показа нужного таба 
        tabs[i].classList.add('tabheader__item_active'); // Так же нужному табу заголовку добавляется класс активности
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { // Используем делегирвоание событий на родителе табов с заголовками
        const target = event.target; // Создаем переменную равную объекту события

        if (target && target.classList.contains('tabheader__item')) {
            // Условие если target есть и если он содерижт нужный нам класс
            // То мы запускаем цикл перебора всех всех табов - заголовков
            tabs.forEach((item, i) => {
                if (target == item) {
                    // Если объект на который кликнули совпадает с перебираемым то
                    // Мы вызываем две функции созданные выше
                    hideTabContent(); // Прячет все табы с контентом
                    showTabContent(i);// Показывает таб с индексом i 
                }
            });
        }
    });

    // Timer start

    const deadline = '2020-09-10'; // Дата до окончания отсчета

    function getTimeRemaining(endtime) { // функция для вычисления -
        const t = Date.parse(endtime) - Date.parse(new Date()), // Оставшегося времени в милисекундах
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // общего количества дней оставшихся
            hours = Math.floor((t / (1000 * 60 * 60)) % 24), // Общего количестка оставшихся часов
            minutes = Math.floor((t / (1000 * 60)) % 60), // Общего количества оставшхся минут
            seconds = Math.floor((t / 1000) % 60); // Общее количество оставшихся секунд

        return { // Функция возвращает объект с полученными вычислениями
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };

    }

    function getZero(num) { // Функция для того чтобы добавлять 0 перед однозначными числами
        if (num >= 0 && num < 10) {
            return `0${num}`;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) { // Функция для выставления времени в нашу структуру
        const timer = document.querySelector(selector), // Получаем родителя всех отделов времиени
            days = timer.querySelector('#days'), // Получаем элемент отображающий дни на странице
            hours = timer.querySelector('#hours'), // Получаем элемент отображающий часы на странице
            minutes = timer.querySelector('#minutes'), // Получаем элемент отображающий минуты на странице
            seconds = timer.querySelector('#seconds'), // Получаем элемент отображающий секунды на странице
            timeInterval = setInterval(updateClock, 1000); // Запускаем метод setInterval для обновления счетчика каждую секунду

        updateClock(); // вызываем функция обновления часов сразу чтобы она не начиналась после 1 секунды по интервалу
        // а сразу обновляла счетчик, а потмо уже обновлялась каждую секунду

        function updateClock() { // Функция которая и будет обновлять счетчик
            // ее мы задаем в качестве аргумента для setInterval
            const t = getTimeRemaining(endtime); // Получаем объект возвращенный предыдущей функцией

            days.innerHTML = getZero(t.days); // вставляем полученные значения из этого объекта
            // и вставляем их в нашу верстку
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) { // Останавливаем интервал обновления счетчика

                days.innerHTML = 0;
                hours.innerHTML = 0;
                minutes.innerHTML = 0;
                seconds.innerHTML = 0;
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

    // Timer End

    // Modal Start

    const modalTrigger = document.querySelectorAll('[data-modal]'), // Поулчаем кнопки для открытия модального окна
        modal = document.querySelector('.modal'), // Получаем само модальное окно
        modalCloseBtn = document.querySelector('[data-close]'); // Получаем кнопку закрытия модального окна

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', () => { // Навешиваем обработчик события на кнопку
            modal.classList.add('show');
            modal.classList.remove('hide');
            // modal.classList.toggle('show'); // КАК ВАРИАНТ
            document.body.style.overflow = 'hidden'; // Фиксируем положение сайта, чтобы он не скролился
            // при открытом модальном окне
        });
    });

    function closeModal() {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    }


    modalCloseBtn.addEventListener('click', closeModal);


    // modalCloseBtn.addEventListener('click', () => {
    //     modal.classList.remove('show'); // так как этот код у нас повторяется несколько раз
    //     // мы его выносим в отдельную функцию которую потом сможем использовать повторно
    //     modal.classList.add('hide');
    //     // modal.classList.toggle('show');// КАК ВАРИАНТ
    //     document.body.style.overflow = ''; // Возвращаем параметру overflow у body значение по умолчанию
    // });

    modal.addEventListener('click', (e) => { // Делаем так чтобы при клике на пустое пространство
        // Вокруг модального окна оно так же закрывалось

        if (e.target && e.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => { // вешаем на document обработчик события 
        // Который будет отслеживать нажатие клавищи Esc и закрывать при этом наше модальное окно
        if (e.code === 'Escape' && modal.classList.contains('show')) { // Если свойство code у e === 'escape' закрыввается модальное окно
            closeModal();
        }
    });





    // Modal End

});