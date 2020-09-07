// События и их обработчики

/* Собития и и= обработчики можно указывать инлайново прямо в верстке но давно уже не используется
данный метод */

// const btn = document.querySelector('a');
// btn.onclick = function() { // такой код почти не сипользуется
//     alert('fuck you');  
// };

// btn.addEventListener('click' , function() { // Более современная запись
//     alert('fuck you'); 
// });

// btn.addEventListener('click' , function(event) { // В качестве аргумента для этого обработчика ипользхуется
//     // объект события event, называть его мы можем как хотим
//     alert('fuck you twcie'); 
// });

let i = 0;

const deleteElement = (e) => { // Создаем функцию которую будем вешать в качестве коллбека на обработчик событий
    console.log(e.target); // e.currentTarget для использования кокретного элемента взаимодейтсвия
    i++;
    if (i == 1){
        e.target.removeEventListener('click', deleteElement);
    }
};

// btn.addEventListener('click', deleteElement); // указываем созданную раньше функцию, в качестве второго аггумента в обработчике события

const link = document.querySelector('a');
const links = document.querySelectorAll('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.currentTarget);
});

links.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.remove();
    });
});
