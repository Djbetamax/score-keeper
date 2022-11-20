// * Variables
const score = document.querySelector(".score");
const firstTo = document.querySelector("#firstTo");
const btnOne = document.querySelector(".btnPlayerOne");
const btnTwo = document.querySelector(".btnPlayerTwo");
const btnReset = document.querySelector(".btnReset");

// * Functions
const reset = function () {
	if (score.children[0].innerHTML != 0 || score.children[1].innerHTML != 0) {
		score.children[0].innerHTML = 0;
		score.children[1].innerHTML = 0;
		score.children[0].style.color = "rgba(0, 0, 0, 0.8)";
		score.children[1].style.color = "rgba(0, 0, 0, 0.8)";
		btnOne.classList.remove('disabled');
		btnTwo.classList.remove('disabled');
		btnReset.classList.add("disabled");
	}
}

const showWinner = () => {
	if (score.children[0].innerHTML > score.children[1].innerHTML) {
		score.children[0].style.color = "rgba(15, 141, 12, 1)";
		score.children[1].style.color = "rgba(255, 12, 12, 1)";
	} else {
		score.children[1].style.color = "rgba(15, 141, 12, 1)";
		score.children[0].style.color = "rgba(255, 12, 12, 1)";
	}
}

const playingTo = () => {
	if (score.children[0].innerHTML == firstTo.value || score.children[1].innerHTML == firstTo.value) {
		btnOne.classList.add('disabled');
		btnTwo.classList.add('disabled');
		showWinner();
	}
}

const addPoint = index => {
	score.children[index].innerHTML++;
	btnReset.classList.remove("disabled");
	playingTo();
};

// * Listeners
btnOne.addEventListener("click", () => addPoint(0));
btnTwo.addEventListener("click", () => addPoint(1));
btnReset.addEventListener("click", () => reset());