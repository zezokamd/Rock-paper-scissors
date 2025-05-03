// const btn = document.querySelector("button")
// const strong = document.createElement("strong")
// strong.textContent = "hhbmkamd"
// btn.addEventListener("click", (e) => {
//     document.body.append(strong)
//     console.log(e)
//     e.target.style.background = "blue";


// })
// // to make an event listener to a whole bunch of elements
// const buttons = document.querySelectorAll("button");

// // we use the .forEach method to iterate through each button
// buttons.forEach((button) => {
//   // and for each one we add a 'click' listener
//   button.addEventListener("click", () => {
//     alert(button.id);
//   });
// });

function computerinput(){
    let rand = Math.random() * 3
    let randNum = Math.ceil(rand)
    const inputt = {
        1: "rock",
        2: "paper",
        3: "scissors"
    }
    return inputt[randNum]

}
let computerInput = computerinput()
let humanScore = 0;
let computerScore = 0;

function verdict(human,computer){
    const rules= {
        rock: {rock:"draw", paper:"lose", scissors:"win"},
        paper: {rock:"win", paper: "draw", scissors:"lose"},
        scissors: {rock:"lose", paper:"win", scissors:"draw"}
    };
    
    let state = rules[human][computer]
  
    return state
}
function playgame(){

    for (let i = 0; i < 5; i++ ){
        let humanInput = prompt("Enter rock, paper, or scissors").toLowerCase()
        console.log(humanInput)
        console.log(computerInput)
        let result = verdict(humanInput,computerInput)
         console.log("you " + result)
    
         if (result == 'win'){
            humanScore+=1;
         }
         else if (result == 'lose'){
            computerScore+=1;
        }
        console.log(`Your score: ${humanScore}  Computer score: ${computerScore} `)
    
    }
}
playgame()










