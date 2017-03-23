var suma = 0;
function funkcija(numb){
var j = document.getElementById(numb);


if(j.checked){
suma += parseInt(j.value);
document.getElementById('cena').innerHTML = suma;
document.getElementById('j'+numb).style.color = "green";

}
else{
suma -= parseInt(j.value);
document.getElementById('cena').innerHTML = suma;
document.getElementById('j'+numb).style.color = "#333";
}

if(suma >= 500){
document.getElementById('cena').style.color = "Gray";
}

if(suma < 500){
document.getElementById('cena').style.color = "Gray";
}

if(suma >= 12000){

document.getElementById('cena').style.color = "red";
}

if(suma < 1000){
document.getElementById('good').innerHTML = "";
}
}

function boja(asd){
var b = document.getElementById(asd);
b.style.background = "pink";
}

function Boja(asd){
var b = document.getElementById(asd);
b.style.background = "transparent";
}