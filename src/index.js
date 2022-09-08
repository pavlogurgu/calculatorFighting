import Notiflix from 'notiflix'
import debounce from 'lodash.debounce';


const calcBtn = document.querySelector('.calcBtn');
const compCheck = document.querySelector('#compCheck');
const oldOne = document.querySelector('#oldOne');
const newOne = document.querySelector('#newOne');
const normalOne = document.querySelector('#normalOne');
const checkboxOne = document.querySelector('#checkboxOne');
const firstP = document.querySelector('#firstP');
const ageSpan = document.querySelector('#ageSpan');
const age = document.querySelector('#age');
const orientationCheck = document.querySelector('#orientationCheck');
const orientationButton = document.querySelector('#orientationButton');
const summary = document.querySelector('#summary');
const nameCheck = document.querySelector('#nameCheck');
const lastCheck = document.querySelector('#lastCheck');
const lagging = document.querySelector('#lagging');



orientationButton.addEventListener('click', onOrientationButton);
age.addEventListener('click', onAge);
checkboxOne.addEventListener('click', onCheckboxOne);
compCheck.addEventListener('click', onCompCheck);


calcBtn.addEventListener('click', calculation);

newOne.classList.add("visually-hidden");

function onOrientationButton(){
  orientationCheck.value = "Гей"
 
  summary.textContent = `Вас звати ${nameCheck.value}, Вам ${age.value} років, Ви любите пиво та чоловіків. І останнє питання:`
  lastCheck.classList.remove("visually-hidden");
}


function onAge(){
  ageSpan.textContent = age.value
}

function onCheckboxOne(){
  oldOne.classList.add("visually-hidden");
  newOne.classList.remove("visually-hidden");
}


function onCompCheck(){
  oldOne.classList.add("visually-hidden");
  newOne.classList.add("visually-hidden");
  makeItLag();
  
}

function makeItLag(){
  lagging.classList.remove("visually-hidden")
  // setTimeout(function() {
  //   Notiflix.Loading.circle()
  //   document.getElementById("lagging").style.display = "none";
    
  // }, 10000);
  // Notiflix.Loading.remove(5000);
  Notiflix.Loading.circle('Оооо... Комп не тягне? :-))', {
    backgroundColor: 'rgba(0,0,0)',
    });
    Notiflix.Loading.remove(10000)
    lagging.classList.add("visually-hidden");
  normalOne.classList.remove("visually-hidden");
}

function calculation() {
  
  let result=0
 
  const num1 = Number(document.getElementById("num1").value);
  const num2 = Number(document.getElementById("num2").value);
  switch (op) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
  }
  console.log(result)
 
  document.getElementById("result").innerHTML = result;
  if (result !==0){
    firstP.classList.remove("visually-hidden")
  }
}



const buttons = document.querySelectorAll('button');

const display = document.querySelector('.display');

buttons.forEach(function(button) {
  button.addEventListener('click', calculate);
});


function calculate(event) {
  try{

  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {

    if (display.value !=="") {
      display.value = eval(display.value);
    }

  } else if (clickedButtonValue === 'CA') {

    display.value = "";

  } else if (clickedButtonValue === 'sqrt') {

    display.value = Math.sqrt(display.value);
  }
 else if (clickedButtonValue === 'C') {
  display.value = display.value.substring(0, display.value.length - 1);
}

  else {
    display.value += clickedButtonValue;
  }
}
catch(e){
  Notiflix.Notify.failure('Будь ласка, перевірте правильність виразу')
  display.value = ""
}
}



