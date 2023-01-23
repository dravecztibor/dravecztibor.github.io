var tomb = [
    "A tanár panaszkodik Móricka szüleinek: - A maguk gyereke a legrosszabb az egész osztályban. Egyszerűen nem bírok vele. Ráadásul még sosem hiányzott egy napot sem!",
    "Móricka, amikor elmentem itthonról, a hűtőszekrényben még két szelet torta volt, most viszont csak egy van. Hogyan lehetséges ez? - kérdi morcosan az anyuka.- Hát úgy, hogy a másikat nem vettem észre.",
    "A föld gömb alakját akarja érzékeltetni a tanár a diákokkal.- Móricka! Ha én itt a tanterem közepén elkezdek ásni, és ások, ások, hova jutok?- A diliházba.",
    " Jegyeket, bérleteket kérek!Móricka megszólal:- Anyád tudja, hogy kéregetsz?",
    "Mórickát felelteti a tanár.- Melyik a legrövidebb hónap?- Május! - feleli Móricka.- Miért?- Mert az csak öt betűs.",
]
var kepek = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
]

vicc()

function vicc(){
    //alert("hello")
    var veletlen = Math.floor(Math.random() * tomb.length);
    console.log(veletlen);
    document.getElementById("vicchelye").innerHTML=tomb[veletlen];
    document.getElementById("vicckepe").src=kepek[veletlen];
}
