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
    let li = document.createElement('li');
    li.innerHTML = element.name;

    addButton('Like', 'like', li, likeSong);
    addButton('Delete', 'delete', li, deleteSong);
    let heart = document.createElement('img');
    heart.src = 'images/like.svg';
    li.prepend(heart);

    if(element.isLiked) {
      li.classList.add('liked');
    }

    songsList.append(li);
  });
  updateSongCounter();
}

function addButton(title, className, target, func) {
  let button = document.createElement('button');
  button.innerHTML = title;
  button.classList.add('button', className);
  button.addEventListener('click', func);
  target.append(button);
}

function deleteSong(event) {
  event.target.parentElement.remove();
  updateSongCounter();
}

function likeSong(event) {
  event.target.parentElement.classList.toggle('liked');
}

function addSong(songName) {
  let li = document.createElement('li');
  li.innerHTML = songName;

  addButton('Like', 'like', li, likeSong);
  addButton('Delete', 'delete', li, deleteSong);
  let heart = document.createElement('img');
  heart.src = 'images/like.svg';
  li.prepend(heart);

  songsList.append(li);
  updateSongCounter();
}

function updateSongCounter() {
  songCounter.innerHTML = document.querySelectorAll(".songs li").length;
}