
let numb;
    document.getElementById("sub").onclick = function() {
       
        numb = Math.floor(Math.random() * 10);
     i = 0;
     document.getElementById("att").innerHTML =i;
     document.getElementById("label").innerHTML = "( '  ~  ' )";
     document.getElementById("sub").innerHTML = "Roll";
}
let inum;
let inum1;
let inum2;
let inum3;
let inum4;
    let i = 1;
    let u = 10;
document.getElementById("submit").onclick = function() {
    if(i <= u){
        document.getElementById("att").innerHTML =++i;
       
    }
   inum =  document.getElementById("innum").value;
   inum =  Number(inum);
   inum1 =  inum + 10;
   inum2 = inum -10;
  

  if(inum > numb){
    document.getElementById("label").innerHTML = inum + "     Greater than the GUESS number";
}
 else if(inum < numb){
    document.getElementById("label").innerHTML = inum + "     Lower than the GUESS number";
}
 else if(inum = numb){
    document.getElementById("label").innerHTML = "congraulations!! You have sucessfully GUESS the Correct Number!!";
    document.getElementById("sub").innerHTML = "Restart";
}
else {
    document.getElementById("label").innerHTML = "your number out of range";

 }
}

