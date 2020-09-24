class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play");
        this.greeting = createElement("h3");
    }

    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }

    display(){
        var title = createElement("h2");
        title.html("Car Racing Game");
        title.position(130, 0);

        this.input.position(130, 160);

        this.button.position(250, 200);

        this.button.mousePressed(()=> {
           this.input.hide();
           this.button.hide();
           player.name = this.input.value(); 
           playerCount++;
           player.index = playerCount;
            //update name in the database
            player.update();

            //update PC in the database
            player.updateCount(playerCount);

            this.greeting.html("Hello "+ player.name);
            this.greeting.position(130,160);
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