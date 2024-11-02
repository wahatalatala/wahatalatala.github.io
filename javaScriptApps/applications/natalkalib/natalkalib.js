//alert ("javaScript");
let cells = document.querySelectorAll("td");
let first_click = true;
let from;
let x = 12 , o = 12;
let x_wins_count = 0 , y_wins_count = 0;
let x_wins_node = document.getElementById("xwins");
let y_wins_node = document.getElementById("ywins");
//move up right down left
let mu = false , mr = false , 
md = false , ml = false ; 
//jump up right down left
let ju = false , jr = false ,
jd = false , jl = false ;
let can_move = false , can_jump = false;
let turn_text = "e";
let first_player_in_previous_round = "";
let new_round = true;
let this_is_the_first_round = true;
let turn_node = document.getElementById("turn");
cells[12].style.color = "transparent";
//alert ("line 14");

function startNewRound (s){
 turn_text = "e";
 x = 12 ;
 o = 12 ;
 for (let i = 0 ; i < 25 ; i++)
 {
  cells[i].style.color = "black";
  if ( i < 12 )
  cells[i].innerText = 'X';
  else if ( i > 12)
  cells[i].innerText = 'O';
  else {
   cells[i].innerText = 'E';
   cells[i].style.color = "transparent";
  }
 }
    switch (first_player_in_previous_round) {
    case "":{
     
    }
     break;
    case "X":{
     turn_text = 'O';
     turn_node.innerText = 'O';
    } 
     break;
    case "O":{
     turn_text = 'X';
     turn_node.innerText = 'X';
    }
    default:
     // Tab to edit
   }
 new_round = true;
};
/*
now let is moving
just calling the approriate moving function if we can move
*/
function start_moving(p) {
 if (can_move){
  if (mu && from === p + 5) {
   move_up(p);
  }
  else if (mr && from === p - 1){
   move_right(p);
  }
  else if (md && from === p - 5) {
   move_down(p);
  }
  else if (ml && from === p + 1) {
   move_left(p);
  }
 }
  if (can_jump) {
  if (ju && from === p + 10) {
   jump_up(p);
  }
  else if (jr && from === p - 2) {
   jump_right(p);
  }
  else if (jd && from === p - 10) {
   jump_down(p);
  }
  else if (jl && from === p + 2) {
   jump_left(p);
  }
 }
 
}

/*
can we move and to where
help deciding witch cells we can move to
*/
function moveable(p) {
 //console.log("moveable");
 // Tab to editmoveable
 //check right moveability 
 if (p%5 < 4 && cells[p+1].innerText === "E") mr = true;else mr = false;
 //check down moveability
 if (p < 20 && cells[p+5].innerText === "E") md  = true ;else md = false;
 //check up moveability 
 if (p > 4 && cells[p-5].innerText ===
 "E") mu = true ;else mu = false;
 //check left moveability 
 if (p%5 > 1 && cells[p-1].innerText === "E") ml = true ;else ml = false;
 return mr || md || mu || ml ;
}

/*
can we jump and to where
*/
function jumpable (position){
//console.log ("jumpable");
 //check up moveabilty
 if ( position > 9 && 
 cells[position-5].innerText !== "E" && 
 cells[position-5].innerText !== 
 cells[position].innerText && 
 cells[position-10].innerText === "E")
 {
  ju = true;
 }else ju = false;
//check down moveability
  if (position < 15 &&
  cells[position + 5].innerText !== "E" &&
  cells[position + 5].innerText !==
  cells[position].innerText &&
  cells[position + 10].innerText === "E")
 {
  jd = true;
 }else jd = false;
//check right moveability
  if (position%5 < 3 &&
  cells[position + 1].innerText !== "E" &&
  cells[position + 1].innerText !==
  cells[position].innerText &&
  cells[position + 2].innerText === "E")
 {
  jr = true;
 }else jr = false;
//check left moveability
  if (position%5 > 1 &&
  cells[position - 1].innerText !== "E" &&
  cells[position - 1].innerText !==
  cells[position].innerText &&
  cells[position - 2].innerText === "E")
 {
  jl = true;
 }else jl = false;
 
 return ju || jr || jd || jl ;
 
}//end of jumpable function

/*
just change the background color of
the cells we want to move and remember 
it is position also after finishing 
preparation make first_click variable true
*/
function prepare_to_move(p) {
 // Tab to edit
//console.log ("prepare_to_move");
 let text = cells[p].innerText ;
  if (text === "E") return;
  can_move = moveable(p);
  can_jump = jumpable(p);
  if ( !can_move && !can_jump ) return;
  /*this if statement should only
  be excuted once then will always be false */
  if (this_is_the_first_round){
   first_player_in_previous_round = cells[p].innerText ;
   turn_text = cells[p].innerText;
   this_is_the_first_round = false;
  }
  if (turn_text === "e"){
   first_player_in_previous_round === cells[p].innerText ;
  }
  if (cells[p].innerText !== turn_text)
  {
   console.log  ("it is "+turn_text+" turn");
  return;}
  turn_text = cells[p].innerText;
  turn_node.innerText = turn_text;
  from = p;
  first_click = false;
  cells[p].style.backgroundColor = "darkgray";
}

