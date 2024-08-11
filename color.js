const colorBox=document.querySelector(".color");

function getColor(){
    const randomNumber=Math.floor(Math.random()*16777215);
    const randomCode = "#"+randomNumber.toString(16);
    console.log(randomCode,randomNumber);
    
    document.body.style.backgroundColor=randomCode; 
    document.querySelector(".color").value=randomCode;
}



function copyPassword(){
    colorBox.select();
    document.execCommand("copy");
}