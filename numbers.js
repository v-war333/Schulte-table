const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3");
const btn4 = document.getElementById("btn-4");
const btn5 = document.getElementById("btn-5");

const mainPart = document.getElementById("mainpart");

const numberBtn = document.getElementById(`numberBtn`);
const resultPage = document.getElementById("result-page");
let result = document.getElementById("result");
let muntiplyNum;
/////////////////////////////////////////////////////
numberBtn.addEventListener("click", function(){
    secondPage.style.display = "none";
    numberPage.style.display = "grid";
//-----------------------////-------------------------//////


    function formTable(){
        numberPage.style.display="none";
        mainPage.style.display="flex";
        //for time
        var timeLeft=1;
        var time= setInterval(function() {
        if(timeLeft>=0)
        {
            document.getElementById('fortime').innerHTML=timeLeft;
        }
        timeLeft+=1;
    },1000);
        

   
    
    
    var numbers = [];
    for(x=0;x<muntiplyNum;x++){
          
        let nums=Math.floor(Math.random() * muntiplyNum)+1;
        
        if(numbers.includes(nums)){
            x--;
            
          }else{
            let maintable=document.createElement('button')
            maintable.className = "maintable3";
                mainPart.appendChild(maintable);
            maintable.innerHTML=nums;
            numbers.push(nums)
        }
      
        
    }
        //For score value
        let num=numbers.sort(function(a, b){return a-b});
        
        
        let forscore= document.getElementById('forscore');
        let turn=document.getElementById('forturn')
        forscore.innerHTML="0"
        turn.innerHTML='1'
        let valu=1;
        document.querySelectorAll(".maintable3").forEach(element =>{
          element.addEventListener('focus', ()=>{
            if(valu == element.innerText){
                
                forscore.innerHTML=valu;
              
              valu++;
              turn.innerHTML=valu;
              //element.innerText=numbers.length+(valu-1);
              if(muntiplyNum==element.innerText){
                mainPage.style.display='none';
                resultPage.style.display='flex';
                document.getElementById('result').innerHTML= timeLeft-1+'sec';

            }
            }
        })
    });
        
        
                      };


//---------------------////////////----------------//////

btn2.onclick = function btn2(){
     muntiplyNum=4;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(35vw, 230px) min(35vw, 230px)";
    mainPart.style.gridTemplateRows = "min(35vw, 230px) min(35vw, 230px)";
    formTable();
};
btn3.onclick = function btn3(){
     muntiplyNum=9;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(25vw, 150px) min(25vw, 150px) min(25vw, 150px)";
    mainPart.style.gridTemplateRows = "min(25vw, 150px) min(25vw, 150px) min(25vw, 150px)";
    formTable();
};
btn4.onclick = function btn4(){
     muntiplyNum=16;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(17vw, 110px) min(17vw, 110px) min(17vw, 110px) min(17vw, 110px)";
    mainPart.style.gridTemplateRows = "min(17vw, 110px) min(17vw, 110px) min(17vw, 110px) min(17vw, 110px)";
    formTable();
};
btn5.onclick = function btn5(){
     muntiplyNum=25;
    numberPage.style.display = 'none';
    mainPage.style.display = 'flex';
    mainPart.style.display = "grid";
    mainPart.style.gridTemplateColumns = "min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px)";
    mainPart.style.gridTemplateRows = "min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px) min(12vw, 88px)";
    formTable();
};


});