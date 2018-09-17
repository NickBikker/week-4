var KaasGeel = prompt("Is de kaas geel?");
var gaten;
var blauweschimmel;

if(KaasGeel == 'ja'){
    gaten = prompt("Zitten er gaten in?");
} else if(KaasGeel == 'nee'){
    blauweschimmel = prompt("heeft de kaas blauwe schimmels?");
}

var KorstJa;
var KorstNee;

if(blauweschimmel == 'ja'){
    KorstJa = prompt("Heeft de kaas een Korst?");
} else if(blauweschimmel == 'nee'){
    KorstNee = prompt("Heeft de kaas een Korst?");
}

var duur;
var steen;

if(gaten == 'ja'){
    duur = prompt("Is de kaas belachelijk duur?")
} else if(gaten == 'nee'){
    steen = prompt("Is de kaas hard als steen?")
}

var Camembert;
var Mozzarella;

if(KorstNee == 'ja'){
    Camembert = document.write("Uw keuze is de Camembert kaas.")
} else if(KorstNee == 'nee'){
    Mozzarella = document.write("Uw keuze is de Mozzarella kaas.")
}

var Rochbaron;
var Foume;

if(KorstJa == "ja"){
    Rochbaron = document.write("Uw keuze is de Bleu de Rochbaron kaas.")
} else if(KorstJa == "nee") {
    Foume = document.write("Uw keuze is de Foume d'Ambert kaas.")
}

var emmenthaler;
var leerdammer;

if(duur == 'ja'){
    emmenthaler = document.write("Uw keuze is de Emmenthaler kaas.")
} else if(duur == 'nee') {
    leerdammer = document.write("Uw keuze is de Leerdammer kaas.")
}

var pammigiano;
var goudsekaas;

if(steen == 'ja'){
    pammigiano = document.write("Uw keuze is de Pammigiano Reggiano kaas.")
} else if(steen == 'nee') {
    goudsekaas = document.write("Uw keuze is de Goudse kaas.")
}