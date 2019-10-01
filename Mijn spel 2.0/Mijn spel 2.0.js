var leeftijd = prompt("Wat is je leeftijd?")
var leeftijd = 15

if(leeftijd < 15){
    alert('Je mag deze game spelen');
} else{
    alert("Je mag deze game niet spelen")
    location.reload()
}


alert("Welkom bij mijn game je bevindt je in een simulatie je kan pas de  simulatie verlaten als je 9 obstakels hebt volbracht en 1 vraag goed hebt beanwtoord.");

var answer = prompt("Je bevindt je in een simulatie en je moet 9 obstakels voltooien en op het laatst een vraag om de simulatie te voltooien. \n De eerste obstakel is om een brug over te steken maar de planken zitten los of zitten er niet. Er zijn 2 manieren om de brug over te steken. \n1) De lianen gebruiken om over de brug te slingeren. \n2) Door over de planken te springen en te rennen \n\n Type 1 of 2.")

    if(answer == 1){
        alert("Je hebt het overleefd door de lianen te gebruiken")
    }
    else{
        alert("Je hebt het niet overleefd omdat je door 1 van de planken naar beneden viel.")
        location.reload()
    }
    
    answer = prompt("Je 2e obstakel: Je bent gesimuleerd in een op hol geslagen trein die af rijd in een ravijn. Je hebt 2 manieren om het te overleven. \n1) De noodrem gebruiken. \n\n Of \n\n. \n2) Eruit springen.");

    if(answer == 1){
        alert("De noodrem houd de trein niet tegen en rijd de ravijn in.")
        location.reload()


    }

    else if(answer == 2){
        alert("Je hebt het overleeft door in het water te vallen die in de ravijn zit");
    }
    
     answer = prompt("Je 3e obstakel: Je wordt in een ruimteschip gesimuleerd die richting de zon vliegt maar het schip heeft een probleem in de motor waardoor het schip niet achteruit gaat. Je hebt 2 manieren om het te overleven.\n1) Een ontsnapping capsule nemen. \n\n Of \n\n. \n2) De motor reparen.");

    if(answer == 1){
        alert("Je hebt het obstakel overleefd door de onstapping capsule te gebruiken.")
    }
    else{
        alert("Je hebt niet overleefd om de motor te repareren.")
    }

    answer = prompt("Je 4e obstakel: Je word gesimuleerd in een lege ruimte met een doel in het midden en je moet een bal erin schieten maar het moeilijke is dat er 2 pilaren in het midden zitten. Je hebt 2 manieren om te scoren. \n1) De bal erin schieten zonder na te denken.\n2) Met de bal naar het doel lopen en erin gooien.");

    if(answer == 1){
        alert("Het is je niet gelukt om de bal erin te schieten en je wordt gedood.")
    }
    
            
            
    
        

