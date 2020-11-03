$(document).ready(function(){

    // SNACK 1
    // Creare un array di oggetti
    // Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
    // Stampare a schermo la bici con peso minore con handlebars.

    const biciclette = [ 
        {
            nome: 'mountain',
            peso: 0.7
        },
        {
            nome: 'fast',
            peso: 0.5
        },
        {
            nome: 'solid',
            peso: 0.6
        },
        {
            nome: 'terra',
            peso: 0.4
        },
        {
            nome: 'acqua',
            peso: 1
        }
    ];

    let biciclettaLeggera = biciclette[0];
    let pesoLeggero = biciclette[0].peso;

    biciclette.forEach( (element) => {
        console.log('p', pesoLeggero);
        if (element.peso < pesoLeggero) {
            biciclettaLeggera = element;
            pesoLeggero = element.peso;
        }
    }); 
    console.log(biciclettaLeggera);

    const {nome,peso} = biciclettaLeggera;
    $('.container').html(`
        <div>
            <h3>Nome bici leggera: ${nome}</h3>
            <h3>Peso bici leggera: ${peso}</h3>
        </div>
    `);




    // SNACK 2
    //     Partendo da un array di nomi (scelti da voi) creiamo un nuovo array.
    // Chiedere due numeri all'utente per definire la posizione iniziale e finale dal quale estrarre i valori dall'array originale.
    // Il nuovo array deve contenere gli elementi dell'array originale aventi la posizione (indice array)  compresa tra i due numeri inseriti dall'utente.

    const names = ['pietro', 'luca', 'vittorio', 'lucia', 'francesco'];

    // // valore massimo inseribile dall'utente 
    const limit = names.length - 1;
    
    const min = parseInt(prompt('Inserisci valore minimo, tra 0 e ' + limit).trim());
    const max = parseInt(prompt('Inserisci valore massimo, tra ' + min + ' e ' + limit).trim());

    let newNames = [];

    // names.forEach( (element, index) =>  {
    //     // l'index funziona come i, parte da 0 e va fino a names.length
    //     if (min <= index && max >= index) {
    //         newNames.push(element);
    //     }

    // });

    newNames = names.filter( (element, index) =>  {

        // l'index funziona come i, parte da 0 e va fino a names.length
            return min <= index && max >= index ;
        
    });

    console.log(newNames);




    // SNACK 3 
    // Creiamo un array di oggetti (scelti da voi)
    // Creiamo una copia da questo array di partenza e aggiungiamo ai singoli elementi una nuova proprietà position che contiene una lettera casuale.
    // Non dobbiamo modificare l'array iniziale.

    const register = [
        {
            name: 'Pietro',
            age: 28,
        },
        {
            name: 'Francesco',
            age: 30,
        },
        {
            name: 'Laura',
            age: 18,
        },
        {
            name: 'Ciccio',
            age: 20,
        },
        {
            name: 'Giulia',
            age: 26,
        }   
    ];

    let newRegister = [...register].map((person) => {
        return {
            ...person,
            class: randomClass()
        }
    });
    
    console.table(newRegister);


    // funzioni
    function randomClass() {
        const classes = ['a', 'b', 'c', 'd', 'e'];

        let min = 0;
        let max = classes.length - 1;

        index = Math.floor(Math.random() * (max - min + 1) + min );

        let sigle = classes[index];
        
        return sigle ; 
        
    } 



}) //<-- end ready


