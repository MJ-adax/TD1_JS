

// fonction genere nb aleatoire

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

// garder nb aleatoire genere dans une variable
var nbAleatoire = getRandomInt(100);
 
   
// fonction definit si nbUser plus petit ou plus grand
function justePrix() {
    
    var nbUser = document.getElementById('nbUser').value;
    console.log(nbUser);

    console.log(nbAleatoire);
    switch (nbUser) {
        case (nbUser < nbAleatoire ? nbUser : null) :
        document.getElementById('textarea').innerHTML= "plus grand";
        break;
    
        case (nbUser > nbAleatoire ? nbUser : null) :
        document.getElementById('textarea').innerHTML= "plus petit";
        break;
    
        case (nbUser == nbAleatoire ? nbUser : null) :
        document.getElementById('textarea').innerHTML= "Champion";
        break;
        default:
        console.log('default');
    }
}

//(condition ? si true return; si false return)
        
// instruction nombre aleatoire
// Math.floor(Math.random() * 101);