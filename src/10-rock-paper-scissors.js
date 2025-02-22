let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElement();

/*  
if (!score) {
  score = {
    wins: 0,
    looses: 0,
    ties: 0
  };
}
*/

function playGame(playerMove) {
  const computerMOve = pickComputerMove();

  let result = '';

  if (playerMove === 'scissors') {
    if ( computerMOve === 'rock' ) {
      result = 'You lose.';
    } else if ( computerMOve === 'paper' ) {
      result = 'You win.';
    } else if ( computerMOve === 'scissors' ) {
      result = 'Tie.';
    }

  } else if (playerMove === 'paper') {
    if ( computerMOve === 'rock' ) {
      result = 'You win.';
    } else if ( computerMOve === 'paper' ) {
      result = 'Tie.';
    } else if ( computerMOve === 'scissors' ) {
      result = 'You lose.';
    }
    
  } else if (playerMove === 'rock') {
    if ( computerMOve === 'rock' ) {
      result = 'Tie.';
    } else if ( computerMOve === 'paper' ) {
      result = 'You lose.';
    } else if ( computerMOve === 'scissors' ) {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-move').innerHTML = `You 
<img src="images/${playerMove}-emoji.png" class="move-icon">
<img src="images/${computerMOve}-emoji.png" class="move-icon">
Computer`;

}

function updateScoreElement () {
  document.querySelector('.js-score')
      .innerHTML =  `Wins: ${score.wins}, Losses: ${score.losses}, Ties:${score.ties}`;
}

function pickComputerMove () {
  const randomNumber = Math.random();

  let computerMOve = '';

  if ( randomNumber >= 0 && randomNumber < 1 / 3 ) {
    computerMOve = 'rock';
  } else if ( randomNumber >= 1 / 3 && randomNumber < 2 / 3 ) {
    computerMOve = 'paper';
  } else if ( randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMOve = 'scissors';
  }

  return computerMOve;
}