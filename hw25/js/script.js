let randomCharacters = Array.from({length: 10}, () => Math.floor(Math.random() * 671));

async function getCharacters () {
    let response = await fetch(`https://rickandmortyapi.com/api/character/${randomCharacters.toString()}`);
	return response.json();
}

async function start() {
    let data = await getCharacters();
    data.forEach(element => {
        createCard(element.name, element.species, element.status, element.location.name, element.image, element.gender);
    });
	console.log(data);
}

start();

const container = document.querySelector('.container');

function createCard(characterName, characterSpecies, characterStatus, location, imageUrl, gender) {
	const card = document.createElement('div');
	card.classList.add('card');
	card.setAttribute('data-gender', gender);
	card.setAttribute('data-status', characterStatus);

	const cardInfo = document.createElement('div');
	cardInfo.classList.add('card-info');

	const cardTitle = document.createElement('div');
	cardTitle.classList.add('title');
	const cardTitleH1 = document.createElement('h1');
	cardTitleH1.innerHTML = characterName;
	cardTitle.append(cardTitleH1);

	const cardStatus = document.createElement('div');
	cardStatus.classList.add('status');
	const cardLiveStatus = document.createElement('div');
	cardLiveStatus.classList.add('live-status');
	if(characterStatus === 'Dead') {
		cardLiveStatus.classList.add('dead');
	}

	const cardStatusP = document.createElement('p');
	const cardStatusPText = document.createTextNode(`${characterSpecies} -- ${characterStatus}`);
	cardStatus.append(cardLiveStatus);
	cardStatusP.append(cardStatusPText);
	cardStatus.append(cardStatusP);
	cardTitle.append(cardStatus);
	cardInfo.append(cardTitle);

	const cardContent = document.createElement('div');
	cardContent.classList.add('content');
	const cardContentText = document.createTextNode(location);
	cardContent.append(cardContentText);
	cardInfo.append(cardContent);

	card.append(cardInfo);

	const cardImage = document.createElement('div');
	cardImage.classList.add('card-image');
	const image = document.createElement('img');
	image.src = imageUrl;
	image.alt = characterName;
	cardImage.append(image);
	card.append(cardImage);

	container.append(card);
}