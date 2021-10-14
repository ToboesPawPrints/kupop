function message() {
    alert("Welcome to Kupop!  This site is currently underconstruction, but please feel free to have a look around!");
}
$.carousel('pause').carousel({

});


// Name is the name of the job
// Type is support, DPS, or tanky
// Style is ranged or melee 

class DPS {
    constructor(name, type, style) {
        this.name = name,
        this.type = type,
        this.style = style
    }
    /*see(){
        console.log(`The class is ${this.name} and is a ${this.type} and plays with ${this.style}.`)
    }*/
};

class Tank {
    constructor(name, type, style) {
        this.name = name,
        this.type = type,
        this.style = style
    }
}


const redMage = new DPS("Red Made", "Support", "Ranged");
const paladin = new Tank("Paladin", "Support", "Melee")

