"use strict"
let rounds = 0

document.querySelector(".submit").addEventListener("click", function () {
    console.log("Hi")
    rounds = document.getElementById("rounds").value;
    if (rounds < 1)
        alert("Invalid Number of Rounds")
    if ( rounds % 2 != 1)

    console.log(rounds)
    });