const newGame = document.getElementById("newGame");
const firstPage = document.getElementById(`firstPage`);
const secondPage = document.getElementById(`secondPage`);
const secondBack = document.getElementById(`second-back`);
const timePage = document.getElementById(`timePage`);
const numberPage = document.getElementById(`tablePage`);
const timeBack = document.getElementById(`timeBack`);
const numberBack = document.getElementById(`numberBack`);
const mainPage = document.getElementById("mainPage");
const restart = document.getElementById("restart");
const startAgain = document.getElementById("start-again");
newGame.addEventListener("click", function(){
        firstPage.style.display = 'none';
        secondPage.style.display = 'flex';
});
secondBack.addEventListener("click", function(){
    firstPage.style.display = "flex";
    secondPage.style.display = "none";
});
timeBack.addEventListener("click", function(){
    timePage.style.display = "none";
    secondPage.style.display = "flex";
});
numberBack.addEventListener("click", function(){
    numberPage.style.display = "none";
    secondPage.style.display = "flex";
});


//-------------------restart-----------------
restart.addEventListener("click", function(){
    firstPage.style.display = 'flex';
    
    mainPage.style.display = "none";
});

startAgain.addEventListener("click", function(){
    resultPage.style.display = "none";
    firstPage.style.display = 'flex';
})
   








