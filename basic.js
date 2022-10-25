
var dt = new Date();
document.getElementById("datetime").innerHTML = dt.toLocaleDateString();


function Bingo (x){
 if (x==5) {console.log("Bingo")}
  else console.log("Oh")
}
Bingo (4);
Bingo (5);
Bingo (6);