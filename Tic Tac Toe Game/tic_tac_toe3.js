var td_one=document.querySelectorAll("td");
var clr=document.querySelector('#clear');

clr.addEventListener('click',function(){
  for (var i = 0; i <td_one.length; i++) {
    td_one[i].textContent=" ";
  }})

for (var i = 0; i <td_one.length; i++) {

  td_one[i].addEventListener('click', function(){
    this.textContent="X";
    this.style.color="red";
  })

  td_one[i].addEventListener('dblclick', function(){
    this.textContent="O";
    this.style.color="blue";
  })
}
console.log("Tic Tac Toe Game!");
