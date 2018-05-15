$(document).ready(function(){
    $("#login").click(function(){
        $(".hidden").css("display","block");
    });

    document.cookie ="userName=152061; expires=Tue, 28 June 2018 12:00:00 UTC";

        //"name=filip;username=152061;pw=finki;expires=Tue, 28 June 2018 12:00:00 UTC";

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


