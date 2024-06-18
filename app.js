const box = document.querySelectorAll('.box');
const replay = document.getElementsByClassName('playagain');
const outputText = document.getElementsByClassName('output');

console.log(replay[0]);
console.log(box);
let count = 0;
let gameover = 'false';

// for (let i = 0; i < 9; i++) {
//   box[i].addEventListener('click', () => {
//     if (count % 2 == 0) {
//       box[i].innerHTML = 'X';
//       box[i].style.pointerEvents = 'none';
//     } else {
//       box[i].innerHTML = 'O';
//       box[i].style.pointerEvents = 'none';
//     }
//     count++;
//   });
// }

// ALTERNATIVE WAY OF DOING THE ABOVE IS AS FOLLOWS

box.forEach((e) => {
  e.addEventListener('click', () => {
    if (gameover == 'false') {
      if (count % 2 == 0) {
        e.innerHTML = 'X';
        e.style.color = '#e8198b';
        e.style.pointerEvents = 'none';
        checkWin();
      } else {
        e.innerHTML = 'O';
        e.style.color = '#c7eafd';
        e.style.pointerEvents = 'none';
        checkWin();
      }
    }
    count++;
  });
});

function checkWin() {
  let wincondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < wincondition.length; i++) {
    let val0 = box[wincondition[i][0]];
    let val1 = box[wincondition[i][1]];
    let val2 = box[wincondition[i][2]];

    if (
      val0.innerHTML != '' &&
      val0.innerHTML === val1.innerHTML &&
      val0.innerHTML === val2.innerHTML
    ) {
      gameover = 'true';
      console.log(`${val0.innerHTML} wins!`);
      outputText[0].innerHTML = `${val0.innerHTML} wins!`;
      if (val0.innerHTML == 'O') {
        outputText[0].style.background = '#76B041';
        val0.style.background = '#76B041';
        val1.style.background = '#76B041';
        val2.style.background = '#76B041';
      } else {
        outputText[0].style.color = 'black';
        outputText[0].style.background = '#FDF0D5';
        val0.style.background = '#FDF0D5';
        val1.style.background = '#FDF0D5';
        val2.style.background = '#FDF0D5';
      }
    }
  }
}

function playAgain() {
  replay[0].addEventListener('click', () => {
    gameover = 'false';
    location.reload();
    return false;
  });
}

playAgain();

// neon blue hex : #4D6CFA
// raspberry : #D81E5B
