     alert("Welkom bij mijn vragenspel");

        var leeftijd = 15;
        var toegang;

     leeftijd = prompt("Wat is je leeftijd?");

        if(leeftijd <= 15){
     alert("Je mag deze spel niet spelen.")
        location.leeftijd(false);
        }
    else if(leeftijd >= 15){

        toegang = true;
     alert("Je mag deze spel spelen");
     }


    
    
     var naam = prompt("Wat is jou naam?");
    var answer = prompt("Welkom " + naam + " . Je komt aan bij 2 deuren en je mag maar 1 deur kiezen maar ze hebben ook allebei met als einde.\n1) Deur 1. \n2) Deur 2. \n\n Welke deur kies je?(Type 1 of 2)");


   
 
 
     if(answer == 1){
     alert("Je hebt deur  1 gekozen en je bevindt je nu op een bootje met peddeles in het midden van de Atlantische Oceaan");
     }   
     else if(answer == 2){
    
     alert("Je hebt deur 2 gekozen je komt een kamer vol slangen binnen die je meteen bijten met gif");
     location.answer(false);
     }

   
   
     var v1 = prompt("Je ziet een schip in de verte en achter je een afgelegen eiland met palmbomen en een strand. Maar waar ga je heen peddelen?. \n1) Naar het schip. \n2) Naar het eiland?, \n\n (Type 1 of 2)");

     if(v1 == 2){
     
     alert("Je hebt voor gekozen om naar het eiland te peddelen en na aankomst zie je wat te drinken en wat te eten op het strand.");
     }   
     else if(v1 == 1 ){
    
     alert("Je hebt gekozen voor het schip maar je ziet al dat er een storm eraan komt.")
     location.v1(false);
     }

    
    
     var v2 = alert("Je verken het eiland en komt achter dat je alleen bent, geen enkel andere menssoort te bekkennen maar het eiland zit vol met apen en andere diersoorten.")

     prompt("Je komt 2 wegen een linker en een rechter tegen met een andere einde op het eind. Welke weg kies je?. \n1) Links?. \n2) Rechts?. \n\n (Type 1 of 2)");

     if(v2 == 1 ){
     alert("Je hebt voor de linker weg gekozen, maar plotseling komt er een tijger uit het niets die je verlind aan stukken.");
     location.v2(false);
     }
     else if(v2 == 2){
     alert("Je hebt voor de rechter weg gekozen, die je lijdt naar een prachtige waterval met veel gloeiende stenen.")
     }

    
    
     
     
     var v3 = prompt("Zoals je ziet zie je een prachtige waterval voor je met midden een pad met stenen dat richting door de waterval heen gaat en rechts van je een pad die ook gaat door de waterval maar er zijn 2 manieren om in die waterval te gaan. \n1) Via de stenen waar je op kan staan. \n2) Via de rechterpad die rechts loopt van de waterval.");

     if(v3 == 1){
        alert("Je hebt voor de stenen gekozen ,maar je gleed uit waardoor je je hoofd keihard tegen een steen op de grond stootte.");
        location.v3(false);
     }
     else if(v3 == 2 ){
        alert("Je hebt voor gekozen om via de rechterpad de waterval in tegaan, je viel bijna maar je had wel grip te vinden door een liaan te pakken. ");
     }

     
     
     
     var v4 = prompt(" . Je bent aangekomen om via het  rechterpad de waterval in te gaan, je kwam binnen en zag een hele grote grot die zich bevind achter de waterval. Je zag een fles die binnen op de grond is met een brief erin. Maar die fles zit vast gebonden aan een touw die vast gebonden is aan een stok die een grote vierkante plaat vasthoud waar allemaal scherpe stokken aan vastzitten. Je hebt 2 manieren om die fles te krijgen. \n1) Heel snel het touw doorsnijden en de fles pakken en wegrennen van een plaat met scherpe stokken. \n2) Een liaan om om de fles te zetten en het trekken om de fles te krijgen. ");

     if(v4 == 1){
        alert("Je hebt gekozen om de snelle manier te gebruiken maar je bent niet snel genoeg en komt toch terecht onder een plaat met scherpe stokken.");
        location.v4(false);
     }
     else if(v4 == 2){
        alert("Je kiest voor de liaan manier en het is je gelukt om de fles op die manier te pakken.");
     }

     var v5 = prompt(" . Je leest de brief in de fles en er staat een raadsel die richting een tunnel leid in de grot maar in de verte komt een splitsing aan. Welke van de 2 doorganngen kies je?. \n1) Links. \n2) Rechts.");

     if(v5 == 1){
        alert("Je hebt voor de rechter doorgang gekozen,maar plotseling viel je terecht in een diepe afgrond.");
        location.v5(false);
     }
     else if(v5 == 2){
        alert("Je hebt voor de rechter doorgang gekozen en je komt een trap tegen die naar benenden gaat.")
     }


    
    
     var v6 = prompt("Je komt van de trap in een grote ruimte met kristallen en daar met een deur met raadsel met erop: In welk wereld deel ligt Nederland \n1) Europa. \n2 Zuid-Amerika.");

     if(v6 == 1){
        alert("Europa is het goede antwoord.");
     }
     else if(v6 == 2){
        alert("Zuid-Amerika is niet het goede antwoord.")
        location.v6(false);
     }

     
     
     
     var v7 = prompt("Je komt door de deur heen en komt in nog een ruimte met een deur terecht met nog een raadsel: Wat is 9+9?. \n1) 22. \n2) 99. \n3) 18.")

     if(v7 == 1){
        alert("22 is niet het goede antwoord")
        location.v7(false);
     }
     else if(v7 == 2){
        alert("99 is niet het goede anwtoord")
        location.v7(false);
     }
     else if(v7 == 3){
        alert("18 is het goede antwoord");
     }




     var v8 = prompt("Je bent langs de deur heen. Je loopt door een lange gang en stapt op een tegel die een bodytrap activeert waardoor de hele gang vol komt te zitten met gif gas. Je hebt 2 manieren om uit die gang te ontsnappen. \n1) De gasmasker te pakken met timer dat geeft aan dat je 1,5 minuut aan zuurstof hebt die in een filter zit. \n2) Rennen.");

     if(v8 == 1){
        alert("Je hebt voor de gasmasker manier gekozen en het is je gelukt je hebt de gang vol gas overleefd.");
     }
     else if(v8 == 2){
        alert("Je hebt gekozen om te rennen en het is je niet gelukt omdat het gas snel verspreidde.");
        location.v8(false);
     }



     
     var v9 = prompt("Je bent veilig door de gang heen gekomen. En je komt een kleine aapje tegen die honger heeft en je voelt in je zakken dat je een koekje hebt. \n1) Je geeft het koekje. \n2) Je eet het koekje zelf.")

     if(v9 == 1){
        alert("Je geeft het koekje want je bent een goed mens.")
     }
     else if(v8 == 2){
        alert("Je eet het koekje zelf op en loopt verder maar dan voel je je schuldig omdat je het koekje zelf hebt opgegeten.")
     }

     alert("Ook al eet je het koekje op of geef je het koekje aan het aapje je gaat gewoon door naar de volgende ruimte zonder gevolgen.");



     
     var v10 = prompt("Je bent in de laatste kamer voordat je je beloning krijgt. Maar de beloning zit achter een grote deur die bewaakt word door een grote monster. Je hebt een manier om het monster te doden. \n1) Een gif bom die je naast je ziet liggen in zijn mond gooien. \n2) Een kanon die rechts zit met een kanonkogel die super sterk is die door de monster heen gaat.")

     if(v10 == 1){
      alert("Je hebt gekozen om de gif bom te gooien in zijn mond maar de monster is te snel en sloeg de bom weg en stampt je dood.")
      location.v10(false);
      }
      else if(v10 == 2){
      alert("Je hebt gekozen om de kanon te gebruiken je en het is je gelukt om het monster te verslaan.")
      }

     alert("Je hebt het monster verslagen en hiermee de beloning verdient dat achter de grote deur zit maar je ziet er 2 deuren en achter 1 van de 2 deuren zit de beloning met een portaal die je terug stuurt naar de bewoonde wereld en 1 van de 2 deuren zit ook met een portaal die je meteen richting de bewoonde wereld teleporteert.")
     
     
     
     
     var v11 = prompt("Welke deur kies je?. \n1) 1.Links \n2) 2.Rechts");
     if(v10 == 1){
        alert("Je hebt voor de linker deur gekozen en hiermee word je terug gestuurd naar de bewoonde wereld.");
        location.v11(false)
     }
     else if(v11 == 2){
        alert("Je hebt voor de rechter deur gekozen en je hebt je beloning gekregen en je word terug geteleporteerd richting de bewoonde wereld. ");
     }
        