class Form{
    constructor(){}

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        var input = createInput("Name");
        input.position(130, 160);

        var button = createButton("Play");
        button.position(250, 200);

        var greeting = createElement("h3");
        button.mousePressed(function() {
           input.hide();
           button.hide();
           var name = input.value(); 
           playerCount++;
           
            //update name in the database
            player.update(name);

            //update PC in the database
            player.updateCount(playerCount);

            greeting.html("Hello "+ name);
            greeting.position(130,160);
        });
    }
}

/*
HTML 
1. Head - libraries/sources
2. Body - displays content

BODY:
 Elements
 1. h1, h2, h3: Headings of different sizes
 2. Input : from the user
 3. Button: play button

 DOCUMENT OBJECT MODEL (DOM) - p5 Dom Library

Title - "car Racing Game"

- create an h2 element
- change the html content
- position
*/