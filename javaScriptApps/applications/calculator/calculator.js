let resume = false;
resume_string = "";
let text = document.getElementById("text");
function calculateBrackets(param) {
 // Tab to editcalculateBrackets
 //left and right brackets
 let l = 0,
  r = 0;
 for (let i = 0; i < param.length; i++) {
  let char = param[i];
  if (char === '(') {
   if (isNaN(param[i + 1]) && param[i + 1] !== '(' && param[i + 1] !== ')') {
    alert(param[i+1] + ") \n line 12");
    return false;
   }
   else l++;
  }
  if (char === ')') {
   if (isNaN(param[i - 1]) && param[i - 1] !== '(' && param[i - 1] !== ')') {
    alert(param[i-1] + ") \n line 20");
    return false;
   }
   else r++;
  }
  if (l < r) {
   alert("'(' < ')' \n line 26");
   return false;
  }
 }
 if (l !== r) {
  alert("'(' !== ')' \n line 31");
  return false;
 }
 return true;
}

let zero = document.getElementById("zero");
zero.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0
 && text.innerText[length-1] != '.')
  text.innerText += 0;
});

let one = document.getElementById("one");
one.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 1;
 else text.innerText = 1;
});

let two = document.getElementById("two");
two.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 2;
 else text.innerText = 2;
});

let three = document.getElementById("three");
three.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 3;
 else text.innerText = 3;
});

let four = document.getElementById("four");
four.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 4;
 else text.innerText = 4;
});

let five = document.getElementById("five");
five.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 5;
 else text.innerText = 5;
});

let six = document.getElementById("six");
six.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 6;
 else text.innerText = 6;
});

let seven = document.getElementById("seven");
seven.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 7;
 else text.innerText = 7;
});

let eight = document.getElementById("eight");
eight.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 8;
 else text.innerText = 8;
});

let nine = document.getElementById("nine");
nine.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (text.innerText != 0 && text.innerText[length-1] != '.')
  text.innerText += 9;
 else text.innerText = 9;
});

let equal = document.getElementById("equal");
equal.addEventListener("click", () =>
{resume = false;resume_string = "";
 let equation = text.innerText;
 if (isNaN(equation[0]) && equation[0] !== '(' && equation[0] != '-') {
  text.innerText = "syntax error";
  return;
 }
 if (isNaN(equation[equation.length - 1]) && equation[equation.length - 1] !== ')') {
  text.innerText = "syntax error";
  return;
 }
 if (!calculateBrackets(equation)) {
  text.innerText = "syntax error";
  return;
 }
 text.innerText = (eval(text.innerText));
});

let plus = document.getElementById("plus");
plus.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) && last != ')' ) {
  alert(last);
  return;}
 text.innerText += '+';
});

let minus = document.getElementById("minus");
minus.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) && last != ')' ) return;
 text.innerText += '-';
});

let multyply = document.getElementById("multyply");
multyply.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) && last != ')' ) return;
 text.innerText += '*';
});

let division = document.getElementById("division");
division.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) && last != ')' ) return;
 text.innerText += '/';
});

let point = document.getElementById("point");
point.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) ) return;
 text.innerText += '.';
});

let clear = document.getElementById("clear");
clear.addEventListener("click", () =>
{resume = true;
resume_string = text.innerText;
 text.innerText = 0;
});

let power = document.getElementById("power");
power.addEventListener("click", () =>
{resume = false;resume_string = "";
let last = text.innerText[text.innerText.length-1];
 if (isNaN(last) && last != ')' ) return;
 text.innerText += "**";
});

let left = document.getElementById("left");
left.addEventListener("click", () =>
{resume = false;resume_string = "";
let last = text.innerText[text.innerText.length-1];
 if (!isNaN(last) && last != '.' && last != '!') return;
 text.innerText += "(";
});

let right = document.getElementById("right");
right.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length-1];
 let l = 0 , r = 0;
for ( let letter of text.innerText){
 if ( letter == '(') l++;
 if ( letter == ')') r++;
}
if ( r == l) {
 return;
}
 if (isNaN(last) && last != ')' ) return;
 text.innerText += ")";
});

function fact(num) {
 // Tab to editnum
if (num == 1) return 1;
else return num * fact (num - 1);
}

let factor = document.getElementById("factor");
factor.addEventListener("click", () =>
{resume = false;resume_string = "";
 if (isNaN(text.innerText) ) return;
 text.innerText = fact (text.innerText);
});

let remove = document.getElementById("remove");
remove.addEventListener("click", () =>
{resume = true;
if (text.innerText.length)
resume_string += text.innerText[text.innerText.length-1];
 text.innerText = text.innerText.slice(0,text.innerText.length-1)
 if (text.innerText.length == 0)
 text.innerText = 0;
});

let mod = document.getElementById("mod");
mod.addEventListener("click", () =>
{resume = false;resume_string = "";
 let last = text.innerText[text.innerText.length - 1];
if (isNaN(last) && last != ')') return;
text.innerText += "%";
});

let restore = document.getElementById("restore");
restore.addEventListener("click", () =>
{
if (resume_string.length > 0)
 text.innerText += resume_string[resume_string.length-1];
 resume_string = resume_string.slice(0,resume_string.length-1);
});

let binary = document.getElementById("binary");
binary.addEventListener("click", () =>
{
let num = text.innerText * 1;
if (isNaN(num)){
 alert ("returning");
 return;}
let d = text.innerText;
text.innerText = "";
while (d > 0){
 text.innerText += d%2;
 d = Math.floor(d/2);
}
});
/*
let zero = document.getElementById("zero");
zero.addEventListener("click", () =>
{
 text.innerText += 0;
});*/