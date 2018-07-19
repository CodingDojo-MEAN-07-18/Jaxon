class Card{
    constructor(suit,value,number){
        this.suit = suit;
        this.value = value;
        this.numericalValue = number;
    }
    show(){
        console.log('Suit: '+this.suit+" Value: "+this.value+" Numerical Value: "+this.numericalValue)
    }
}
class Deck{
    constructor(){
        var cards = ["Hearts","Diamonds","Spades","Clubs"];
        var values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
        var array = [];
        for (let n = 0; n<cards.length; n++) {
            for (let i = 0; i<13;i++){
                array.push(new Card(cards[n],values[i],i));
            }
        }
        this.deck = array;   
    }
    shuffle(){
        //Fisher Yates Shuffle
        var array = this.deck;
        var i = 0, j = 0, temp = null;
        for (i = array.length - 1; i > 0; i -= 1) {
            j = Math.floor(Math.random() * (i + 1))
            temp = array[i]
            array[i] = array[j]
            array[j] = temp
        }
        return this
    }
    reset(){
        var cards = ["Hearts","Diamonds","Spades","Clubs"];
        var values = ['Two','Three','Four','Five','Six','Seven','Eight','Nine','Ten','Jack','Queen','King','Ace'];
        var array = [];
        for (let n = 0; n<cards.length; n++) {
            for (let i = 0; i<13;i++){
                array.push(new Card(cards[n],values[i],i+1));
            }
        }
        this.deck = array;   
    }
    deal(){
        var i = Math.floor(Math.random()*(this.deck.length - 1));
        var card = this.deck[i];
        this.deck.pop();
        return card;
    }
}
a = new Deck();
console.log(a.deck)
a.shuffle();
console.log('');
console.log(a.deck);
console.log('');
a.reset();
console.log(a.deal());
console.log(a.deal());
console.log(a.deal());
console.log(a.deck.length);
class Player extends Deck{
    constructor(name){
        super();
        this.shuffle();
        this.name = name;
        this.hand =[];
        for (let i = 0; i < 5; i++){
            this.hand.push(this.deal());
        }
    }
    draw(){
        this.hand.push(this.deal());
        return this
    }
    discard(index){
        var temp = this.deck[index];
        var i = this.hand.length;
        this.hand[index] = this.hand[i-1];
        this.hand[i-1] = temp;
        this.hand.pop();
        return this;
    }
}

var p = new Player("Josh");
console.log(p.hand.length);
console.log(p.deck.length);
p.discard();
console.log(p.hand.length);
p.draw();
console.log(p.hand.length);