const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const color = document.getElementById("color");

btn.addEventListener('click',()=>{
    const randomHexColor = getRandomHexColor();
    document.body.style.backgroundColor = randomHexColor;
    color.textContent = randomHexColor;
    color.style.color = randomHexColor;
})

color.addEventListener('click',()=>{
    copyToClipboard();
})





const getRandomNumber = ()=>{
    return Math.floor(Math.random()*(hex.length))
}

const getRandomHexColor = () =>{
    let hexColor='#';
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];
    }
    return hexColor;
}

const copyToClipboard = () =>{
    navigator.clipboard.writeText(color.textContent)
    alert("Copied Hex to Clipboard !");
}