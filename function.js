// Calculator function :)

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}
function clearDisplay(){
    display.value ="";
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "Invalid Input";
    }
}
// sound file

const clickSound = new Audio('https://cdn.pixabay.com/download/audio/2024/11/26/audio_f4caabbd05.mp3?filename=benkirb-shine-9-268911.mp3');
// button click audio function

const allButtons = document.querySelectorAll('Button');

// Add the click listener to every button
  allButtons.forEach(button => {
    button.addEventListener('click', () => {
      clickSound.currentTime = 0; // Rewinds sound if clicked rapidly
      clickSound.play();
    });
  });