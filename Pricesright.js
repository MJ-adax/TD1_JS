var nbuser;
var dé;
    function nb_aleatoire(max){
        var max = 100;
        dé = Math.floor(Math.random() * max) + 1;
    }

    function jeu(){
        var essais = 0;
        var nbuser = document.getElementById('nombreuser').value;
        switch(nbuser){
            case (nbuser < dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est plus";
                essais = essais++;
                console.log(essais);
            break;
            case (nbuser > dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est moins";
                essais = essais++;
                console.log(essais);
            break;
            case (nbuser == dé ? nbuser : null) :
                document.getElementById('textarea').innerHTML="C'est GAGNE !";
                document.getElementsByClassName('td1').innerHTML=dé;
            break;
        }
        while (nbuser != dé){
            essais++;
            console.log(essais);
        }
        else {
            essais = 
        }
    }
    

