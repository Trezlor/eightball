function another() {
	const randomNumber = Math.floor(Math.random() * 20 + 1);
	const eightBall = document.getElementById("prediction");

	if (randomNumber === 1) {
		eightBall.textContent = "It is certain.";
	} else if (randomNumber === 2) {
		eightBall.textContent = "It is decidedly so.";
	} else if (randomNumber === 3) {
		eightBall.textContent = "Without a doubt.";
	} else if (randomNumber === 4) {
		eightBall.textContent = "Yes definitely.";
	} else if (randomNumber === 5) {
		eightBall.textContent = "You may rely on it.";
	} else if (randomNumber === 6) {
		eightBall.textContent = "As I see it, yes.";
	} else if (randomNumber === 7) {
		eightBall.textContent = "Most likely.";
	} else if (randomNumber === 8) {
		eightBall.textContent = "Outlook good.";
	} else if (randomNumber === 9) {
		eightBall.textContent = "Yes.";
	} else if (randomNumber === 10) {
		eightBall.textContent = "Signs point to yes.";
	} else if (randomNumber === 11) {
		eightBall.textContent = "Reply hazy, try again. ";
	} else if (randomNumber === 12) {
		eightBall.textContent = "Ask again later.";
	} else if (randomNumber === 13) {
		eightBall.textContent = "Better not tell you now.";
	} else if (randomNumber === 14) {
		eightBall.textContent = "Cannot predict now.";
	} else if (randomNumber === 15) {
		eightBall.textContent = "Concentrate and ask again.";
	} else if (randomNumber === 16) {
		eightBall.textContent = "Don't count on it.";
	} else if (randomNumber === 17) {
		eightBall.textContent = "My reply is no.";
	} else if (randomNumber === 18) {
		eightBall.textContent = "My sources say no.";
	} else if (randomNumber === 19) {
		eightBall.textContent = "Outlook not so good.";
	} else if (randomNumber === 20) {
		eightBall.textContent = "Very doubtful.";
	}
}

another();
