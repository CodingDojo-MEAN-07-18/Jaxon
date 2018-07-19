var _= {
    map: function(array,callback){
        const results = [];
        for (let index = 0; index < array.length; index++){
            results.push(callback(array[index],index));
        }
        return results
    },

    reduce: function(array,callback,memo){
        const results = [].concat(array)
        if (memo === undefined){
            memo = results.pop();
        }
        for (let index = 0; index < array.length;index++){
            memo = callback(memo, array[index], index);
        }
        return memo
    },
    
    find: function(array,callback){
        for (let index = 0; index < array.length; index++){
            if (callback(array[index]), index){
                return array[index]
            }
        }
    },

    filter: function(array,callback){
        const results = [];
        for (let index = 0; index < array.length; index++){
            if (callback(array[index],index)){
                results.push(array[index]);
            }
        }
        return results
    },
     
    reject: function(array,callback){
        const results = [];
        for (let index = 0; index < array.length; index++){
            if(!callback(array[index],index)){
                results.push(array[index]);
            }
        }
        return results
    },
}

var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
console.log(evens); // if things are working right, this will return [2,4,6].