let circle = document.getElementById("circle")
let UpBnt = document.getElementById("UpBnt")
let downBtn = document.getElementById("downBtn")


let rotateValue = circle.style.transform;
let rotateSum;


UpBnt.onclick = function(){
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum ;
    rotateValue = rotateSum;
}