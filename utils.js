function createArray(rowCount, columnCount) {
    var array = new Array();

    // criar array bidimensional
    for (var i = 0; i < rowCount; i++) {
        array.push(new Array()); //em cada linha, preenche com um array
        for (var j = 0; j < columnCount; j++) {
            array[i].push(0); //preenche linha com zeros
        }
    }
    
    return array;
}

function randint(min, max) {
    return min + Math.floor((max - min) * Math.random());
}

function doisDigitos(n){
    if (n < 10) {
        return "0" + n;
    }
    return "" + n;
}

function Timer() {
    this.paused = false;
    this.initial = new Date().getTime();
    this.totalElapsedTime = 0;
    this.clear();
}

/**
 * Timer. Adaptado do campo minado implementado pelo professor Marco Aurélio Lopes Barbosa
 */
Timer.prototype = { 
    clear: function () {
        this.initial = new Date().getTime();
        this.totalElapsedTime = 0;
    },
    
    resume: function () { //funciona como início também
        this.paused = false;
        this.initial = new Date().getTime();//guarda valor int -> numero de segundos
    },

    stop: function () {
        this.paused = true;
        var end = new Date().getTime();
        var elapsedTime = end-this.initial;
        this.totalElapsedTime += elapsedTime;
    },
    
    getTime: function () {
        if (this.paused){
            return this.totalElapsedTime;
        }else{
            var end = new Date().getTime();
            var elapsedTime = end-this.initial;
            return this.totalElapsedTime + elapsedTime;
        }
    },

    getTimeHMS: function () {
        var t = new Date(this.getTime());
        var h = doisDigitos(t.getUTCHours());
        var m = doisDigitos(t.getUTCMinutes());
        var s = doisDigitos(t.getUTCSeconds());
        return h + ":" + m + ":" + s;
    }
}


function Color(r,g,b){
    this.r=r;
    this.g=g;
    this.b=b;
}
function Colors(){
    
    this.colors = [];

    /*x*/this.error = new Color(0,0,0);         //retornado quando houver erro
    /*0*/this.blank = new Color(220,220,230);   //cinza azulado para blocos vazios

    
    //CORES POSSIVEIS PARA AS PECINHAS
    /*1*/this.red    = new Color(180,0,0);
    /*2*/this.green  = new Color(0,180,0);
    /*3*/this.blue   = new Color(0,0,180); 
    /*4*/this.yellow = new Color(180,180,0);
    /*5*/this.purple = new Color(180,0,180);
    /*6*/this.brown = new Color(139,69,19);
    /*7*/this.orange = new Color(255,99,71);
    /*8*/this.cyan = new Color(0, 139, 139);
}
Colors.prototype = {
    random: function(){
        return Math.floor(Math.random()*8)+1;
    },
    getColor: function(n){
        switch(n){
            case 0:return this.blank;
            case 1:return this.red;
            case 2:return this.green;
            case 3:return this.blue;
            case 4:return this.yellow;
            case 5:return this.purple;
            case 6:return this.brown;
            case 7:return this.orange;
            case 8:return this.cyan;
                default:{
                        
                        return this.error;
                }
        }
    }
}

var colors = new Colors();