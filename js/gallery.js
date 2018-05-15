
var movieList = JSON.parse(localStorage.movies);
var movieToShow = 0;

function displayMovie(param) {


    var movieStuff = '';

    movieStuff+='<div class="singleMovie">';

        movieStuff+='<div class="la" >';
        movieStuff+='<img onclick="previous()" src="./images/la.png" >';
        movieStuff+='</div>';

        movieStuff+='<div class="movieContent" >';

            movieStuff+='<h1 onclick="SelectSM(this)" >'+ movieList[param].name +'</h1>';
            movieStuff+='<img src="'+ movieList[param].image +'" alt="Golema Slika" >';

            movieStuff+='<div class="txt" >';

            movieStuff+='<p class="first" >'+ movieList[param].description  +'</p>';
            movieStuff+='<p class="second" >'+ movieList[param].price +'</p>';

            movieStuff+='<div class="third" >';

            movieStuff+='<div id="idfinder" style="display: none" >' + movieList[param].id  + '</div>';


                movieStuff+='<div>';
                movieStuff+=' <button onclick="increaseSMLikes(this)" >Like</button> <span>'+ movieList[param].likes +'</span>';
                movieStuff+='</div>';

                movieStuff+='<div>';
                movieStuff+=' <button onclick="increaseSMDislikes(this)" >Dislike</button> <span> '+ movieList[param].dislikes + '</span>';
                movieStuff+='</div>';
            movieStuff+='</div>';


            movieStuff+='</div>';

        movieStuff+='</div>';

        movieStuff+='<div class="ra" >';
        movieStuff+='<img onclick="next()" src="./images/ra.png" >';
        movieStuff+='</div>';




    movieStuff+='</div>';





    $("#gallery").removeData();
    $("#gallery").html(movieStuff);





}

displayMovie(movieToShow);


function next() {

    if (movieToShow >= movieList.length-1)
    {
        return;
    } else
    displayMovie(++movieToShow);

    console.log(movieToShow);

}

function previous(){
    if (movieToShow <= 0)
    {
        return;
    } else
        displayMovie(--movieToShow);

    console.log(movieToShow);

}

$(document).keydown(function(e) {
    switch(e.which) {
        case 37:
            previous(); // left
            break;

        case 39:
            next(); // right
            break;

        default:
            return; // exit this handler for other keys
    }
});

function increaseSMLikes(clickedMovie){

        var movieListItems = JSON.parse(localStorage.movies);

        var currentId= parseInt(clickedMovie.parentNode.parentNode.firstChild.innerHTML);

        console.log(currentId);
        clickedMovie.parentNode.childNodes[3].innerHTML=++movieListItems[currentId].likes;

        localStorage.setItem('movies', JSON.stringify(movieListItems));

}

function increaseSMDislikes(clickedMovie){

    var movieListItems = JSON.parse(localStorage.movies);

    var currentId= parseInt(clickedMovie.parentNode.parentNode.firstChild.innerHTML);

    console.log(currentId);

    clickedMovie.parentNode.childNodes[3].innerHTML=++movieListItems[currentId].dislikes;

    localStorage.setItem('movies', JSON.stringify(movieListItems));

}

function SelectSM(sm) {

    var movieListItems = JSON.parse(localStorage.movies);

    console.log(movieListItems[movieToShow].id);

    if (movieListItems[movieToShow].delete === false) {
        movieListItems[movieToShow].delete = true;
        sm.style.color = 'red';
    } else {
        movieListItems[movieToShow].delete = false;
        sm.style.color = 'black';
    }

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