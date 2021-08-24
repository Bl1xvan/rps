const judgement = document.getElementById("judgement");
const compChoice = document.getElementById("compchoice");
const compLabel = document.getElementById("comp-label");
const dimensions = document.getElementById("dimensions");

function checkSize(){
    const height = this.innerHeight;
    const width = this.innerWidth;
    const txt = "H: " + height + " W: " + width;
    dimensions.innerText = txt;
}

//go back to the attributes route

//Any way to add points?

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
    compChoice.innerHTML = `<img src="./images/enemy_`+ weapon +`.png" alt="`+weapon+`">`;
    const winorlose = yourChoice.getAttribute("data-" + weapon);
    displayJudge(winorlose);
}

function displayJudge(winorlose){
    judgement.innerHTML = winorlose;
    judgement.setAttribute("class", winorlose);
    document.getElementById(winorlose).innerText = parseInt(document.getElementById(winorlose).innerText) + 1;
}

