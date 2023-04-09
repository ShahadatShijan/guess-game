
let totalwon = 0;
let totallost = 0;
let totalattempts = 5;
let attempts = 0;

const cardbody = document.querySelector(".card-body");
const form = document.querySelector("form");
const guessingnumber = document.querySelector("#number");
const chkbutton = form.querySelector("#btn");
const remainingattempts = document.querySelector(".attempts")
const result = document.querySelector(".result-text")
const lostwon = document.createElement("h1");

form.addEventListener("submit",function(e){
    e.preventDefault();
    attempts++;
    if(attempts == 5){
        guessingnumber.disabled = true;
        chkbutton.disabled =true;
    }if(attempts < 6){
        const guess = Number(guessingnumber.value);
        calculateNumber(guess);
    }
    remainingattempts.innerHTML = `Remaining Attempts : ${totalattempts - attempts}`
    guessingnumber.value = "";
})

function calculateNumber(guess){
    let num = guess;
    let randomnumber = Math.floor(Math.random() * 5 + 1);

    if(num == randomnumber){
        result.innerHTML = `You have won`;
        totalwon++;
    }else{
        result.innerHTML = `You have lost. Random number was: ${randomnumber}`;
        totallost++;
    }

    lostwon.innerHTML = `Won : ${totalwon}, Lost : ${totallost}`;
    lostwon.classList.add("lostwonstyle");
    cardbody.appendChild(lostwon);

}

