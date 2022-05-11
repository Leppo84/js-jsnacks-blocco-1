// crea 2 array, di 5 stringhe il primo e di 2 stringhe il secondo, stampa dentro una UL dove ogni LI ha come contenuto principale in ordine, le parole del primo array e come sotto-contenuto annidato le 2 parole del secondo array in una UL annidata, tipo:
// <ul>
//  	<li>parola1 arr1
// 		<ul>
//  			<li>parola1 arr2</li>
// 			<li>parola2 arr2</li>
// 		</ul>
// 	</li>
// 	<li>parola2 arr1
// 		<ul>
//  			<li>parola1 arr2</li>
// 			<li>parola2 arr2</li>
// 		</ul>
// 	</li>
// 	<li>parola3 arr1
// 	…etc


// creo l'array vuoto

const plantList =["Oleandro", "Baobab", "Sandalo", "Zucca", "Rododendro"];
const plantInfo =["Ciclo vitale", "Coltivazione"];

const plantUl = document.getElementById("list_output");

// avvio un ciclo for per inserire i li

for (let i = 0; i < plantList.length; i++) {

    let plant = plantList[i];

    let plantLi = document.createElement("li");

    plantUl.append(plantLi);





}

