(function(window){
    var bye={};
    bye.speak=function(name){
        console.log("Bye "+name);
    };
    window.bye=bye;
})(window);