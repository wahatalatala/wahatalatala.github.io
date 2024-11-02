//this code still need a lot work
// use === instead of ==
const nodes = document.querySelectorAll("td");
let clicked = -1;
let old = -2;
let second = false;
let new_turn ;
player_turn = document.getElementById("turn");
let game_state = 
['O','O','O','E','E','E','X','X','X'];
for (let i = 3 ; i < 6 ; i++){
  nodes[i].style.color = "transparent";
}
let x_wins = 0 , o_wins = 0;
let playerx = document.getElementById("X");
let playero = document.getElementById("O");

function again() {
 // alert("again");
  game_state = ['O','O','O','E','E','E','X','X','X'];
  let i = 0;
  nodes.forEach(
    (node)=>{
      node.innerText = game_state[i];
      if (game_state[i] == 'E'){
        node.style.color = "transparent ";
      }
      else {
        node.style.color = "black";
      }
      i++;
    }
    );
    old = -1;
    player_turn.innerText = new_turn == 'X' ? 'O' : 'X';
    
}

for ( let i = 0 ; i < nodes.length; i++)
{
nodes[i].addEventListener("click",
()=>{
  
if (clicked == i){
console.log("clicked = " + i ); 
return;
}
clicked = i;
let node = nodes [i];
let text = node.innerText;
let empty = (text == 'E');
//if (empty)alert ("empty");
if (empty && !second) return;
if (second && !empty) return;
if (old+2 && old+1 && nodes[old].innerText == text)return;
if ((old == -1 || old == -2) && new_turn == text) return;
if (!second)
node.classList.add("selected");
//if (old != -2 && old != i)
else
nodes[old].classList.remove("selected");
let c;
if (old != -2 && old != -1)
c = nodes[old].innerText;

if (second){
  nodes[old].innerText = text;
  node.innerText = c;
  second = false;
  clicked = -1;
  game_state[i] = c;
  game_state[old] = text;
  //if (empty){
    nodes[old].style.color = "transparent";
 // }
  node.style.color = "black";
  player_turn.innerText = c == 'X' ? 'O' : 'X';
}
else {
player_turn.innerText = text;
second = true;
if (old == -2 || old == -1) new_turn = text;
}

old = i;
//alert(c + "\t" + text);

if (!second){
  let gs = game_state;
  if (gs[3] == 'X' && gs[4] == 'X' && gs[5] == 'X' ) {
  playerx.innerText = ++x_wins;
  again ();
  }
 else if (gs[0] == 'X' && gs[1] == 'X' && gs[2] == 'X' ) {
  playerx.innerText = ++x_wins;
  again();
 }
 else if (gs[0] == 'X' && gs[3] == 'X' && gs[6] == 'X' ){
  playerx.innerText = ++x_wins;
  again();
 }
 else if (gs[1] == 'X' && gs[4] == 'X' && gs[7] == 'X' ) {
  playerx.innerText = ++x_wins;
  again();
 }
 else if (gs[2] == 'X' && gs[5] == 'X' && gs[8] == 'X' ) {
  playerx.innerText = ++x_wins;
  again();
 }
else  if (gs[0] == 'X' && gs[4] == 'X' && gs[8] == 'X' ){
  playerx.innerText = ++x_wins;
  again();
}
else if (gs[2] == 'X' && gs[4] == 'X' 
&& gs[6] == 'X') {
  playerx.innerText = ++x_wins;
  again();
}
  
 else if (gs[6] == 'O' && gs[7] == 'O' && gs[8] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
 }
else  if (gs[3] == 'O' && gs[4] == 'O' && gs[5] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
}
else  if (gs[0] == 'O' && gs[3] == 'O' && gs[6] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
}
else if (gs[1] == 'O' && gs[4] == 'O' && gs[7] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
}
 else if (gs[2] == 'O' && gs[5] == 'O' && gs[8] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
 }
  else if (gs[0] == 'O' && gs[4] == 'O' && gs[8] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
  }
else  if (gs[2] == 'O' && gs[4] == 'O' && gs[6] == 'O' ) {
  playero.innerText = ++o_wins;
  again();
}
  
}
}
);
}