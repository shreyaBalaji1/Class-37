class Player{
    constructor(){}
    
    //read playerCount from database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value", function(data) {
            playerCount = data.val();
        });
    }

    //writing playerCount into database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    //writing name into the database
    update(Name){
        var playerIndex = "player" + playerCount;
        database.ref(playerIndex).set({
            name: Name
        });
    }
}