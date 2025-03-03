updateView();
function updateView(){
    document.getElementById('view').innerHTML = `
    <img src="Croccodile.png" alt="">
    <div class="container">
        <div>${num1}</div>
        <input id="biggerOrLower" type="text" placeholder="Enter >, <, or =" />
           <div>${num2}</div>
     
    </div>
    
    <div class="buttons">
        <button id="submit" onclick="submitNumbers()">Submit</button>
        <button id="reset" onclick="resetNumbers()">Reset</button>
    </div>
    
    <div>Score: ${score}</div> `;
}
