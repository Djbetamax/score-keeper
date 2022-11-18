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
		btnReset.classList.add("disabled")
	}
}

const addPoint = index => {
	score.children[index].innerHTML++;
	btnReset.classList.remove("disabled");

	if (index == 0) {
		score.children[0].style.color = "rgba(21, 131, 248, 1)"
	} else {
		score.children[1].style.color = "rgba(15, 141, 15, 1)"
	}
};

const untilNum = () => {
	if (score.children[0].innerHTML == firstTo.value || score.children[1].innerHTML == firstTo.value) {
		btnOne.classList.add('disabled');
		btnTwo.classList.add('disabled');
	}
}

// * Listeners
btnOne.addEventListener('click', () => {
	addPoint(0);
	untilNum();
})

btnTwo.addEventListener('click', () => {
	addPoint(1);
	untilNum();
})

btnReset.addEventListener('click', reset);