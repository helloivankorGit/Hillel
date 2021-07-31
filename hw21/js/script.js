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
    heart.src = 'images/like.svg';

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
    
    addButton('Like', 'like', li);
    addButton('Delete', 'delete', li);
    let heart = document.createElement('img');
    heart.src = 'images/like.svg';
    li.prepend(heart);

    if(element.isLiked) {
      li.classList.add('liked');
    }

    songsList.append(li);
  });
}

function addButton(title, className, target) {
  let button = document.createElement('button');
  button.innerHTML = title;
  button.classList.add('button', className);
  target.append(button);
}

function addSong(songName) {
  let li = document.createElement('li');
  li.innerHTML = songName;

  addButton('Like', 'like', li);
  addButton('Delete', 'delete', li);
  let heart = document.createElement('img');
  heart.src = 'images/like.svg';
  li.prepend(heart);

  songsList.append(li);
}

songsList.addEventListener('click', function(event) {
  let clickedElement = event.target;
  if(clickedElement.classList.contains('delete')) {
    clickedElement.parentElement.remove();
  } else if (clickedElement.classList.contains('like')) {
    clickedElement.parentElement.classList.toggle('liked');
  }
})