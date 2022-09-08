import Notiflix from 'notiflix'


// const calcBtn = document.querySelector('.calcBtn');
// // const resetBtn = document.querySelector('.resetBtn');
// // const button = document.querySelectorAll('.button');
// const compCheck = document.querySelector('#compCheck');
// const oldOne = document.querySelector('#oldOne');
// const newOne = document.querySelector('#newOne');
// const normalOne = document.querySelector('#normalOne');
// const checkboxOne = document.querySelector('#checkboxOne');
// const firstP = document.querySelector('#firstP');
// const ageSpan = document.querySelector('#ageSpan');
// const age = document.querySelector('#age');
// const orientationCheck = document.querySelector('#orientationCheck');
// const orientationButton = document.querySelector('#orientationButton');
// const summary = document.querySelector('#summary');
// const nameCheck = document.querySelector('#nameCheck');
// const lastCheck = document.querySelector('#lastCheck');
// const num = document.querySelector('#num');


// orientationButton.addEventListener('click', onOrientationButton);
// age.addEventListener('click', onAge);
// checkboxOne.addEventListener('click', onCheckboxOne);
// compCheck.addEventListener('click', onCompCheck);


// calcBtn.addEventListener('click', calculation);

// newOne.classList.add("visually-hidden");

// function onOrientationButton(){
//   orientationCheck.value = "Гей"
 
//   summary.textContent = `Вас звати ${nameCheck.value}, Вам ${age.value} років, Ви любите пиво та чоловіків. І останнє питання:`
//   lastCheck.classList.remove("visually-hidden");
// }


// function onAge(){
//   ageSpan.textContent = age.value
// }

// function onCheckboxOne(){
//   oldOne.classList.add("visually-hidden");
//   newOne.classList.remove("visually-hidden");
// }


// function onCompCheck(){
//   oldOne.classList.add("visually-hidden");
//   newOne.classList.add("visually-hidden");
//   normalOne.classList.remove("visually-hidden");
// }

// function calculation() {
  
//   let result=0
 
//   const num1 = Number(document.getElementById("num1").value);
//   const num2 = Number(document.getElementById("num2").value);
//   switch (op) {
//     case '+':
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//   }
//   console.log(result)
 
//   document.getElementById("result").innerHTML = result;
//   if (result !==0){
//     firstP.classList.remove("visually-hidden")
//   }
// }



// // ====================================================
// const numBtn1 = document.querySelector('#one');
// const numBtn2 = document.querySelector('#two');
// const numBtn3 = document.querySelector('#three');
// const numBtn4 = document.querySelector('#four');
// const numBtn5 = document.querySelector('#five');
// const numBtn6 = document.querySelector('#six');
// const numBtn7 = document.querySelector('#seven');
// const numBtn8 = document.querySelector('#eight');
// const numBtn9 = document.querySelector('#nine');
// const numBtn0 = document.querySelector('#zero');

// const newCalcBtn = document.querySelector('.newCalcBtn');
// const numInput = document.querySelector('#num');


// numBtn1.addEventListener('click', onCalcBtn1);
// numBtn2.addEventListener('click', onCalcBtn2);
// numBtn3.addEventListener('click', onCalcBtn3);
// numBtn4.addEventListener('click', onCalcBtn4);
// numBtn5.addEventListener('click', onCalcBtn5);
// numBtn6.addEventListener('click', onCalcBtn6);
// numBtn7.addEventListener('click', onCalcBtn7);
// numBtn8.addEventListener('click', onCalcBtn8);
// numBtn9.addEventListener('click', onCalcBtn9);
// numBtn0.addEventListener('click', onCalcBtn9);

// newCalcBtn.addEventListener('click', improvedCalculation);

// function improvedCalculation(){
//   let result=0
 
//   let num1 = Number(numInput.value);
//   // const num2 = Number(document.getElementById("num2").value);
//   switch (op) {
//     case '+':
//       numInput.value = 0
//       let num2 = Number(numInput.value)
     
//       result = num1 + num2;
//       break;
//     case '-':
//       result = num1 - num2;
//       break;
//     case '*':
//       result = num1 * num2;
//       break;
//     case '/':
//       result = num1 / num2;
//       break;
//   }
//   console.log(result)
 
//   document.getElementById("result").innerHTML = result;
// }

// function onCalcBtn1(){

// }

// function onCalcBtn2(){
  
// }

// function onCalcBtn3(){
  
// }

// function onCalcBtn4(){
  
// }

// function onCalcBtn5(){
  
// }

// function onCalcBtn6(){
  
// }

// function onCalcBtn7(){
  
// }

// function onCalcBtn8(){
  
// }

// function onCalcBtn9(){
  
// }

// function onCalcBtn0(){
  
// }


const buttons = document.querySelectorAll('button');

// select the <input type=”text” class=”display” disabled> element

const display = document.querySelector('.display');

// add eventListener to each button

buttons.forEach(function(button) {

  button.addEventListener('click', calculate);

});

// calculate function

function calculate(event) {
  try{

  // current clicked buttons value

  const clickedButtonValue = event.target.value;

  if (clickedButtonValue === '=') {

    // check if the display is not empty then only do the calculation

    if (display.value !=="") {

      // calculate and show the answer to display

      display.value = eval(display.value);

    }

  } else if (clickedButtonValue === 'C') {

    // clear everything on display

    display.value = "";

  } else if (clickedButtonValue === 'sqrt') {

    // clear everything on display

    display.value = Math.sqrt(display.value);
  }

  else {

    // otherwise concatenate it to the display

    display.value += clickedButtonValue;

  }
}
catch(e){
  Notiflix.Notify.failure('Будь ласка, перевірте правильність виразу')
}
}



