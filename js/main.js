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
let curP = 1;
let roundNo = 0;
function roll(){ 
    if (curP == 1){
        roll1 = Math.ceil(Math.random() * 6)
        document.querySelector(".score1").textContent=`Player 1 rolled: ${roll1} `;
        document.querySelector(".theDice").textContent= `Dice: ${roll1} `;
        document.querySelector(".score2").textContent=`Player 2: `;
        curP = 2;
    }
    else if (curP == 2){
        roll2 = Math.ceil(Math.random() * 6);
        document.querySelector(".score2").textContent=`Player 2 rolled: ${roll2} `;
        document.querySelector(".theDice").textContent= `Dice: ${roll2} `;
        document.querySelector(".roll").disabled = true; 
    
        if (roll1 != 0 && roll2 != 0){
            document.querySelector(".outcome").classList.remove("hide");
            if (roll1 < roll2){
                firstP = "Player 2 goes first";
                firstPlayer, curP = 2;
                document.querySelector(".continue").classList.remove("hide");
                roundNo=1;
            }
            else if (roll2 < roll1){
                firstP = "Player 1 goes first";
                firstPlayer, curP = 1;
                document.querySelector(".continue").classList.remove("hide");
                roundNo=1;
            }
            else {
                firstP = "Tie. Reroll."
                // document.querySelector(".p1").classList.remove("hide");
                roll1, roll2 = 0
                // document.querySelector(".score1").textContent=`Player 1: `;
                document.querySelector(".theDice").textContent= `Dice: `;
                curP =1;
                document.querySelector(".roll").disabled = false;
            }
            console.log(firstP)
            document.querySelector(".outcome").textContent= firstP;
        }
        
   }
    };
document.querySelector(".roll").addEventListener("click", roll);

document.querySelector(".continue").addEventListener("click", function(){
    document.querySelector(".round").classList.remove("hide");
    document.querySelector(".roll_to_start").classList.add("hide");
    document.querySelector(".round_no").textContent= `Round ${roundNo}`;
    
});
let whichDice = 1;

document.querySelector(".roll_round").addEventListener("click", play());

function play(){
    while (roundNo <= rounds){
        if (curP==1){
            document.querySelector(".who_turn").textContent= "Player 1's turn";
        }
        else if (curP==2){
            document.querySelector(".who_turn").textContent= "Player 2's turn";
        }
    }
}