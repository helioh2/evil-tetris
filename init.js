            function init(){
                var game = new Game();
                
                var screen = new Screen(
                    document.getElementById("area"),
                    document.getElementById("score"),
                    document.getElementById("nextpiece"),
                    document.getElementById("timer"),
                    document.getElementById("level"),
                    game
                    );
                game.setScreen(screen);

                var keyboard = new Keyboard(game);
                document.onkeydown = function(e){keyboard.downkeys(e.keyCode);}
                document.onkeyup = function(e){keyboard.upkeys(e.keyCode);}
                
                document.body.style.overflow='hidden';//bloqueia barra de rolagem
                
                screen.printClean();
                screen.printStartImage();

                var inited_once = false;
                document.getElementById("area").onclick = function(){
                    if(!inited_once || game.over){
                        game.startGame();
                        inited_once = true;
                    }
                    
                };
            }
			
			document.addEventListener('DOMContentLoaded', init) //function () {
				//document.addEventListener('load', init, false);
		
			//});
