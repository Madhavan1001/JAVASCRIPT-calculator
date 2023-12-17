function buttonclick(val) {
    document.getElementById("screen").innerHTML += val;
    document.getElementById("screen").style.color = "white";
}

function clearScreenDisplay() {
    const screenElement = document.getElementById("screen");
    const screenValue = screenElement.innerHTML;
    const newScreenValue = screenValue.substring(0, screenValue.length - 1);
    screenElement.innerHTML = newScreenValue;
    screenElement.style.color = "white";
}

function ScreenClearDisplay() {
    document.getElementById("screen").innerHTML = "";
    document.getElementById("screen").style.color = "white";
}

function buttonclickequal(val) {
    var text = document.getElementById("screen").innerHTML;
    var result = eval(text);
    document.getElementById("screen").innerHTML = result;
    document.getElementById("screen").style.color = "white";
}



document.addEventListener("keydown", function(event) {
   
    var keyPressed = event.key;


    if (!isNaN(keyPressed) || ['+', '-', '*', '/', '.','='].includes(keyPressed)) {

        buttonclick(keyPressed);
    } else if (keyPressed === 'Backspace') {
    
        clearScreenDisplay();
    } else if (keyPressed === 'Escape') {
       
        ScreenClearDisplay();
    } else if (keyPressed === 'Enter') {
       
        buttonclickequal();
    }
});

$(document).ready(function(){
    $('#main').mouseenter(function(){
        $('#box').toggle(3000); 
    });
});

