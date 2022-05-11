/* 
crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata, tipo:
<ul>
    <li>parola1 arr1
        <ul>
            <li>parola1 arr2</li>
		    <li>parola2 arr2</li>
	    </ul>
    </li>
    <li>parola2 arr1
        <ul>
            <li>parola1 arr2</li>
            <li>parola2 arr2</li>
        </ul>
    </li>
    <li>parola3 arr1
…etc
*/

// creo i due array

const plantList =["Oleandro", "Baobab", "Toto", "Broken", "Dreams"];
const placeList =["Africa", "Giardino"];

// lego la lista dell'html alla costante

const plantUl = document.getElementById("list_output");

// avvio un ciclo for per inserire i li

for (let i = 0; i < plantList.length; i++) {

    let plant = plantList[i];

    let plantLi = document.createElement("li");

    plantLi.append(plant);

    plantUl.append(plantLi);

    let placeUi = document.createElement("ul");

    for (let j = 0; j < placeList.length; j++) {

        const place = placeList[j];

        let placeLi = document.createElement("li");

        placeLi.append(place);

        placeUi.append(placeLi);

        plantLi.append(placeUi);

    }        
}

