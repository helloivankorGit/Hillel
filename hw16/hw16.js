// 1) Напишите функцию, которая изменяет фоновый цвет текста 
// последнего параграфа в блоке <body>, а так же функцию,
//  которая меняет блоки footer и main местами.

function first() {
    document.querySelector('#main p:last-child').style.backgroundColor = 'red';
    document.body.prepend(document.querySelector('#main'));
  }
  
  first();
  
  // 2) Напишите функцию, которая спрашивает у пользователя разрешения
  //  добавить картинку (confirm()) и в случае согласия добавляет 
  // картинку на страницу (ссылку на картинку пользователь должен 
  // задавать самостоятельно).
  // HTML-файл должен быть со следующей структурой в секции <body> :
  
  // <div id="wrapper">
  //   <h1>Images</h1>
  // </div>
  
  
  function addImage() {
    let imageUpload = confirm('Do you want to add image?');
  
    if(imageUpload) {
      let getUrl = prompt('Please enter the image url'),
          img = document.createElement('img'),
          imageWrapper = document.querySelector('#image-wrapper');
  
      img.src = getUrl;
      imageWrapper.appendChild(img).style.width = '100px';
    }
  }
  
  addImage();
  
  // 3) Для этого задания вам понадобится файл index.html 
  // прикрепленный внизу.
  
  // Запросите у пользователя число и добавьте в форму теги <input> 
  // (перед кнопкной Register) равных этому числую.
  
  // Требования к тегу <input>:
  
  // каждый инпут должен содержать класс input-item, 
  // value = `Input ${index}`;
  // последний инпут должен иметь дополнительный класс margin-zero;
  // создайте собственный класс, со свойством background-color и
  //  добавьте его всем нечетным инпутам;
  // очистите значение каждому третьему инпуту и задайте ему атрибут
  //  placeholder с любым текстом.
  // Ожидаемый результат прикреплен внизу.
  
  function crazy() {
    let inputCount = +prompt('How much is the fish?');;
  
    if(inputCount) {
      for(let x = 0; x <= inputCount; x++) {
        let input = document.createElement('input');
            input.className = 'input-item';
            input.value = `Input ${x}`;
  
        if (x % 2) {
          input.classList.add('background-color');
        }
  
        if (x % 3 == 0) {
          input.value = '';
          input.placeholder = 'Enter email address';
        }
  
        if(x === (inputCount - 1)) {
          input.classList.add('margin-zero');
        }
  
        document.querySelector('form .button').before(input);
      }
    }
  }
  
  crazy();