$(document).ready(function(){
    $("#login").click(function(){
        $(".hidden").css("display","block");
    });

    

});

function loadJSON( toLocalStorage, fromUrl){
    if (localStorage[toLocalStorage])
    { console.log("Vekje postoi vo LS");  }
    else {
        $.getJSON(   fromUrl   , function(data) {
            localStorage[toLocalStorage] = JSON.stringify(data);
            console.log("JSON added to LS");
        });
    }
}

loadJSON( 'movies','./json/database.json');



