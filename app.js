//buttons
const resetBtn = document.getElementById("reset__btn"),
  diceBtn = document.getElementById("dice__btn"),
  holdBtn = document.getElementById("hold__btn"),
  //dice image
  diceImg = document.getElementById("img");
diceImg.style.display = "none";
//variables
let currentScore = 0,
  active = 0,
  gameOver = true,
  score = [0, 0];

//switch player function
const switchPlayer = () => {
  currentScore = 0;
  document.getElementById(`account${active}`).textContent = 0;
  active = active === 0 ? 1 : 0;
  document.querySelector(".player0").classList.toggle("player__active");
  document.querySelector(".player1").classList.toggle("player__active");
};
//ROLL DICE BUTTON ADDEVENTLISTENER CLICK
diceBtn.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";
    const randomNbr = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `./images/dice-${randomNbr}.png`;
    if (randomNbr !== 1) {
      currentScore += randomNbr;
      document.getElementById(`account${active}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});
//HOLD BUTTON ADDEVENTLISTENER CLICK
holdBtn.addEventListener("click", () => {
  if (gameOver) {
    score[active] += currentScore;
    document.getElementById(`score${active}`).textContent = score[active];
    if (score[active] >= 20) {
        document.querySelector(`.player${active}`).classList.add('winner')
        gameOver = false;
    } else {
      switchPlayer();
    }
  }
});
//NEW GAME/RESET  BUTTON ADDEVENTLISTENER CLICK
resetBtn.addEventListener('click', ()=>{
  currentScore = 0
  active = 0
  gameOver = true
  score = [0, 0]
  document.getElementById(`account0`).textContent = 0;
  document.getElementById(`account1`).textContent = 0;
  document.getElementById(`score0`).textContent = 0;
  document.getElementById(`score1`).textContent = 0;
  document.querySelector('.player0').classList.remove('winner')
  document.querySelector(`.player1`).classList.remove('winner')
  document.querySelector(`.player0`).classList.add('player__active')
  document.querySelector(`.player1`).classList.remove('player__active')
})
