
var turno = 1;
var counter = 0;
let array = [[200, 201, 202, 203, 204, 205],[206, 208, 209, 210, 211, 212],[214, 215, 216, 217, 218, 219],[221, 222, 223, 224, 225, 226],[228, 229, 230, 231, 232, 233],[235, 236, 237, 238, 239, 240],[270, 277, 288, 299, 287, 278]];
var x = 0;
var y = 0;

function giocata(bottone){
    var position = 0;
    bottone -= 1;
    if(counter != -1){
        disposizione(bottone);
        for(var i = x; i > y; i--){
        if(array[bottone][position] != 1 && array[bottone][position] != 2){
            if(turno == 1){
                document.getElementById(i).style.backgroundColor = 'yellow';
                turno = 2;
                array[bottone][position] = 1;
                document.getElementById('messaggio').innerHTML = "E' IL TURNO DEL GIOCATORE 2";
            }else{
                document.getElementById(i).style.backgroundColor = 'red';
                turno = 1;
                array[bottone][position] = 2;
                document.getElementById('messaggio').innerHTML = "E' IL TURNO DEL GIOCATORE 1";
            }
            break;
        }
        position++;
        }
        counter++;
    }
        if(counter == 42){
            document.getElementById('messaggio').innerHTML = "PAREGGIO";
            counter = -1;
        }

        vittoria = condizionevittoria();
        if( vittoria == 1){
            document.getElementById('messaggio').innerHTML = "HAI VINTO!" ;
            counter = -1;
        }
}

function disposizione(bottone){
    if(bottone == 0){
        x = 6;
        y = 0;
    }else if(bottone == 1){
        x = 12;
        y = 6;
    }else if(bottone == 2){
        x = 18;
        y = 12;
    }else if(bottone == 3){
        x = 24;
        y = 18;
    }else if(bottone == 4){
        x = 30;
        y = 24;
    }else if(bottone == 5){
        x = 36;
        y = 30;
    }else if(bottone == 6){
        x = 42;
        y = 36;
    }
}

function condizionevittoria(){
    for(var i = 0; i < 7; i++){
        for(var j = 0; j < 6; j++){
            if(array[i][j] == array[i][j+1] && array[i][j+1] == array[i][j+2] && array[i][j+2] == array[i][j+3]){
                return 1;
            }else
            if(array[i][j] == array[i+1][j] && array[i+1][j] == array[i+2][j] && array[i+2][j] == array[i+3][j]){
                return 1;
            }else
            if(array[i][j] == array[i+1][j+1] && array[i+1][j+1] == array[i+2][j+2] && array[i+2][j+2] == array[i+3][j+3]){
                return 1;
            }
        }
    }
    return 0;
}