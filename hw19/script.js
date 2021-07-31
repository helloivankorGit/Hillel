// 1) Напишите функцию, которая ищет подходящие фильмы из заданного
//  списка. 

document.querySelector('#search').addEventListener('input', searchFilm);

var film = document.getElementsByTagName("li");

function searchFilm(element) {
  let counter = 0,
      searchStr = this.value;
  for (i = 0; i < film.length; i++) {
    if(film[i].innerHTML.indexOf(searchStr) > -1) {
      counter++;
    }
  }
  document.querySelector('#filmsCount').innerHTML = counter;
}

// Используйте значение из инпута #search и событие input, чтобы 
// подсчитать количество фильмов, которые удовлетворяют строке
//  поиска. Выведите общий результат найденных фильмов в #filmsCount

// ==================================================================
// =====================================================================

// 2) Напишите функцию, которая создает нумерованный подсписок 
// по клику на опцию li. 

// Нажав на любой тег, должен появится нумерованный список 
// ингридиентов из данного меню. Вы можете использовать
//  представленный объект.

const INGREDIENTS = {
  "cocoa": ["cocoa powder", "milk", "sugar"],
  "cappuccino": ["milk", "coffee"],
  "smoothie": ["banana", "orange", "sugar"],
  "matcha frappe": ["matcha", "milk", "ice"]
};

let ul = document.getElementById("menu"),
    activeClass = 'active';

ul.addEventListener("click", function (event) {
  let trigger = event.target;

  if(trigger.classList.contains(activeClass)) {
    trigger.classList.toggle(activeClass);
    trigger.removeChild(trigger.querySelector('ol'));
  } else {
    trigger.classList.toggle(activeClass);
    let ol = document.createElement('ol'),
    subList = INGREDIENTS[trigger.innerHTML];
    
    for(i = 0; i < subList.length; i++) {
      let li = document.createElement('li');
      li.innerHTML = subList[i];
      ol.appendChild(li);
    }
    trigger.append(ol);
  } 
});

// Используйте делегирование событий для реализации.

// upd: Обновите код так, чтобы по второму клику на li, список
//  ингридиентов удалялся.