// 1. crea un array che parte vuoto ma viene riempito automaticamente di 10 numeri casuali da 1 a 1000 generati dal pc, possono esserci anche doppioni;


// creo un evento sul bottone

document.getElementById("btn_start").addEventListener("click",
function() {
    
    // creo un array vuoto

    let listNum =[];

    // avvio un ciclo da 10 dove genero i numeri da 1 a 1000
    
    for (let i = 1; i < 11; i++) {
        
        genNum=Math.floor(Math.random()*1000)+1;
        
            listNum.push(genNum);
           
        }

        // genero l'output

        console.log(listNum);

        document.getElementById("numbers").innerHTML = " Ecco la tua stringa di 10 numeri da 1 a 1000: " + listNum;
        
    }

);