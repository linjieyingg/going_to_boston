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
        if (class_list.contains("hide")) 
            document.querySelector(".start").classList.remove("hide");
        // } else {
        //     document.querySelector(".start").classList.add("hide");
        // }
        let r_list = document.querySelector(".roll_to_start").classList;
        if ( r_list.contains("hide"))
            document.querySelector(".roll_to_start").classList.remove("hide");
        document.querySelector(".enter").classList.add("hide"); // need to remove when restart
        document.querySelector('.roll').disabled = false;
        turn_roll_p1 = turn_roll_p2 = 0;
        document.querySelector(".score1").textContent="Player 1:";
        document.querySelector(".score2").textContent="Player 2:";
        document.querySelector(".theDice").textContent="Dice:";
        curP = 1;
    }
    });
let roll1, roll2 = 0
let firstP = "";
let curP = 1;
let roundNo = 0;
function roll(){ 
    if (curP == 1 ){
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
                let curP = 2;
                console.log(curP)
                document.querySelector(".continue").classList.remove("hide");
                document.querySelector(".who_turn").textContent= "Player 2's turn";
                roundNo=1;
            }
            else if (roll2 < roll1){
                firstP = "Player 1 goes first";
                curP = 1;
                document.querySelector(".continue").classList.remove("hide");
                document.querySelector(".who_turn").textContent= "Player 1's turn";
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
            document.querySelector(".outcome").classList.remove("hide");
            document.querySelector(".outcome").textContent= firstP;
            

        }
        
   }
    };
document.querySelector(".roll").addEventListener("click", roll);
let pOneWins = 0
let pTwoWins = 0
document.querySelector(".continue").addEventListener("click", function(){
    document.querySelector(".round").classList.remove("hide");
    document.querySelector(".roll_to_start").classList.add("hide");
    document.querySelector(".round_no").textContent= `Round ${roundNo}`;
    document.querySelector(".round_wins1").textContent= "Player 1 wins: " + pOneWins;
    document.querySelector(".round_wins2").textContent= "Player 2 wins: " + pTwoWins; 
    document.querySelector(".dice_no").textContent="First dice: roll three times. Highest roll = score";
    document.querySelector(".round_roll").disabled = false;
    document.querySelector(".scoren1").textContent=`Player 1 Score: `;
    document.querySelector(".scoren2").textContent=`Player 2 Score:`;
    document.querySelector(".theDie").textContent=`Dice: `;

});
let diceTime = 1; // 1 = roll 3 times, 2 = roll 2 times, 3 = roll once
var sumOne, sumTwo, noRollsOne, noRollsTwo
noRollsOne= noRollsTwo = 1
roll1 = roll2 = sumOne = sumTwo = 0;
var oneHigh, twoHigh

