// // // strict mode can be use to prevent coding errors, do more research!!!
// // 'strict mode';



// // function fruitProcessor (orange,mango){
// //          console.log(orange,mango);
// //          const juice = `juice with ${orange} oranges, and ${mango} mango`
// //          return juice;
// // }

// // const mixedJuice = fruitProcessor(3,1);

// // console.log(mixedJuice);

// //function declaration 
// function calcAge1(birthYear) {

// return 2024 - birthYear;

// }

// const age1 = calcAge1(2000);
// console.log(age1);

// //function expression

// const calcAge2 = function(birthYear) {
//     return 2024 - birthYear;
// }
// const age2 =  calcAge2(1982);

// console.log(age2)



//control structures allow the program flow to change wwithin a unit of code or function
// examples are conditional statemens if/else and the ternary operator ?



// if(age1 > age2){
//      console.log('i am older than you')
// } else{
//     console.log('you are not older than me ')
// }

// conditional using ternary operator

// let age1 = 25;
// let age2 = 25;
// age1 < age2 ? console.log('i am younger than you') : console.log('i am older than you');


// let num1 = 23;

// if(num1  % 2 == 0){
//     console.log('the number is even')
// } else{
//     console.log('the number is odd')
// }

// let score = 90;

// score >= 60 ? console.log('passing') : console.log('failing');



// function checkPn(num){
//      if(num > 0 || num > 0){
//         console.log('positive')
//      }  else if(num === 0){
//         console.log('zero')
//      }
//      else{
//          console.log('negative')
//      }

// }
// checkPn(3);




// wrap the hamburger menu icon within a button, make class of button nav-toggle
// acces the nav-toggle with document query selector
//acess the links class which was given to the ul.

// set up event listener on nav toggle to look for click event
//target the links.classlist.toogle pass in show-links


// const toggleBtn = document.querySelector('.toggle-button');
// const links = document.querySelector('.navbar-links');
// toggleBtn.addEventListener('onclick',function(){
    
//     links.classList.toggle('active');
// })
const toggleBtn = document.querySelector('.toggle-button');
const links = document.querySelector('.navbar-links');

toggleBtn.addEventListener('click',function(){

    links.classList.toggle('active');
})
