var database;
var gameState = 0;
var playerCount;
var form, player, game;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");
  
}



/*
OBJECT ORIENTED PROGRAMMING (OOP)

3 objects:
    1. Form: 
        - input box
        - play button
        - button is pressed ---> player's name should be registered in the database
            - new player object should be created
    
    2. Player:
        - Information
            - name
            - rank
            - distance
        - Read & write player info to the database - name, player count

    3. Game:
        - gameStates
        WAIT (0) - display the form
        PLAY (1) - play the game
        END (2)
*/