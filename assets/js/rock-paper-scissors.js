let compMove = ["rock", "paper", "scissors"].at(Math.floor(Math.random() *3));
let userMove;
let counter = 0;

function choosedCompMove(){
  if(compMove === 'rock'){
    compMoveIcon.src = 'assets/images/rock.svg'
  }
  if(compMove === 'paper'){
    compMoveIcon.src = 'assets/images/paper.svg'
  }
  if(compMove === 'scissors'){
    compMoveIcon.src = 'assets/images/scissors.svg'
  }
}

function choosedCompMoveDesktop(){
  if(compMove === 'rock'){
    compMoveIconDesktop.src = 'assets/images/rock--desktop.svg'
  }
  if(compMove === 'paper'){
    compMoveIconDesktop.src = 'assets/images/paper--desktop.svg'
  }
  if(compMove === 'scissors'){
    compMoveIconDesktop.src = 'assets/images/scissors--desktop.svg'
  }
}

function winnerResultDesktop(){
  playBtnContainerDesktop.style.display = 'flex';
  if(userMove === 'rock'){
    if(userMove === compMove){
      return resultDesktop.innerText = 'DRAW';
    } else if(compMove === 'paper') {
      winnerCompDesktop.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU LOSE';
    } else if(compMove === 'scissors') {
      winnerUserDesktop.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU WIN';
    }
  }
  if(userMove === 'paper'){
    if(userMove === compMove){
      return resultDesktop.innerText = 'DRAW';
    } else if(compMove === 'scissors') {
      winnerCompDesktop.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU LOSE';
    } else if(compMove === 'rock') {
      winnerUserDesktop.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU WIN';
    }
  }
  if(userMove === 'scissors'){
    if(userMove === compMove){
      return resultDesktop.innerText = 'DRAW';
    } else if(compMove === 'rock') {
      winnerCompDesktop.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU LOSE';
    } else if(compMove === 'paper') {
      winnerUserDesktop.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return resultDesktop.innerText = 'YOU WIN';
    }
  }
}

function winnerResult(){
  playBtnContainer.style.display = 'flex';
  if(userMove === 'rock'){
    if(userMove === compMove){
      return result.innerText = 'DRAW';
    } else if(compMove === 'paper') {
      winnerComp.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU LOSE';
    } else if(compMove === 'scissors') {
      winnerUser.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU WIN';
    }
  }
  if(userMove === 'paper'){
    if(userMove === compMove){
      return result.innerText = 'DRAW';
    } else if(compMove === 'scissors') {
      winnerComp.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU LOSE';
    } else if(compMove === 'rock') {
      winnerUser.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU WIN';
    }
  }
  if(userMove === 'scissors'){
    playBtnContainer.style.display = 'flex';
    if(userMove === compMove){
      return result.innerText = 'DRAW';
    } else if(compMove === 'rock') {
      winnerComp.style.display = 'block';
      counter--;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU LOSE';
    } else if(compMove === 'paper') {
      winnerUser.style.display = 'block';
      counter++;
      scoreCounter.innerText = counter;
      return result.innerText = 'YOU WIN';
    }
  }
}

function playAgain(){
  playBtnContainer.style.display = 'none';
  winnerComp.style.display = 'none';
  winnerUser.style.display = 'none';
  userMoves.style.display = 'none';
  usersChoice.style.display = 'block';
  compMove = ["rock", "paper", "scissors"].at(Math.floor(Math.random() *3));
}

function playAgainDesktop(){
  playBtnContainer.style.display = 'none';
  winnerCompDesktop.style.display = 'none';
  winnerUserDesktop.style.display = 'none';
  userMoves.style.display = 'none';
  usersChoice.style.display = 'block';
  compMove = ["rock", "paper", "scissors"].at(Math.floor(Math.random() *3));
}

function choosePaper(){
  userMove = 'paper';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIcon.src = 'assets/images/paper.svg';
  choosedCompMove();
  winnerResult();
  playBtn.addEventListener('click', playAgain);
  document.body.style.height = '100%';
}

function choosePaperDesktop(){
  userMove = 'paper';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIconDesktop.src = 'assets/images/paper--desktop.svg';
  choosedCompMoveDesktop();
  winnerResultDesktop();
  playBtnDesktop.addEventListener('click', playAgainDesktop);
}

function chooseScissors(){
  userMove = 'scissors';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIcon.src = 'assets/images/scissors.svg';
  document.body.style.height = '';
  choosedCompMove();
  winnerResult();
  playBtn.addEventListener('click', playAgain);
  document.body.style.height = '100%';
}

function chooseScissorsDesktop(){
  userMove = 'scissors';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIconDesktop.src = 'assets/images/scissors--desktop.svg';
  choosedCompMoveDesktop();
  winnerResultDesktop();
  playBtnDesktop.addEventListener('click', playAgainDesktop);
}

function chooseRock(){
  userMove = 'rock';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIcon.src = 'assets/images/rock.svg';
  choosedCompMove();
  winnerResult();
  playBtn.addEventListener('click', playAgain);
  document.body.style.height = '100%';
}

function chooseRockDesktop(){
  userMove = 'rock';
  usersChoice.style.display = 'none';
  userMoves.style.display = 'flex';
  userMoveIconDesktop.src = 'assets/images/rock--desktop.svg';
  choosedCompMoveDesktop();
  winnerResultDesktop();
  playBtnDesktop.addEventListener('click', playAgainDesktop);
}

function showRules(){
  rulesPage.style.display = 'flex';
  opacityBg.style.display = 'block';
}

function exitRules(){
  rulesPage.style.display = 'none';
  opacityBg.style.display = 'none';
}

paperBtn.addEventListener('click', choosePaper);
paperBtnDesktop.addEventListener('click', choosePaperDesktop);
scissorsBtn.addEventListener('click', chooseScissors);
scissorsBtnDesktop.addEventListener('click', chooseScissorsDesktop);
rockBtn.addEventListener('click', chooseRock);
rockBtnDesktop.addEventListener('click', chooseRockDesktop);
rulesBtn.addEventListener('click', showRules);
exitIconMobile.addEventListener('click', exitRules);
exitIconDesktop.addEventListener('click', exitRules);
