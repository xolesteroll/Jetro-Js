const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');// Родитель для кнопок
// Получаем псевдомассив из всех button на странице

console.log(btns[0].classList.length);
// Выводим в консоль количество классов данного элемента

console.log(btns[0].classList.item(0));
// Выводим в консоль первый класс элемента

console.log(btns[0].classList.add('class'));
// Добавляем элменту класс

console.log(btns[0].classList.remove('class'));
// Удаляем класс у элемента

console.log(btns[0].classList.toggle('class'));
// Добавляем класс если его нет, и удаляем если он уже есть

console.log(btns[0].classList.contains('class'));
// Проверяем элемент на наличие данного класса, на выходе получаем либо true либо false


btns[0].addEventListener('click', () => { // При клике на первую кнопку
    if (!btns[1].classList.contains('red')) { // Проверяем вторую кнопку на наличие класса red
        btns[1].classList.add('red'); // Если такого класса нет то добавляем
    } else {
        btns[1].classList.remove('red'); // Если же такой класс у второй кнопки есть то мы его удаляем
    }
});

// ТОже самое только с методом toggle
btns[0].addEventListener('click', () => { // При клике на первую кнопку
    btns[1].classList.toggle('red'); // ТОглим класс red для второй кнопки
});

// Делегирвоание Событий

wrapper.addEventListener('click', (event) => { // Вешаем обработчик события на родителя всех кнопок
    if (event.target && event.target.tagName == "BUTTON") { 
     //   (event.target && event.target.matches('button')) еще один вариант на проверку элемента по селектору
        // Проверяем 
        // event target на наличие, и проверяем чтобы tagName его был равен "BUTTON"
        // Этот tagName в свою очередь можно взять если вывести event target через
        // console.dir(event.traget)
        console.log('Hello');
        // Теперь только при клике на кнопки будет улавливаться событие, тоесть
        // само событие мы вешаем на родителя но с помощью делегирования теперь 
        // Это событие отлавливается только при клике на button у которого tagName == "BUTTON"
    }
});

btns.forEach(btn =>  { // Назначаем обработчик события при помощт перебора элементов
    btn.addEventListener('click', () => { // Перебираем каждый элемент внутри
        // псевдомассива и навешиваем на каждый обработчик события
        console.log('Hello');
        // Так как кнопка которую мы добавили динамически была добавлена после данного перебора
        // На нее данный обработчик события не повесится
    });
});

const btn = document.createElement('button'); // Создаем нвоый элемент
btn.classList.add('red'); // ДОбавляем ему класс red
wrapper.append(btn); // Вставляем его в нашего родителя wrapper
// И теперь делегирование событий работает и на этот созданный только что элемент
// И теперь все button который мы добавим в этого родителя будут приемниками данного  события
