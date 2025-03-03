function generateNumbers() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    updateView();
}

function submitNumbers() {
    if (!canSubmit) return;
// let nr1 = (document.getElementById('nr1').innerText);
   // let nr2 = (document.getElementById('nr2').innerText);
    let guess = document.getElementById('biggerOrLower').value.trim();
    let correctAnswer;

    if (num1 > num2) {
        correctAnswer = ">";
    } else if (num1 < num2) {
        correctAnswer = "<";
    } else {
        correctAnswer = "=";
    }

    if (guess === correctAnswer) {
        score++;
    }
    if (score === 3){
        alert("You have won!");
        score = 0;
    }
 //   document.getElementById('score').innerText = "Score: " + score;
    canSubmit = false;

    generateNumbers();
    document.getElementById('biggerOrLower').value = '';
    canSubmit = true;
    updateView();
}

function resetNumbers() {
score = 0;
updateView();
}