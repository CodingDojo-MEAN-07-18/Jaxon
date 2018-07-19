function fib(){
    var array = [0];
    console.log('1');
    function nacci(){
        if (array.length == 1){
            newValue = 1;
            array.push(newValue)
            return array
        }
        else{
            var length = array.length;
            newValue = add(array[length-1],array[length-2]);
            console.log(newValue);
            array.push(newValue);
            return array
        }
    }
    return nacci
}
function add(num1,num2){
    return num1 + num2
}

var fibCounter = fib();
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()
fibCounter()