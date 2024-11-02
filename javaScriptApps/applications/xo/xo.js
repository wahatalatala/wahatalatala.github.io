let boxes =document.getElementsByClassName("box");
let turn = 'X';
let 
playerx = document.getElementById("x"),
playero = document.getElementById("o");
// lp means last player
let lp = document.getElementById("last");
let player_turn = document.getElementById("turn");
let counter = 0 ;
let last_player = 'X';
let X = 0 , O = 0;

function again(char) {
  // Tab to editboxes
  turn = lp.innerText === 'X' ? 'O' : 'X';
  if (counter === 9);
  else if (char === 'X')
  playerx.innerText = ++X;
  else playero.innerText = ++O;
  counter = 0;
 for (let box of boxes){
box.innerText = "E";
box.style.color = "transparent";
 }
}
for (let x = 0; x < boxes.length; x++) {
 // Tab to editboxes
boxes[x].addEventListener("click",()=>{

//alert ("12 "+boxes[x].innerText);
if (boxes[x].innerText !== 'E')return;
if (turn === 'X') {
 boxes[x].innerText = 'X';
 turn = 'O';}
 else {
  boxes[x].innerText = 'O';
  turn = 'X';
 }
 player_turn.innerText = turn;
 if (!counter) {
 lp.innerText = boxes[x].innerText;
}
counter++;
//alert("22 "+boxes[x].innerText);
boxes[x].style.color = "black";
let b0 = boxes[0].innerText,
b1 = boxes[1].innerText,
b2 = boxes[2].innerText,
b3 = boxes[3].innerText,
b4 = boxes[4].innerText,
b5 = boxes[5].innerText,
b6 = boxes[6].innerText,
b7 = boxes[7].innerText,
b8 = boxes[8].innerText;
if (  
 (b0 === b1 && b0 === b2 && b0 !== 'E')
||    
(b3 === b4 && b3 === b5 && b3 !== 'E')
||    
(b6 === b7 && b6 === b8 && b6 !== 'E')
||    
(b0 === b3 && b0 === b6 && b0 !== 'E')
||    
(b1 === b4 && b1 === b7 && b1 !== 'E')
||    
(b2 === b5 && b2 === b8 && b2 !== 'E')
||    
(b0 === b4 && b0 === b8 && b0 !== 'E')
||    
(b2 === b4 && b2 === b6 && b2 !== 'E')
|| counter === 9)
{
 again(boxes[x].innerText);
}
});
}