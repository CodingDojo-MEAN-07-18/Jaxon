(function(window){
    'use strict'
    function $Dojo(object){
        var DOMobject = document.getElementById(object)
        $Dojo.alert = function(){
            alert('This is a test message from the $Dojo framework');
        };
        $Dojo(object).click = function(callback){
            DOMobject.addEventListener('click',callback)
            if (DOMobject.click){
                return callback
            }

        }
        $Dojo(object).hover = function(callback){
            DOMobject.addEventListener("mouseover",callback);
            DOMobject.addEventListener("mouseleave", function(){});
        }
        return DOMobject
    }
    if(typeof($Dojo) == undefined){
        window.$Dojo = define$Dojo();
    }
    return $Dojo
})(window);
