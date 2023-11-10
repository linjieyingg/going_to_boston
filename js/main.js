"use strict"
let rounds = 0
let turn_roll_p1, turn_roll_p2 = 0
let p1_start = new Boolean(true)
let decideTurnDone = new Boolean(false) // check if both players finished rolling to see who goes first

document.querySelector(".submit").addEventListener("click", function () {
    rounds = document.getElementById("rounds").value;
    if (rounds < 1)
        alert("Invalid Number of Rounds")
    else if ( rounds % 2 != 1)
        alert("Please enter an odd number")
    else{
        let class_list = document.querySelector(".start").classList;
        if (class_list.contains("hide")) {
            document.querySelector(".start").classList.remove("hide");
        } else {
            document.querySelector(".start").classList.add("hide");
        }
        let r_list = document.querySelector(".enter").classList;
        if ( ! r_list.contains("hide"))
            document.querySelector(".enter").classList.add("hide"); // need to remove when restart
    }
    });
let roll1, roll2 = 0
let firstP = "";
function roll(){ 
    roll1 = Math.ceil(Math.random() * 6)
    document.querySelector(".score1").textContent=`Player 1 rolled: ${roll1} `;
    document.querySelector(".diceOne").textContent= `Dice: ${roll1} `;
    document.querySelector(".p1").disabled = true;                
    document.querySelector(".p2").disabled = false;
    document.querySelector(".score2").textContent=`Player 2: `;
    document.querySelector(".diceTwo").textContent= `Dice: `;
    document.querySelector(".p2").addEventListener("click", function() {
        // let roll2 = roll1;
        roll2 = Math.ceil(Math.random() * 6);
        document.querySelector(".score2").textContent="Player 2 rolled: " + roll2;
        document.querySelector(".diceTwo").textContent=`Dice: ${roll2} `;
        document.querySelector(".p2").disabled = true; 
    
        console.log(roll1, roll2)
        if (roll1 != 0 && roll2 != 0){
            document.querySelector(".outcome").classList.remove("hide");
            if (roll1 < roll2){
                firstP = "Player 2 goes first";
            }
            else if (roll2 < roll1){
                firstP = "Player 1 goes first";
            }
            else {
                firstP = "Tie. Reroll."
                document.querySelector(".p1").classList.remove("hide");
                roll1, roll2 = 0
                document.querySelector(".score1").textContent=`Player 1: `;
                document.querySelector(".diceOne").textContent= `Dice: `;
                
                document.querySelector(".p1").disabled = false;
            }
            console.log(firstP)
            document.querySelector(".outcome").textContent= firstP;
        }
    })
    };
document.querySelector(".roll").addEventListener("click", roll);




