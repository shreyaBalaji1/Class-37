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
        car1 = createSprite(100,200);
        car2 = createSprite(300,200);
        car3 = createSprite(500,200);
        car4 = createSprite(700,200);
        cars = [car1, car2, car3, car4];
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
            var index = 0;
            var x = 0, y;
            for(var i in allPlayers) {
                
            
                /*
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
                */

                index++;
                x = x+200;
                y = displayHeight-allPlayers[i].distance;

                cars[index-1].x = x; 
                cars[index-1].y = y;
                
                //Currently active car ---> Colour of the car
                if(index === player.index) {
                    cars[index-1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index-1].y;
                }
                
            }
        }
    
        if(keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance = player.distance+50;
            player.update();   
        }
        drawSprites();
    }
}

/*
update()
- Refers to the main database inside which gameState is created - "/"


index = 0, length-1

for(var i = 0; i < array.length; i++){}

for/in statement

for(var i in array){}


for(var index=0; index < 4; index++){
    //carssssss
}
*/



