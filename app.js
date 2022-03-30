//Variables
const cards = document.getElementsByClassName('card'),
	cardsList = Array.from(cards);

//Functions
cardsList.forEach(card => {
	card.addEventListener('click', function () {
		turnOffAllCards();
		card.classList.add('on');
	});
});

let turnOffAllCards = () => {
	cardsList.forEach(card => {
		card.classList.remove('on');
	});
};
