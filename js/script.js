var currentX, currentY, currentZ;
var cube;
var styleSheet = null;

function setCssAnimation(name, oldX, oldY, oldZ, newX, newY, newZ){
    var animationText;
    animationText = "{ from { transform: rotateX(" + oldX + ")  rotateY(" + oldY + ")  rotateZ(" + oldZ + ");}";
    animationText += " to { transform: rotateX(" + newX + ")  rotateY(" + newY + ")  rotateZ(" + newZ + ");}}";

    if (!styleSheet){
        styleSheet = document.createElement('style');
        document.head.appendChild(styleSheet);
      }

      styleSheet.sheet.insertRule(`@keyframes ${name} ${animationText}`, styleSheet.length);
}

function loadCube(){

    currentX = "0deg";
    currentY = "45deg";
    currentZ = "0deg";

    var animationName = "magicCube";

    // setCssAnimation(animationName, currentX, currentY, currentZ, currentX, currentY, currentZ);
    setCssAnimation(animationName, currentX, currentY, currentZ, "0deg", "-315deg", "360deg");

    if( cube = document.getElementById("cube")){
        cube.style.animation = animationName + " 10s linear infinite";
    }
}

function rotateToMovie(){

    var animationName = "rotateToMovie";
 
    setCssAnimation(animationName, currentX, currentY, currentZ, currentX = "0deg", currentX = "0deg", currentZ= "0deg");
    if( cube = document.getElementById("cube")){
        cube.style.animation =  animationName + " 4s linear 1";
    }
}

function rotateToSoftwares(){
    var animationName = "rotateToSoftwares";
 
    setCssAnimation(animationName, currentX, currentY, currentZ, currentX = "0deg", currentX = "90deg", currentZ= "0deg");
    if( cube = document.getElementById("cube")){
        cube.style.animation =  animationName + " 4s linear 1";
    }
}

function rotateToReferences(){
    var animationName = "rotateToReferences";
 
    setCssAnimation(animationName, currentX, currentY, currentZ, currentX = "0deg", currentX = "90deg", currentZ= "0deg");
    if( cube = document.getElementById("cube")){
        cube.style.animation =  animationName + " 4s linear 1";
    }
}