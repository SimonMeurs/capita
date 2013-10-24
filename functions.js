
var errors = document.getElementById("errors");
var login_xHRObject = new XMLHttpRequest();

function toonError(){
    document.getElementById("errorMessage").removeAttribute("hidden");
}
function clear(id){
    var control = document.getElementById(id);
    var aantal = control.children.length;
    for(var i =0; i < aantal; i++){
        control.removeChild(control.firstChild);
    }
}
function submitForm(){
    document.getElementById("errorMessage").setAttribute("hidden", "hidden");
    clear("errors");
    if(!doPost()){
        toonError();
    } else {
        clear("container");
        var h1 = document.createElement("h1");
        h1.appendChild(document.createTextNode("Je evaluatie is verzonden!"));
        document.getElementById("container").appendChild(h1);
    }
}
function createLI(text){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(text));
    return li;
}
function doPost(){
    var ingevuld = true;
    var concept = 0;
    var inhoud = 0;
    var spreker = 0;
    var campagne = 0;
    if(document.getElementById("concept1").checked){
        concept = 1;
    } else if(document.getElementById("concept2").checked){
        concept = 2;
    }else if(document.getElementById("concept3").checked){
        concept = 3;
    }else if(document.getElementById("concept4").checked){
        concept = 4;
    }else if(document.getElementById("concept5").checked){
        concept = 5;
    }else {
        errors.appendChild(createLI("Je moet nog punten geven voor het concept"));
        ingevuld = false;
    }
    if(document.getElementById("inhoud1").checked){
        inhoud = 1;
    } else if(document.getElementById("inhoud2").checked){
        inhoud = 2;
    }else if(document.getElementById("inhoud3").checked){
        inhoud = 3;
    }else if(document.getElementById("inhoud4").checked){
        inhoud = 4;
    }else if(document.getElementById("inhoud5").checked){
        inhoud = 5;
    }else {
        errors.appendChild(createLI("Je moet nog punten geven voor de inhoud"));
        ingevuld = false;
    }
    if(document.getElementById("spreker1").checked){
        spreker = 1;
    } else if(document.getElementById("spreker2").checked){
        spreker = 2;
    }else if(document.getElementById("spreker3").checked){
        spreker = 3;
    }else if(document.getElementById("spreker4").checked){
        spreker = 4;
    }else if(document.getElementById("spreker5").checked){
        spreker = 5;
    }else {
        errors.appendChild(createLI("Je moet nog punten geven voor de spreker"));
        ingevuld = false;
    }
    if(document.getElementById("campagne1").checked){
        campagne = 1;
    } else if(document.getElementById("campagne2").checked){
        campagne = 2;
    }else if(document.getElementById("campagne3").checked){
        campagne = 3;
    }else if(document.getElementById("campagne4").checked){
        campagne = 4;
    }else if(document.getElementById("campagne5").checked){
        campagne = 5;
    } else {
        errors.appendChild(createLI("Je moet nog punten geven voor de campagne"));
        ingevuld = false;
    }
    if(document.getElementById("naam").value == ""){
        errors.appendChild(createLI("Je moet je naam nog invullen"));
        ingevuld = false;
    }
    if(document.getElementById("reeks").value == ""){
        errors.appendChild(createLI("Je moet je reeks nog invullen"));
        ingevuld = false;
    }
    if(document.getElementById("concept").value == ""){
        errors.appendChild(createLI("Je moet nog commentaar geven over het concept"));
        ingevuld = false;
    }
    if(document.getElementById("inhoud").value == ""){
        errors.appendChild(createLI("Je moet nog commentaar geven over de inhoud"));
        ingevuld = false;
    }
    if(document.getElementById("spreker").value == ""){
        errors.appendChild(createLI("Je moet nog commentaar geven over de spreker"));
        ingevuld = false;
    }
    if(document.getElementById("campagne").value == ""){
        errors.appendChild(createLI("Je moet nog commentaar geven over de campagne"));
        ingevuld = false;
    }
    if(document.getElementById("verbasing").value == ""){
        errors.appendChild(createLI("Je moet nog zeggen wat je verbaasde"));
        ingevuld = false;
    }
    if(document.getElementById("cloud").value == ""){
        errors.appendChild(createLI("Je moet nog zeggen hoe jij de cloud in het dagelijkse leven gebruikt"));
        ingevuld = false;
    }
    if(ingevuld){
        login_xHRObject.open("GET",
            "http://likeit.bugs3.com/php/doPost.php?naam=" + document.getElementById("naam").value
                + "&reeks=" + document.getElementById("reeks").value
                + "&concept=" + document.getElementById("concept").value
                + "&spreker=" + document.getElementById("spreker").value
                + "&inhoud=" + document.getElementById("inhoud").value
                + "&campagne=" + document.getElementById("campagne").value
                + "&verbasing=" + document.getElementById("verbasing").value
                + "&cloud=" + document.getElementById("cloud").value
                + "&pconcept=" + concept
                + "&pspreker=" + spreker
                + "&pinhoud=" + inhoud
                + "&pcampagne=" + campagne

            , true);
        login_xHRObject.onreadystatechange = redirect;
        login_xHRObject.send(null);
    }
    return ingevuld;
}

function redirect(){
    if (xmlhttp.readystate == 4 && xmlhttp.status == 200) {
        errors.appendChild(createLI("Je evaluatie is verzonden!"));
        document.getElementById("errorMessage").removeAttribute("hidden");

        document.getElementById("errorMessage").id = "succesMessage"
        document.getElementById("verzendknop").setAttribute("disabled", "disabled");
    }
}
function errorMessage(){
    document.getElementById("errorMessage").removeAttribute("hidden");
}
function goLeft(current){
    clear("errors");
    document.getElementById("errorMessage").setAttribute("hidden", "hidden");
    document.getElementById(current).setAttribute("hidden", "hidden");
    document.getElementById(current-1).removeAttribute("hidden");

}
function goRight(current){
    document.getElementById(current).setAttribute("hidden", "hidden");
    document.getElementById(current+1).removeAttribute("hidden");
}