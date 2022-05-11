// 2. Crea due tag div con due id diversi. Un div avrà il testo colorato di rosso mentre l’altro di verde. Partendo da un array di 20 numeri (generati come prima), stampiamo nell’id rosso i numeri dispari e in verde i numeri pari;

// creo gli array vuoti

let listNum =[];

let listEven =[];

let listOdd =[];

// avvio un ciclo da 20 dove genero i numeri da 1 a 1000 e li divido pari e dispari

for (let i = 1; i < 21; i++) {
    
    let genNum=Math.floor(Math.random()*1000)+1;
    listNum.push(genNum);
    
    if (genNum %2 === 0) {
        listEven.push(genNum);
    }
    else {
        listOdd.push(genNum);
    }
}

// genero l'output in console

console.log("I numeri sono: " + listNum);
console.log("I numeri pari sono: " + listEven);
console.log("I numeri dispari sono: " + listOdd);

// genero gli output a schermo

let evenPrint = document.getElementById("green").innerHTML;

let oddPrint = document.getElementById("red").innerHTML;

document.getElementById("green").innerHTML = listEven;

document.getElementById("red").innerHTML = listOdd;
