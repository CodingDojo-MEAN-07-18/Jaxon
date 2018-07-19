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
    this.punch = function(myObj){
        if(!myObj){
            console.log('Swing and a Miss. Target does not exist')
        }
        else {
            console.log(myObj.name + "was punched by "+this.name+" and lost 5 health")
            myObj.health -= 5;
        }
    }
    this.kick = function(myObj){
        if(!myObj){
            console.log('Swing and a Miss. Target does not exist')
        }
        else {
            console.log(myObj.name + "was kicked by "+this.name+" and lost 10 health")
            myObj.health -= 10;
        }
    }
    
}
var jaxon = new Ninja('Jaxon');
jaxon.sayname();
jaxon.showStats();
var isa = new Ninja("Isa");
isa.sayname();
isa.showStats();
isa.punch(jaxon);
jaxon.showStats();
jaxon.kick(isa);
isa.showStats();
blue = 0;
isa.kick(blue);
