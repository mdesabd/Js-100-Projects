function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}



// handle the  orange button ----
// just set the function ...dont call.
const orangeButton = document.getElementById('make-orange-button');

orangeButton.onclick = makeOrange; //function call kora jabe na. No ()-aita

function makeOrange() {
    document.body.style.backgroundColor = 'orange';
}





// anonymus function ------system 4.
const greenButton = document.getElementById('make-green-button');
//anonymus function
greenButton.onclick = function () {  //makeGreen ai function name ditehobe na

    document.body.style.backgroundColor = 'green';

}





// handle by using the event listener..system 5.
const golddenButton = document.getElementById('make-golddenrod-button');

golddenButton.addEventListener('click', makeGoldenrod)


function makeGoldenrod() {
    document.body.style.backgroundColor = 'goldenrod';
}



//addEventlistener.....
const HotpinkButton = document.getElementById('make-hotpink-button');

HotpinkButton.addEventListener('click', function makeHotPink() {
    document.body.style.backgroundColor = 'hotpink'
})






    // < !--system number - 7 - Direct Action------------- -->
// < !--Direct Shortcart....-->


    document.getElementById('lightBlue-button').addEventListener('click', function () { document.body.style.backgroundColor = 'lightblue' })