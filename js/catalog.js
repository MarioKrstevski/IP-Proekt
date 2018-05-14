

    var movieList = JSON.parse(localStorage.movies);

function  populateHTML() {
    var movieObject = '';

    $.each(movieList,function (key, value) {

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


    });
    $("#catalog").append(movieObject);

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



