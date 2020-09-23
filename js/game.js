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

    start(){
        if(gameState===0){
            //New player object created
            player = new Player();

            //Read the player Count from the database
            player.getCount();

            //New form object
            form = new Form();

            //form display
            form.display();

        }
    }
}

/*
update()
- Refers to the main database inside which gameState is created - "/"
*/



