/*-------------------------------- Constants --------------------------------*/
const numbers = document.querySelectorAll(".button")
// const operator = document.querySelectorAll("")
const screen = document.querySelector('.display')


/*-------------------------------- Variables --------------------------------*/
// const numInput =[]
let nums= ""
// let succNum = ""
// let opInput = ""
// let digitInputs = 0
let calcSol= 0



/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/


numbers.forEach(number => {
    number.addEventListener("click", (event) => {
        
      // This log is for testing purposes to verify we're getting the correct value
      
        
        screen.textContent = "" 

        if (event.target.innerText != "="){
            nums += event.target.innerText
             screen.textContent = nums // this displays all the stacked numbers 
             console.log(nums);
        } 
        else if (event.target.innerText === "="){
            calcSol = eval(nums)  // shout out to Scott for bringing attention to eval()
            screen.textContent = calcSol
        }
        
        if (event.target.innerText == "C"){
            screen.textContent = "" 
            nums = ""
    
        }
        


    //   numInput.push(parseFloat(event.target.innerText)) //adds inputed number string into array after converting it to a number
      
    //   console.log(parseFloat(event.target.innerText)); // shows the number string that was inputed 
      
    //   digitInputs = digitInputs + 1 // keps track of number inputs 
    //   console.log(numInput) // this shows the array of numbers inputed 
    //   console.log(digitInputs); // shows how many numbers were inputed 
    //   console.log("you clicked me");
      // Future logic to capture the button's value goes here...
    });
        
       
  });
  
// operator.forEach(oper => {
//     oper.addEventListener("click",(event) => {
//         //console.log(event.target.innerText);
//         screen.textContent = event.target.innerText
//         opInput = event.target.innerText
//         console.log(opInput);
//     })
    
// })

//   screen.textContent = calcSol  // This displays text on the calculator screen


/*-------------------------------- Functions --------------------------------*/

// function addition(params, params2) {
//     calcSol = params + params2
    
// }
// function subtraction(params, params2) {
//     calcSol = params - params2
// }
// function multiply(params, params2) {
//     calcSol = params * params2
// }

// function division(params, params2) {
//     calcSol = params / params2
// }

/*   
Note for self- ended up solving the calculator app by taking advantage of the eval()
eval() is a function that takes strings and evaluates the strings based on the math functions in it

originally tried to set up the event listener to store each input into an array, then once an operator is called to parse through the array to solve the maths

*/