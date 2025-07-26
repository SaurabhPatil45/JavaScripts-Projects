const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase="abcdefghijklmnopqrstuvwxyz"
const number="1234567890"
const specialCharacter="!@#$%^&*"

const upperInput=getElementById("upper")

const generatePassword=(dataType)=>{
  return dataType[Math.floor(Math.random())*dataType.length]

}

const generatePass=(password="")=>{
 if(upperInput.checked){
    password = password+ generatePassword(upperCase)
    console.log(password);
    
 }
}

//console.log(generatePassword(upperCase));


document.getElementById('btn').addEventListener("click",
    function(){
        generatePass();

    }
)
