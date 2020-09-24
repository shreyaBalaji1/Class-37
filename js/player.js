class Player{
    constructor(){
        this.name = null;
        this.index = null;
        this.distance = 0;
    }
    
    //read playerCount from database
    getCount(){
        var pcref = database.ref("playerCount");
        pcref.on("value", (data)=> {
            playerCount = data.val();
        });
    }

    //writing playerCount into database
    updateCount(count){
        database.ref("/").update({
            playerCount: count
        });
    }

    //writing name & distance into the database
    update(){
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            distance: this.distance
        });
    }

    //to read all the information of all players and record it in allPlayers
    static getPlayerInfo(){
        var piref = database.ref("players");
        piref.on("value", (data)=> {
            allPlayers = data.val();
         });
    }
}

/*
Static functions
    - Common functions for all the objects
    - Not attached to any particular object
    - Not called by the objects
    - Called by the class
*/