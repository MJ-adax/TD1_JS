var dé;
    function nb_aleatoire(max){
        return dé = Math.floor(Math.random() * max) + 1;
    }
console.log(nb_aleatoire(100));


    function jeu(){
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
    }
