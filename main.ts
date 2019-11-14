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
    position = 200;
    square.style.bottom = position + "px";
    document.getElementById("fly").addEventListener("click", fly)
}

const falls = (event) => { 
    const startingBottom = square.style.bottom;
    const getNumber = parseInt(startingBottom); 
    square.style.bottom = (getNumber - 20) + "px";
}

const fly = (event) => {
    const startingBottom = square.style.bottom;
    const getNumber = parseInt(startingBottom); 
    square.style.bottom = (getNumber + 10) + "px";
    // falls(event);
} 


//every ... two methods that run at the same time 
// - one to jump up and one to jump down 
  
start();

// pipes 

// collision

// call game start
 