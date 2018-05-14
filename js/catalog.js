

    var movieList = JSON.parse(localStorage.movies);

function  populateHTML() {

    $("#catalog").innerHTML = '';


    $.each(movieList,function (key, value) {

        var movieObject = '';

        movieObject+='<div class="object">';
        movieObject+='<div style="display:none" > ' + value.id + ' </div>';
        movieObject+='<img onclick="selectMovie(this)" class="img" src="'+ value.image+'" alt="Movie Image" >';
        movieObject+='<div class="right" >';
        movieObject+='<div style="display:none" > ' + value.id + ' </div>';
        movieObject+='<h1 class="title">'+ value.name +'</h1>';
        movieObject+='<p class="desc">'+ value.description +'</p>';
        movieObject+='<p class="prize">'+ value.price +'</p> ';
        movieObject+=' <button onclick="increaseLikes(this)" >Like</button> <span >'+ value.likes +'</span>';
        movieObject+=' <button onclick="increaseDislikes(this)" >Dislike</button> <span> '+ value.dislikes + '</span>';


        movieObject+='</div>';
        movieObject+='</div>';

        $("#catalog").append(movieObject);

    });


}

populateHTML();

function selectMovie(selectedMovie){

    var movieListItems = JSON.parse(localStorage.movies);
    var currentId= parseInt( selectedMovie.parentNode.childNodes[2].childNodes[0].innerHTML);

    if (movieListItems[currentId].delete == false) {
        movieListItems[currentId].delete = true;
        selectedMovie.style.border = '1px solid red';
    } else {
        movieListItems[currentId].delete = false;
        selectedMovie.style.border = 'none';
    }
    //console.log(movieListItems[currentId].delete);

    localStorage.setItem('movies', JSON.stringify(movieListItems));

}



function increaseLikes(movie) {

    var movieListItems = JSON.parse(localStorage.movies);

    var currentId = parseInt(movie.parentNode.childNodes[0].innerHTML);
    // console.log("Lajkovi se zgolemja", movieListItems[currentId].likes);
    movie.parentNode.childNodes[7].innerHTML = ++movieListItems[currentId].likes;

    localStorage.setItem('movies', JSON.stringify(movieListItems));
}

function  increaseDislikes(movie){

    var movieListItems = JSON.parse(localStorage.movies);

    var currentId = parseInt(movie.parentNode.childNodes[0].innerHTML);
    // console.log("Lajkovi se zgolemja", movieListItems[currentId].dislikes);
    movie.parentNode.childNodes[11].innerHTML = ++movieListItems[currentId].dislikes;

    localStorage.setItem('movies', JSON.stringify(movieListItems));
}


function deleteSelectedMovies() {

        var movieListItems = JSON.parse(localStorage.movies);

        console.log(movieListItems);

        var todel = [];

        for ( var i=0 ;i<  movieListItems.length ;i++){

            if(movieListItems[i].delete === true ){
                todel.push(i);
            }
        }
        console.log("The Deleted ID's should be ", todel);

        // for ( var j=todel.length ;j>0 ;j--){
        //             movieListItems.splice(todel[j]-1,1);
        //             todel.splice(j,1);
        // }
        // console.log(movieListItems);
        // console.log(todel);
        //

        for ( var j=0 ;j<  movieListItems.length ;j++){

            if(movieListItems[j].delete === true ){
                movieListItems.splice(j,1);
            }
        }

        for ( var z=0 ; z <  movieListItems.length ;z++) {
            movieListItems[z].id = z;
        }
        console.log(movieListItems);

        // If you uncomment this when you delete items ,it will really delete them from the Local Storage
        // For now we are deleting in a variable to keep things safe and don't lose objects
        localStorage.setItem('movies', JSON.stringify(movieListItems));
        //


        location.reload();
}