document.querySelector(".round_roll").addEventListener("click", function(){ 
    document.querySelector(".round_no").textContent= `Round ${roundNo} out of ${rounds}`;
    document.querySelector(".round_wins1").textContent= "Player 1 wins: " + pOneWins;
    document.querySelector(".round_wins2").textContent= "Player 2 wins: " + pTwoWins;
    document.querySelector(".scoren1").textContent=`Player 1 Score: `;
    document.querySelector(".scoren2").textContent=`Player 2 Score:`;
    var roll1= roll2=0
    let class_list = document.querySelector(".round_win").classList;
    if( !class_list.contains("hide"))
        document.querySelector(".round_win").classList.add("hide")
    if (roundNo <= rounds){
        if (diceTime == 1){
            if (curP==1 && noRollsOne < 4){
                document.querySelector(".roll2").classList.add("hide");
                document.querySelector(".roll1").classList.remove("hide");
                roll1 = Math.ceil(Math.random() * 6);
                if(noRollsOne == 1)
                    oneHigh = roll1
                else if (roll1 > oneHigh)
                    oneHigh = roll1
                document.querySelector(".roll1").textContent=`Player 1 Rolled: ${roll1} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${oneHigh} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${sumTwo} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll1} `;
                noRollsOne++;
                if(noRollsOne > 3){
                    // curP =2;
                    // document.querySelector(".who_turn").textContent= "Player 2's turn";
                    sumOne += oneHigh;
                    diceTime += 1;
                    document.querySelector(".dice_no").textContent="Second dice: roll two times. Highest roll = score";
                }
            }
            else if (curP==2 && noRollsTwo < 4){
                document.querySelector(".roll1").classList.add("hide");
                document.querySelector(".roll2").classList.remove("hide");
                roll2 = Math.ceil(Math.random() * 6);
                if(noRollsTwo == 1)
                    twoHigh = roll2
                else if (roll2 > twoHigh)
                    twoHigh = roll2
                console.log(roll2)
                document.querySelector(".roll2").textContent=`Player 2 Rolled: ${roll2} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${sumOne} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${twoHigh} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll2} `;
                noRollsTwo++;
                if (noRollsTwo > 3 ){
                    // curP =1;
                    // document.querySelector(".who_turn").textContent= "Player 1's turn";
                    sumTwo += twoHigh;
                    diceTime += 1;
                    document.querySelector(".dice_no").textContent="Second dice: roll two times. Highest roll = score";
                }
            }
            
            
        }
        else if (diceTime ==2){
            if (curP==1 && noRollsOne < 6){
                document.querySelector(".roll2").classList.add("hide");
                document.querySelector(".roll1").classList.remove("hide");
                roll1 = Math.ceil(Math.random() * 6);
                if(noRollsOne == 4)
                    oneHigh = roll1
                else if (roll1 > oneHigh)
                    oneHigh = roll1
                console.log(roll1)
                document.querySelector(".roll1").textContent=`Player 1 Rolled: ${roll1} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${oneHigh + sumOne} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${sumTwo} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll1} `;
                noRollsOne++;
                if(noRollsOne > 5){
                    document.querySelector(".dice_no").textContent="Third dice: One roll.";
                    sumOne += oneHigh;
                    diceTime += 1;
                }
            }
            else if (curP==2 && noRollsTwo < 6){
                document.querySelector(".roll1").classList.add("hide");
                document.querySelector(".roll2").classList.remove("hide");
                roll2 = Math.ceil(Math.random() * 6);
                if(noRollsTwo == 4)
                    twoHigh = roll2
                else if (roll2 > twoHigh)
                    twoHigh = roll2
                console.log(roll2)
                document.querySelector(".roll2").textContent=`Player 2 Rolled: ${roll2} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${sumOne} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${twoHigh + sumTwo} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll2} `;
                noRollsTwo++;
                if (noRollsTwo > 5 ){
                    document.querySelector(".dice_no").textContent="Third dice: One roll.";
                    sumTwo += twoHigh;
                    diceTime += 1;
                }
            }
        }
        else if (diceTime == 3){
            if (curP==1 && noRollsOne < 7){
                document.querySelector(".roll2").classList.add("hide");
                document.querySelector(".roll1").classList.remove("hide");
                roll1 = Math.ceil(Math.random() * 6);
                oneHigh = roll1
                sumOne += oneHigh
                document.querySelector(".roll1").textContent=`Player 1 Rolled: ${roll1} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${sumOne} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${sumTwo} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll1} `;
                console.log(noRollsOne, noRollsTwo)
                noRollsOne++;
            }
            else if (curP==2 && noRollsTwo < 7){
                document.querySelector(".roll1").classList.add("hide");
                document.querySelector(".roll2").classList.remove("hide");
                roll2 = Math.ceil(Math.random() * 6);
                twoHigh = roll2
                sumTwo += twoHigh
                console.log(roll2)
                document.querySelector(".roll2").textContent=`Player 2 Rolled: ${roll2} `;
                document.querySelector(".scoren1").textContent=`Player 1 Score: ${sumOne} `;
                document.querySelector(".scoren2").textContent=`Player 2 Score: ${sumTwo} `;
                document.querySelector(".theDie").textContent= `Dice: ${roll2} `;
                console.log(noRollsOne, noRollsTwo)
                noRollsTwo++;
            }
            if (noRollsOne >= 6 && noRollsTwo >= 6){
                document.querySelector(".round_win").classList.remove("hide")
                noRollsOne = noRollsTwo = 1;
                diceTime = 1;
                roundNo++;
                if (roundNo > rounds){
                    document.querySelector(".round_roll").disabled = true;
                    document.querySelector(".end").classList.remove("hide");
                }
                
                if (curP == 1){
                    curP =2; 
                    document.querySelector(".who_turn").textContent= "Player 2's turn";
                    document.querySelector(".roll1").classList.add("hide");
                    document.querySelector(".dice_no").textContent="First dice: roll three times. Highest roll = score";
                }
                else if (curP == 2){
                    curP = 1;
                    document.querySelector(".who_turn").textContent= "Player 1's turn";
                    document.querySelector(".roll2").classList.add("hide");
                    document.querySelector(".dice_no").textContent="First dice: roll three times. Highest roll = score";
                }   
                if(sumOne > sumTwo){
                    pOneWins += 1
                    document.querySelector(".round_win").textContent=`Player 1 wins round ${roundNo - 1 } `
                    document.querySelector(".round_wins1").textContent=`Player 1 wins: ${pOneWins} `
                }
                else if (sumTwo > sumOne){
                    pTwoWins++
                    document.querySelector(".round_win").textContent=`Player 2 wins round ${roundNo - 1 } `
                    document.querySelector(".round_wins2").textContent=`Player 2 wins: ${pTwoWins} `
                }
                else if (sumOne == sumTwo){
                    pOneWins++;
                    pTwoWins++;
                    document.querySelector(".round_win").textContent="Tie. Both players get a point";
                    document.querySelector(".round_wins1").textContent=`Player 1 wins: ${pOneWins} `;
                    document.querySelector(".round_wins2").textContent=`Player 2 wins: ${pTwoWins} `;
                    
                }
                stop();
                sumOne = 0;
                sumTwo = 0;
                roll1 = roll2 = 0;
                oneHigh = twoHigh = 0;
            }
            else if(noRollsOne > 6){
                diceTime = 1;
                noRollsTwo =1;
                curP = 2;
                document.querySelector(".who_turn").textContent= "Player 2's turn";
                document.querySelector(".roll1").classList.add("hide");
                document.querySelector(".dice_no").textContent="First dice: roll three times. Highest roll = score";
            }
            else if (noRollsTwo > 6 ){
                diceTime = 1;
                noRollsOne = 1;
                curP = 1;
                document.querySelector(".who_turn").textContent= "Player 1's turn";
                document.querySelector(".roll2").classList.add("hide");
                document.querySelector(".dice_no").textContent="First dice: roll three times. Highest roll = score";
            }
        }
    }

});

function stop(){
    if (roundNo > rounds){
        console.log(pOneWins, pTwoWins)
        if (pOneWins > pTwoWins)
            document.querySelector(".win").textContent="PLAYER 1 WINS"
        else if (pTwoWins > pOneWins)
            document.querySelector(".win").textContent="PLAYER 2 WINS"
        else 
            document.querySelector(".win").textContent="DRAW"
    }
}

document.querySelector(".restart").addEventListener("click", function(){
    roundNo = 0;
    pOneWins = pTwoWins = 0;
    sumOne = sumTwo = oneHigh = twoHigh = roll1 = roll2 = 0;
    document.querySelector(".enter").classList.remove("hide");
    document.querySelector(".outcome").classList.add("hide");
    document.querySelector(".continue").classList.add("hide");
    document.querySelector(".end").classList.add("hide");
    document.querySelector(".round").classList.add("hide");
    // document.querySelector(".roll_to_start").classList.remove("hide");
})