const googlyNormalElement  = document.getElementById("googly-state");
const googlyWrongElement  = document.getElementById("googly-state-gif");
const googlyWokeElement  = document.getElementById("googly-state-woke");
let isPoked = false;
let isWoked = false;
function poke() {

    if (isPoked) { //If Poked = true
        googlyNormalElement.style.display = "block";
        googlyWrongElement.style.display = "none";
        googlyWokeElement.style.display = "none";
    } else {       //If Poked = false
        googlyNormalElement.style.display = "none";
        googlyWrongElement.style.display = "block";
        googlyWokeElement.style.display = "none";
    }
    isPoked = !isPoked;
}
function theWokeAgenda(){
   if(isPoked)
   {
       return
   }
    if (!isWoked) {
        googlyNormalElement.style.display = "none";
        googlyWokeElement.style.display = "block";
        googlyWrongElement.style.display = "none";
    } else {
        googlyNormalElement.style.display = "block";
        googlyWokeElement.style.display = "none";
        googlyWrongElement.style.display = "none";
    }
    isWoked = !isWoked;
}

function theWokeAgenda2(){
    //isWoked = !isWoked;
    theWokeAgenda()
    if (!isPoked)
    {
        isPoked = false;
        poke()
    }
}

function init (){
    googlyNormalElement.addEventListener("click", poke);
    googlyWrongElement.addEventListener("click", poke);
    googlyNormalElement.addEventListener("mouseover", theWokeAgenda);
    googlyWokeElement.addEventListener("mouseout", theWokeAgenda);
    //googlyWokeElement.addEventListener("click", theWokeAgenda);
    googlyWokeElement.addEventListener("click", theWokeAgenda2);
    googlyWrongElement.style.display = "none";
    googlyWokeElement.style.display = "none";
    googlyNormalElement.style.display = "block";
}

init()

