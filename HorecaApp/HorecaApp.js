var frisprijs = 2.00;
var bierprijs = 3.00;
var wijnprijs = 4.00;
var bitterballenprijs = 12.00;

alert ("Welkom bij de HorecaApp")

alert("Type: STOP om naar de volgende bestelling te gaan.")

var keuze = prompt("Welke drank wilt type een nummer in: 1 = fris of 2 = bier of 3 = wijn");

function keuzes() {
    if(keuze == 1){
        prompt("Hoeveel aantal frisdranken wilt u?");
    } else if(keuze == 2){
        prompt("Hoeveel aantal bier wilt u?");

    } else{
        location.reload();
    }
   
    if(keuze == 3){
        prompt("Hoeveel aantal wijn wilt u?")
    }
}

keuzes(keuze);




