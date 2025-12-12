const X_CLASS = "x";
const O_CLASS = "o";

const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("game-board");
const winnersectionElement = document.getElementById("winner-section");
const declareWinnerTextElement = document.querySelector("[declare-winner]");
const restartButton = document.querySelectorAll("#restartButton");

let oTurn;

startTheGame();

restartButton.forEach((button) =>
  button.addEventListener("click", startTheGame)
);

function startTheGame() {
  oTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove("X_CLASS");
    cell.classList.remove("O_CLASS");
    cell.innerText = "";
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });

  setBoardHoverClass();
  winnersectionElement.style.display = "none";
}

function handleClick(e) {
  const cell = e.target;
  const currentClass = oTurn ? O_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
}

function setBoardHoverClass() {
  board.classList.remove(X_CLASS);
  board.classList.remove(O_CLASS);
  if (oTurn) {
    board.classList.add(O_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
}

function endGame(status) {
  console.log(status);
  //status - true - draw // false - someone is won
  if (status) {
    declareWinnerTextElement.innerText = "Draw";
  } else {
    declareWinnerTextElement.innerText = `${oTurn ? "O's" : "X's"} wins`;
  }
  winnersectionElement.style.display = "block";
  console.log(declareWinnerTextElement.innerText);
}

function isDraw() {
  const draw = [...cellElements].every((cell) => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS);
  });
  console.log("isDraw", `${draw}`);
  return draw;
}

function placeMark(cell, currentClass) {
  cell.classList.add(currentClass);
  cell.innerText = currentClass.toUpperCase();
}

function swapTurns() {
  oTurn = !oTurn;
}

function checkWin(currentClass) {
  const hasWon = WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
  console.log("cellElement", currentClass, hasWon);
  return hasWon;
}
