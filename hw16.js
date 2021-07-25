// 1) Напишите функцию, которая изменяет фоновый цвет текста 
// последнего параграфа в блоке <body>, а так же функцию,
//  которая меняет блоки footer и main местами.

function first() {
  document.querySelector('#main p:last-child').style.backgroundColor = 'red';
  document.body.prepend(document.querySelector('#main'));
}

first();
