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
document.querySelector(".roll").addEventListener("click", function(){ 
    if (document.querySelector(".p1").clicked == true) {
        console.log(document.querySelector(".p1").clicked)
        roll1 = Math.floor(Math.random() * 6)
        document.querySelector(".score1").textContent=`Player 1 rolled: ${roll1}`;
        document.querySelector(".dice").textContent= `Dice: ${roll1}`;
        document.querySelector(".p1").classList.add("hide");
        document.querySelector(".p2").addEventListener("click", function() {
            roll2 = Math.floor(Math.random() * 6)
            document.querySelector(".score2").textContent=`Player 2 rolled: ${roll2}`;
            document.querySelector(".dice").textContent= `Dice: ${roll1}`;
        });
    }
    else if (document.querySelector(".p2").clicked == true){
        roll2 = Math.floor(Math.random() * 6)
        document.querySelector(".score2").textContent=`Player 2 rolled: ${roll2}`;
        document.querySelector(".dice").textContent= `Dice: ${roll1}`;
        document.querySelector(".p2").classList.add("hide");
        document.querySelector(".p1").addEventListener("click", function() {
            roll1 = Math.floor(Math.random() * 6)
            document.querySelector(".score1").textContent=`Player 1 rolled: ${roll1}`;
            document.querySelector(".dice").textContent= `Dice: ${roll1}`;
        });
    }
    if (roll1 != 0 && roll2 != 0){
        if (roll1 < roll2){
            firstP = "Player 2 goes first";
            document.querySelector(".outcome").classList.remove("hide");
        }
        else if (roll2 < roll1){
            firstP = "Player 1 goes first";
            document.querySelector(".outcome").classList.remove("hide");
        }
        else {
            firstP = "Tie. Reroll."
        }
    document.querySelector(".outcome").textContent= firstP;

}});




