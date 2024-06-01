(function(){
    var names=["Henry","Jason","Hales","Joe","Jonny","Harry","Hetmyer"];
    for (var i=0;i<names.length;i++){
        var firstcharacter=names[i].charAt(0).toLowerCase();
        if(firstcharacter==="j"){
            bye.speak(names[i]);
        }else{
            hello.speak(names[i]);
        }
    }
})();