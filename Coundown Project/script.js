const enddate="05-09-2024 10:00 PM"

function clock(){
    document.querySelector('#date').innerHTML=enddate

let myTimeStamp=Date.now()

let cd=Math.floor(myTimeStamp/1000)

let enddateObject=new Date(enddate)
let cd2=Math.floor(enddateObject/1000)

const result=cd-cd2
console.log(Math.floor(result/3600/60/24));

let days=Math.floor(result/3600/60/24);
document.querySelector("#box1").innerHTML=days

let hours=Math.floor(result/3600%60)
document.querySelector("#box2").innerHTML=hours

let min=Math.floor(result/60%60)
document.querySelector("#box3").innerHTML=min

let sce=Math.floor(result%60)
document.querySelector("#box4").innerHTML=sce
}

clock();

setInterval(
    () => {
    clock()
}, 1000);




