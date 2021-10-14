/*function message() {
    alert("Welcome to Kupop!  This site is currently underconstruction, but please feel free to have a look around!");
}
$.carousel('pause').carousel({

});
*/

// Name is the name of the job
// Role is support, DPS, or tanky
// Focus is what class is good at. Shield, multi-target, etc.

class Job {
    constructor(name, role, focus){
        this.name = name,
        this.role = role,
        this.focus = focus
    }
};

//

class DPS extends Job {
    constructor(name, role, focus){
        super(name, role, focus);
        this.caster = true,
        this.ranged = true;
    }
    see() {
        console.log(`${this.name} is a ${this.role} and it focuses on ${this.focus}.  ${this.caster}`)
    }
}


//DPS variables
const redMage = new DPS("Red Made", "DPS", "Support", true, true );

//Tank variables
const paladin = new Job("Paladin", "Tank", "Support")

//Healer variables

