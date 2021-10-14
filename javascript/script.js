function message() {
    alert("Welcome to Kupop!  This site is currently underconstruction, but please feel free to have a look around!");
}
$.carousel('pause').carousel({

});


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
    constructor(name, role, focus, caster, ranged){
        super(name, role, focus);
        this.caster = true,
        this.ranged = true;

    }
}


//DPS variables
const redMage = new DPS("Red Made", "DPS", "Support", true, true );

//Tank variables
const paladin = new Job("Paladin", "Tank", "Support")

//Healer variables

