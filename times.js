const btn15s = document.getElementById("btn-15s");
const btn30s = document.getElementById("btn-30s");
const btn60s = document.getElementById("btn-60s");
const btn120s = document.getElementById("btn-120s");

const timeBtn = document.getElementById(`timeBtn`);



/////////////////////////////////////////////////////////////////
timeBtn.addEventListener("click", function(){
    secondPage.style.display = "none";
    timePage.style.display = "grid";
//--------------------------//////--------------------////////////


    function formTable2(){
        numberPage.style.display="none";
        mainPage.style.display="flex";
        //for time
        var time= setInterval(function() {
        if(timeLeft>=0)
        {
            document.getElementById('fortime').innerHTML=timeLeft;
        }
        timeLeft-=1;

        if(timeLeft<=0){
            
            mainPage.style.display='none';
            resultPage.style.display='flex';
            document.getElementById('result').innerHTML= valu-1;
           }
    },1000);
        
    
    var numbers = [];
    for(x=0;x<muntiplyNum;x++){
          
        let nums=Math.floor(Math.random() * muntiplyNum)+1;
        
        if(numbers.includes(nums)){
            x--;
            
          }else{
            let maintable=document.createElement('button')
            maintable.className = "maintable3";
                document.getElementById('mainpart').appendChild(maintable);
            maintable.innerHTML=nums;
            numbers.push(nums)
        }
        
    };
    
        //For score value
        var num=numbers.sort(function(a, b){return a-b});
        
        
        const forscore= document.getElementById('forscore');
        var turn=document.getElementById('forturn');
        forscore.innerHTML="0"
        var valu=0o1;
        turn.innerHTML = '1';
        var mainTable =document.querySelectorAll(".maintable3").forEach(element =>{
          element.addEventListener('focus', ()=>{
            if(valu == element.innerText){
                
                forscore.innerHTML=valu;
              
              valu++;
              forturn.innerHTML=valu;
              element.innerText=numbers.length+(valu-1);
              
            }
        })
    })

 
        
        
        };




//--------------------------/////////--------------------//////
btn2.onclick = function btn2(){
     muntiplyNum=4;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(35vw, 230px) min(35vw, 230px)";
    mainPart.style.gridTemplateRows = "min(35vw, 230px) min(35vw, 230px)";
    formTable2();
};
btn3.onclick = function btn3(){
     muntiplyNum=9;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(25vw, 150px) min(25vw, 150px) min(25vw, 150px)";
    mainPart.style.gridTemplateRows = "min(25vw, 150px) min(25vw, 150px) min(25vw, 150px)";
    formTable2();
};
btn4.onclick = function btn4(){
     muntiplyNum=16;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(17vw, 110px) min(17vw, 110px) min(17vw, 110px) min(17vw, 110px)";
    mainPart.style.gridTemplateRows = "min(17vw, 110px) min(17vw, 110px) min(17vw, 110px) min(17vw, 110px)";
    formTable2();
};
btn5.onclick = function btn5(){
     muntiplyNum=25;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px)";
    mainPart.style.gridTemplateRows = "min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px)";
    formTable2();
};
//----------------------------------------
 btn15s.onclick = function btn15s(){
    timePage.style.display = "none";
    numberPage.style.display = "grid";
    timeLeft = 15;

};

btn30s.onclick = function btn30s(){
    timePage.style.display = "none";
    numberPage.style.display = "grid";
    timeLeft = 30;
};

btn60s.onclick = function btn60s(){
    timePage.style.display = "none";
    numberPage.style.display = "grid";
    timeLeft = 60;
};

btn120s.onclick = function btn120s(){
    timePage.style.display = "none";
    numberPage.style.display = "grid";
    timeLeft = 120;
};

});