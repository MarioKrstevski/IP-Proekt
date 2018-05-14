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



function deleteSelectedMovies() {

    var movieListItems = JSON.parse(localStorage.movies);

    console.log(movieListItems);

    var todel = [];

    for ( var i=0 ;i<  movieListItems.length ;i++){

            if(movieListItems[i].delete === true ){
                todel.push(i);
            }
    }
    console.log(todel);

    for ( var j=todel.length ;j>0 ;j--){
                movieListItems.splice(todel[j],1);
    }
    console.log(movieListItems);

    for ( var z=0 ; z <  movieListItems.length ;z++) {
        movieListItems[z].id = z;
    }
    console.log(movieListItems);

    // If you uncomment this when you delete items ,it will really delete them from the Local Storage
    // For now we are deleting in a variable to keep things safe and don't lose objects
    // // //localStorage.setItem('movies', JSON.stringify(movieListItems));
    //
}
