const square = document.getElementById("raksu");
let position;

// get raksu to move up and down when i press the button 
// keep the dog in place whilst the background is moving 
// need to start the game when the user presses the button 

class Raksu { 
    isDead: boolean = false;
    gravity = 0.05; 

    dies() { 
        //when collides
    }

    collides() { 
        // collides either with a pole or with the ground??
    }
}



const start = () => { 
    position = 50;
    square.style.top = position + "px";
    document.getElementById("fly").addEventListener("click", fly)
}

const fly = (distance) => square.style.top = distance + "px";

start();

// pipes 

// collision

// call game start
 