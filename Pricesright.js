var nbuser;
var dé;
var essais = 0;
    function nb_aleatoire(){
        dé = Math.floor(Math.random() * 100) + 1;
    }

    function jeu(){
        essais++;
        var nbuser = document.getElementById('nombreuser').value;
        switch(nbuser){
            case (nbuser < dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est plus";
            break;
            case (nbuser > dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est moins";
            break;
            case (nbuser == dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est GAGNE !";
            break; 
        }
        console.log(essais);
    }
    

