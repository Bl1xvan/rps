const judgement = document.getElementById("judgement");
const compChoice = document.getElementById("compchoice");
const compLabel = document.getElementById("comp-label");

const weapons = ["rock", "paper", "scissors"];
document.addEventListener("click", gameOn);

function gameOn(event){
if(event.target.className == "yourchoice"){
        const weapon = randomize();
        const yourChoice = event.target;
        compLabel.innerHTML = weapon;
        displayComp(yourChoice, weapon);
    }
}

function randomize(){
    const randomIndex = Math.floor(Math.random() * weapons.length);
    return weapons[randomIndex];
}

function displayComp(yourChoice, weapon){
    compChoice.innerHTML = `<i class="fa fa-hand-${weapon}-o"></i>`;
    const winorlose = yourChoice.getAttribute("data-" + weapon);
    displayJudge(winorlose);
}

function displayJudge(winorlose){
    judgement.innerHTML = `<span class="${winorlose}">${winorlose}</span>`;
    
    document.getElementById(winorlose).innerText = parseInt(document.getElementById(winorlose).innerText) + 1;
}