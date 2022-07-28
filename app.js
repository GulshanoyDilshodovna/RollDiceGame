//buttons
const resetBtn = document.getElementById('reset__btn'),
    diceBtn = document.getElementById('dice__btn'),
    holdBtn = document.getElementById('hold__btn'),
    //dice image
    diceImg = document.getElementById('img');
    diceImg.style.display = 'none'

    //roll dice  function
function rollDice(){
    diceImg.style.display = 'block'
    let randomNbr = Math.floor(Math.random()*6)

}