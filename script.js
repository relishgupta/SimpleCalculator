let screenText="";
const btn=document.querySelectorAll(".button");
Array.from(btn).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        exp=e.target.innerHTML;
        if(exp=='='){
            screenText=eval(screenText);
            document.querySelector("input").value=screenText;
        }
        else if(exp=='C'){
            screenText="";
            document.querySelector("input").value=screenText;
        }
        else if(exp=='B'){
            screenText=screenText.substring(0,screenText.length-1);
            document.querySelector("input").value=screenText;
        } 
        else{
            screenText=screenText+exp;
            document.querySelector("input").value=screenText;
        }
    })
})
