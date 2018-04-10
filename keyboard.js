function Keyboard(game){
    this.game=game;
}
Keyboard.prototype = {
    
    downkeys: function(keycode){
        if(!this.game.over){
            if(this.game.paused){
                if(keycode==13) this.game.pause(); //despausar o jogo
            } else switch(keycode){
                case 13: //enter
                    this.game.pause();   //pausar o jogo
                    break;
                case 32: //space
                    this.game.tumble(); //despencar pecinha
                    break;
                case 37: //left
                    this.game.left();    //mover para a esquerda
                    break;
                case 38: //up
                    this.game.rotate();  //rotacionar
                    break;
                case 39: //right
                    this.game.right();   //mover para a direita
                    break;
                case 40: //down
                    this.game.holdDown();    //mover para baixo
                    break;
            }
        }
    },
    upkeys: function(keycode){
        switch(keycode){
            case 40: //down
                this.game.releaseDown();
                break;
        }
    }    
}
