function Ninja(name){
    var self = this;
    var strength = 3;
    var speed = 3;
    self.name = name;
    self.health = 100;
    this.sayname = function(){
        console.log('My ninja name is '+ this.name)
    }
    this.showStats = function(){
        console.log('Name: '+ this.name + " Health: "+ this.health + " Speed: " + parseInt(speed) + " Strength: " + parseInt(strength));
    } 
    this.drinkSake = function(){
        self.health += 10;
    }
}

var jaxon = new Ninja('Jaxon');
jaxon.sayname();
jaxon.showStats();
jaxon.drinkSake();
jaxon.drinkSake();
jaxon.showStats();

var isa = new Ninja("Isa");
isa.sayname();
isa.showStats();
isa.drinkSake();
isa.showStats();