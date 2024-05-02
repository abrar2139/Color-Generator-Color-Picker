let output = document.getElementById("output");
let colorPicker = document.getElementById("colorpicker");
let colorBox = document.querySelector(".colorbox span");
let customAlert = document.querySelector(".custom-alert");
let generateBtn =document.getElementById("gen-btn");
let copyBtn =document.getElementById("copy-btn");
let hexString = "123456789abcdef";
const generateColor = (color) =>{
    colorBox.style.backgroundColor = color
    output.value = color
    colorPicker.value = color;
}
const generateRandomHexValue = () => {
    let hexvalue = '#' + Array.from({ length: 6 }, ()=> hexString[Math.floor(Math.random() * hexString.length)]).join('');
    generateColor(hexvalue)
    // colorPicker.value = hexvalue;
    // document.documentElement.style.setProperty('--picked-color', hexvalue);
    // colorPicker.style.setProperty('--picked-color', hexvalue);
    colorBox.classList.remove( "show-color")
    setTimeout(() => {
        colorBox.classList.add( "show-color")    
    }, 10);
    colorBox.style.backgroundColor = hexvalue
    // colorPicker.dispatchEvent(new Event('input'));
}
const copingHexValue =async () =>{
    try {
      await  navigator.clipboard.writeText(output.value);
    customAlert.style.transform="translateX(0)";
    copyBtn.style.backgroundColor="#e135f8"
    copyBtn.style.color="black"
    setTimeout(() => {
        copyBtn.style.backgroundColor="transparent"
        copyBtn.style.color="#e135f8"
        copyBtn.style.border="#e135f8 3px solid"
    customAlert.style.transform="translateX(calc(100% + 10px))"; 
    }, 2000); 
    } catch (error) {
        console.error('Failed to copy: ', error);
    }
   
}
const updateSwatchColor = () => {
    let pickedColor = colorPicker.value;
    generateColor(pickedColor)
    // colorPicker.style.setProperty('--picked-color', pickedColor);
}
 colorPicker.addEventListener("change", updateSwatchColor);
 colorPicker.addEventListener("input", updateSwatchColor);
 copyBtn.addEventListener("click",copingHexValue)
 generateBtn.addEventListener("click",generateRandomHexValue)
 window.onload = generateRandomHexValue