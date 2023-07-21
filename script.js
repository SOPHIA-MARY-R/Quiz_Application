// Questions that will be asked
const Questions = [
    {
        N: "1",
        Q: "What does the acronym 'HTML' stand for?",
        A: [
            { text: "Hypertext Markup Language", isCorrect: true },
            { text: "Hyperlink Text Manipulation Language", isCorrect: false },
            { text: "High-Tech Multimedia Language", isCorrect: false },
            { text: "Home Tool Management Logic", isCorrect: false }
        ]
    },
    {
        N: "2",
        Q: "Which company developed the Android operating system for mobile devices?",
        A: [
            { text: "Apple Inc.", isCorrect: false },
            { text: "Microsoft Corporation", isCorrect: false },
            { text: "Google Inc.", isCorrect: true },
            { text: "Samsung Electronics", isCorrect: false }
        ]
    },
    {
        N: "3",
        Q: "Which programming language is often used for data analysis and scientific computing?",
        A: [
            { text: "Java", isCorrect: false },
            { text: "Python", isCorrect: true },
            { text: "C++", isCorrect: false },
            { text: "Ruby", isCorrect: false }
        ]
    },
    {
        N: "4",
        Q: "What does the term 'URL' stand for?",
        A: [
            { text: "Uniform Resource Locator", isCorrect: true },
            { text: "Universal Routing Link", isCorrect: false },
            { text: "Ultra-Rapid Loading", isCorrect: false },
            { text: "Unified Request Language", isCorrect: false }
        ]
    },
    {
        N: "5",
        Q: "Which of the following is a type of solid-state storage device used in computers and laptops to store data persistently?",
        A: [
            { text: "RAM (Random Access Memory)", isCorrect: false },
            { text: "HDD (Hard Disk Drive)", isCorrect: false },
            { text: "SSD (Solid State Drive)", isCorrect: true },
            { text: "CPU (Central Processing Unit)", isCorrect: false }
        ]
    }
]

let currQuestion = 0;
let score = 0;

function loadQuestion() {
	const question = document.getElementById("question");
	const choice = document.getElementById("choice");

	question.textContent = Questions[currQuestion].Q;
	choice.innerHTML = "";

	for (let i = 0; i < Questions[currQuestion].A.length; i++) {
        const gifElement = document.getElementById("continue-gif");
        gifElement.style.display = "block";

		const choicesdiv = document.createElement("div");
        choicesdiv.setAttribute("class", "all-choices");

		const choiceElement = document.createElement("input");
        choiceElement.setAttribute("id", "choice" + i);   
        choiceElement.type = "radio";
		choiceElement.name = "answer";
		choiceElement.value = i;   

		const choiceLabel = document.createElement("label");
        choiceLabel.setAttribute("for", choiceElement.id);
		choiceLabel.textContent = Questions[currQuestion].A[i].text;	     

		choicesdiv.appendChild(choiceElement);
		choicesdiv.appendChild(choiceLabel);
		choice.appendChild(choicesdiv);

        const doneButton = document.getElementById("done-button");
        doneButton.style.display = "block";

        const startButton = document.getElementById("start-button");
        startButton.style.display = "none";
	}
}

function loadScore() {
	const totalScore = document.getElementById("score");
	totalScore.textContent = `You scored ${score} out of ${Questions.length}!`

    const comment = document.getElementById("comment");

    console.log(score)
    switch(score){
        case 5:
            const danceGif = document.getElementById("vadivelu-dance");
            danceGif.style.display = "block";   
            comment.textContent = "Congrats! You nailed it!";
            comment.style.color = "greenyellow";
            break;

        case 4:
            const happyGif = document.getElementById("vadivelu-laughing");
            happyGif.style.display = "block";
            comment.textContent = "Great job! Nice attempt!";
            comment.style.color = "skyblue";
            break;

        case 3:
            const smirkGif = document.getElementById("vadivelu-smirk");
            smirkGif.style.display = "block";
            comment.textContent = "Try again, you can still be the best!";
            comment.style.color = "yellow";
            break;

        case 2:
            const whatIsThisGif = document.getElementById("ena-idhu");
            whatIsThisGif.style.display = "block";
            comment.textContent = "Good attempt but this is not your best. Try again!";
            comment.style.color = "orange";
            break;

        case 1:
            const doubtGif = document.getElementById("vadivelu-doubt");
            doubtGif.style.display = "block";
            comment.textContent = "Don't worry, you can still make it. Try again!";
            comment.style.color = "orangered";
            break;

        case 0:
            const shockedGif = document.getElementById("vadivelu-shocked");
            shockedGif.style.display = "block";
            comment.textContent = "It's not too late to learn. Try again! You can!!";
            comment.style.color = "red";
            break;
    }

    const playAgainButton = document.getElementById("play-again-button");
    playAgainButton.style.display = "block";
}


function nextQuestion() {
	if (currQuestion < Questions.length - 1) {
		currQuestion++;
		loadQuestion();
	} 
    else {
        document.getElementById("continue-gif").remove();
		document.getElementById("choice").remove()
		document.getElementById("question").remove()
		document.getElementById("done-button").remove()
		loadScore();
	}
}

function checkAnswer() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);

	if (Questions[currQuestion].A[selectedAns].isCorrect) {
		score++;
		// console.log("Correct")
		nextQuestion();
	} else {
		nextQuestion();
	}
}