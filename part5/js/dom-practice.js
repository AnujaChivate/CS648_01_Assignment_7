/*eslint-env browser*/

//STEP 1
function writeMessage() {
    window.alert("I have been clicked");
}

//STEP 5
window.document.addEventListener("DOMContentLoaded", init, false);

//STEP 2
function init() {
    var button2 = document.getElementById("button2");
    button2.onclick = writeMessage;

    //STEP 3
    var button3 = document.getElementById("button3");
    // button3.addEventListener("click", writeMessage);

    //STEP 4
    button3.addEventListener("click", function() {
        window.alert("I have been clicked");
    });
}