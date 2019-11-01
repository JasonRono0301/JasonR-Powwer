//Jason Ronoastro
//DaVinciCollege
//PizzaCalculator

var smallpizza = prompt("Hoeveel kleine pizza's wilt u?");//Hierin kan je een nummer typen uit hoeveel small pizza's je wilt bestellen
var smallprijs = 5.80//De prijs per small pizza
document.write("Aantal: "+smallpizza+" "+"Small Pizza: $"+smallpizza*smallprijs+"<br>")//Het aantal small pizza's keer de prijs is het totale bedrag van de small pizza 

var mediumpizza = prompt("Hoeveel medium pizza's wilt u?");//Hierin kan je een nummer typen uit hoeveel medium pizza's je wilt bestellen
var mediumprijs = 9.00//De prijs per medium pizza
document.write("Aantal: "+mediumpizza+" "+"Medium Pizza: $"+mediumpizza*mediumprijs+"<br>")//Het aantal medium pizza's keer de prijs is het totale bedrag van de medium pizza

var largepizza = prompt("Hoeveel large pizza's wilt u?");//Hierin kan je een nummer typen uit hoeveel large pizza's je wilt bestellen
var largeprijs = 15.00//De prijs per large pizza
document.write("Aantal: "+largepizza+" "+"Large Pizza: $"+largepizza*largeprijs+"<br>")//Het aantal large pizza's keer de prijs is het totale prijs van de large pizza


document.write("Totale bedrag = $")//Hier word letterlijk aangegeven wat op de regel moet staan
result = smallpizza*smallprijs + mediumpizza*mediumprijs + largepizza*largeprijs;//Hier word het totale eindbedrag berekend
document.write(result);//Hier komt de uitkomst van de berekening van het totale bedrag