/*
move the cell we jumped from to where
we jumped(exchange color and value)
remove(make color transparent) the cell we jumped over and decrease it is counter
restore original style of the cell we moved from
to it is original background color
*/
function jump_up (p){//p for position
 cells[p].innerText = cells[p+10].innerText;
 cells[p+5].innerText = "E";
 cells[p+10].innerText = "E";
 cells[p].innerText === 
 "X" ? o-- : x-- ;
 console.log  ("x = "+x+"\t o = "+o);
 cells[p+5].style.color = "transparent";
 cells[p+10].style.color = "transparent";
 cells[p].style.color = "black";
 cells[p+10].style.backgroundColor = "lightgray"; 
 first_click = true;
 turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
 can_jump = jumpable(p);
 if (can_jump){
  console.log  ("another jump");
 turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
 first_click = false;
 prepare_to_move(p);
 }

}

function jump_right(p) { //p for position
 cells[p].innerText = cells[p - 2].innerText;
 cells[p - 1].innerText = "E";
 cells[p - 2].innerText = "E";
 cells[p].innerText ===
  "X" ? o-- : x--;
  console.log  ("x = "+x+"\t o = "+o);
 cells[p - 1].style.color = "transparent";
 cells[p - 2].style.color = "transparent";
 cells[p].style.color = "black";
 cells[p - 2].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
 can_jump = jumpable(p);
  if (can_jump) {
   console.log  ("another jump");
 turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
  first_click = false;
  prepare_to_move(p);
 }
}

function jump_down(p) { //p for position
 cells[p].innerText = cells[p - 10].innerText;
 cells[p - 5].innerText = "E";
 cells[p - 10].innerText = "E";
 cells[p].innerText ===
  "X" ? o-- : x--;
  console.log  ("x = "+x+"\t o = "+o);
 //style
  cells[p - 5].style.color = "transparent";
 cells[p - 10].style.color = "transparent";
 cells[p].style.color = "black";
 cells[p - 10].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
 can_jump = jumpable(p);
  if (can_jump) {
   console.log  ("another jump");
 turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node = turn_text;
  first_click = false;
  prepare_to_move(p);
 }
 
}

function jump_left(p) { //p for position
 cells[p].innerText = cells[p + 2].innerText;
 cells[p + 1].innerText = "E";
 cells[p + 2].innerText = "E";
 cells[p].innerText ===
  "X" ? o-- : x--;
  console.log  ("x = "+x+"\t o = "+o);
  cells[p + 1].style.color = "transparent";
 cells[p + 2].style.color = "transparent";
 cells[p].style.color = "black";
 cells[p + 2].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = cells[p].innerText === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
 can_jump = jumpable(p);
  if (can_jump) {
   console.log  ("another jump");
  turn_text = turn_text === 'X' ? 'O' : 'X';
  turn_node.innerText = turn_text;
  first_click = false;
  prepare_to_move(p);
 }
 
}

function move_up(p) { //p for position
 cells[p].innerText = cells[p + 5].innerText;
 cells[p + 5].innerText = "E";
 //style
 cells[p].style.color = "black";
 cells[p+5].style.color = "transparent";
 cells[p+5].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
}

function move_right(p) { //p for position
 cells[p].innerText = cells[p - 1].innerText;
 cells[p - 1].innerText = "E";
 cells[p].style.color = "black";
 cells[p - 1].style.color = "transparent";
 cells[p - 1].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
}

function move_down(p) { //p for position
 cells[p].innerText = cells[p - 5].innerText;
 cells[p - 5].innerText = "E";
  //style
 cells[p].style.color = "black";
 cells[p - 5].style.color = "transparent";
 cells[p - 5].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
}

function move_left(p) { //p for position
 cells[p].innerText = cells[p + 1].innerText;
 cells[p + 1].innerText = "E";
  //style
 cells[p].style.color = "black";
 cells[p + 1].style.color = "transparent";
 cells[p + 1].style.backgroundColor = "lightgray";
 first_click = true;
  turn_text = turn_text === 'X' ? 'O' : 'X';
 turn_node.innerText = turn_text;
}

for (let i = 0 ; i < 25; i++){
cells[i].addEventListener("click",()=>{
 if (first_click){
prepare_to_move(i);
console.log  ("turn : "+turn_text);
 }//first_click
 else {
  start_moving(i);
   if (x < 1 || o < 1) {
    if (x){
     x_wins_count++;
     x_wins_node.innerText = x_wins_count;
     startNewRound("playerx");
    }
    else {
     y_wins_count++;
     y_wins_node.innerText = y_wins_count;
     startNewRound("playery");
    }
   }
   console.log  ("turn : " +turn_text);
 }// second click
});
}
