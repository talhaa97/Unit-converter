
let para1 = document.getElementById("p-1")


function length(){
    let x = document.getElementById("value-el").value;
    let inFeet = x * 3.28084
    let inMeter = x * 0.3048
    para1.innerHTML = x + ` meters =  ${inFeet.toFixed(3)} +  feet  | |  ${x} feet = ${inMeter.toFixed(3)} meters`
}

function vloume() {
    
    let x = document.getElementById("value-el").value;
    let para2 = document.getElementById("p-v")
    let inGallon = x * 0.219969
    let inLiter = x * 4.54609 
    para2.innerHTML = x + ` gallons = ${inLiter.toFixed(3)} liters | | ${x} liters = ${inGallon.toFixed(3)} gallons ` 

}

function mass() {
    let x = document.getElementById("value-el").value;
    let para3 = document.getElementById("p-m");
    let inKg = x * 0.453592
    let inPound = x * 2.20462 
    para3.innerHTML = x + ` Kilograms = ${inPound.toFixed(3)} Pounds | | ${x} Pounds = ${inKg.toFixed(3)} kgs` 
    
}