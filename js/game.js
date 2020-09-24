class Game{
    constructor(){}

    //to read gameState from the database
    getState(){
        var gsref = database.ref("gameState");
        gsref.on("value", function(data){
            gameState = data.val();
        }); //local function - created & used simultaneously
    }
    
    //to write gameStates into the database
    update(state){
        database.ref("/").update({
            gameState: state
        });
    }

    async start(){
        if(gameState===0){
            //New player object created
            player = new Player();
            var pcref = await database.ref("playerCount").once("value");
            //Read the player Count from the database
            if(pcref.exists()){
                playerCount = pcref.val();
                player.getCount();
            }
            

            //New form object
            form = new Form();

            //form display
            form.display();

        }
    }

    play(){
        //form gets hidden
        form.hide();
        textSize(30);
        text("Game Start",120,100);
        Player.getPlayerInfo();
        if(allPlayers !== undefined) {
            var text_pos = 130;
            //text(player name : player distance)
            for(var i in allPlayers) {

                //Identifying currently active player
                if(i === "player" + player.index){
                    fill("red");
                }
                else{
                    fill(0);
                }

                text_pos = text_pos + 20;
                textSize(15);
                text(allPlayers[i].name + ": " + allPlayers[i].distance, 120, text_pos);
            }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance+50;
            player.update();   
        }

    }
}

/*
update()
- Refers to the main database inside which gameState is created - "/"


index = 0, length-1

for(var i = 0; i < array.length; i++){}

for/in statement

for(var i in array){}
*/



