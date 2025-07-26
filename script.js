let counter=0;
let increase=document.getElementById("increase");
let decrease=document.getElementById("decrease");
let reset=document.getElementById("reset");
let countDisplay=document.getElementById("count");

function updateText(){
 countDisplay.textContent=counter;
}

increase.addEventListener("click",function(){
   counter++
   updateText()
})

decrease.addEventListener("click",function(){
    
    if(counter==0 || counter<0){
        countDisplay.textContent=0

    }
    else{
        counter--;
    updateText()

    }
})

reset.addEventListener("mouseover",function(){
    counter=0;
    updateText()
})