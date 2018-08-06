class Bike {
    miles: number;
    constructor(public price:number, public max_speed:string){
        this.miles = 0;
    }
    display_info = function(){
        console.log("Price: " +this.price+ " Max speed: " +this.max_speed+" Miles Ridden "+this.miles)
        return this
    } 
    ride = function(){
        console.log('Riding...')
        this.miles += 5;
        return this
    }
    reverse = function(){
        console.log("Reversing...")
        if (this.miles >= 5){
            this.miles -= 5;
        }
        else{
            this.miles = 0;
        }
        return this
    }
}

var bike_1 = new Bike(300,'30mph');
var bike_2 = new Bike(400,'40mph');
var bike_3 = new Bike(666,'666mph');
bike_1.ride().ride().ride().reverse().display_info();
bike_2.ride().ride().reverse().reverse().display_info();
bike_3.reverse().reverse().reverse().display_info();
