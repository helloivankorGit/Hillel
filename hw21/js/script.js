/* Initial song list */
let songs = [{
  name: 'Jingle Bells',
  isLiked: false,
}, {
  name: 'We Wish You a Merry Christmas',
  isLiked: true,
}];

let songsList = document.querySelector('.songs'),
    addSongBtn = document.querySelector('.add'),
    songInput = document.querySelector('.input-box'),
    heart = document.createElement('img');
    heart.src = 'images/like.svg',
    songCounter = document.querySelector('.count');

addSongBtn.addEventListener('click', function() {
  if(songInput.value) {
    addSong(songInput.value);
    songInput.value = '';
  }
})

window.addEventListener('load', function() {
  createSongsList(songs);
});

function createSongsList(arr) {
  arr
  .forEach(element => {
    let li = document.createElement('li'),
      textContainer = document.createElement('span');

    textContainer.innerHTML = element.name;
    li.append(textContainer);

    if(element.isLiked) {
      li.classList.add('liked');
      addButton('Unlike', 'active', li, likeSong);
    } else {
      addButton('Like', 'like', li, likeSong);
    }

    addButton('Delete', 'delete', li, deleteSong);
    addHeart(li);
    
    songsList.append(li);
  });
  updateSongCounter();
}

function addHeart(target) {
  let heart = document.createElement('img');
  heart.src = 'images/like.svg';
  target.prepend(heart);
}

function addButton(title, className, target, func) {
  let button = document.createElement('button');
  button.innerHTML = title;
  button.classList.add('button', className);
  if(className == 'active') {
    button.classList.add('like');
  }
  button.addEventListener('click', func);
  target.append(button);
}

function deleteSong(event) {
  event.target.parentElement.remove();
  updateSongCounter();
}

function likeSong(event) {
  let clickedElement = event.target;
  
  clickedElement.parentElement.classList.toggle('liked');
  clickedElement.classList.toggle('active');

  if(clickedElement.classList.contains('active')) {
    clickedElement.innerHTML = 'Unlike'
  } else {
    clickedElement.innerHTML = 'Like'
  }
}

function addSong(songName) {
  let li = document.createElement('li'),
      textContainer = document.createElement('span');

  textContainer.innerHTML = songName;
  li.append(textContainer);

  addButton('Like', 'like', li, likeSong);
  addButton('Delete', 'delete', li, deleteSong);
  addHeart(li);

  songsList.append(li);
  updateSongCounter();
}

function updateSongCounter() {
  songCounter.innerHTML = document.querySelectorAll(".songs li").length;
}