class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name)
        return this
    }
    showStats(){
        console.log("Name: "+this.name+" Health: "+this.health+" Speed: "+this.speed+" Strength: "+this.strength)
        return this
    }
    drinkSake(){
        this.health += 10;
        return this
    }
}
var ninja = new Ninja("JIZA");
ninja.sayName().drinkSake().showStats();

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 210;
        this.speed = 10;
        this.strength = 10;
    }
    speakWisdom(){
        console.log('What one programmer can do in a month, two programmers can do in two months');
        return this
    }
}

sensei = new Sensei('Master Splinter');
sensei.showStats().sayName().speakWisdom().drinkSake().showStats()