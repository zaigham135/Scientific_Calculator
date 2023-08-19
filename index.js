/*
var arr = document.querySelectorAll("button");
var string = document.querySelector("input");

for (var i = 0 ; i <arr.length; i++){
    arr[i].addEventListener("click",function(){
        var buttoninnerHTML = this.innerHTML;
        if (buttoninnerHTML == "="){
            string.value = eval(string.value);
        
        } else {
            string.value += buttoninnerHTML;
        }
        console.log(buttoninnerHTML);
    });
}
*/

var arr = document.querySelectorAll("button");
var string = document.querySelector("input");

setInterval(()=>{
  document.querySelector("h1").classList.toggle("heading")
},1000)





for (var i = 0; i < arr.length; i++) {
  arr[i].addEventListener("click", function () {
    var buttoninnerHTML = this.innerHTML;
    if (buttoninnerHTML == "√") {
      string.value = Math.sqrt(string.value);
    } else if (buttoninnerHTML == "c") {
      string.value = "";
    } else if (buttoninnerHTML == "=") {
      string.value = eval(string.value);
    } else if (buttoninnerHTML == "sin") {
      string.value = Math.sin((string.value * Math.PI) / 180);
    } else if (buttoninnerHTML == "cos") {
      string.value = Math.cos((string.value * Math.PI) / 180);
    } else if (buttoninnerHTML == "log") {
      string.value = Math.log10(string.value);
    } else if (buttoninnerHTML == "power") {
      string.value += "**";
    } else if (buttoninnerHTML == "back") {
      string.value = string.value.slice(0, -1);
    } else if (buttoninnerHTML == "inverse") {
      string.value = string.value ** -1;
    } else if (buttoninnerHTML == "%"){
      string.value = eval(string.value)*0.01;
    }else {
      string.value += buttoninnerHTML;
    }
    console.log(buttoninnerHTML);
  });
}
