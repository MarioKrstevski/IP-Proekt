$(document).ready(function($) {
    $(document).on('submit', '', function(event) {
        event.preventDefault();

        alert('page did not reload');
    });
});



function addObject(form){


    var movieListItems = JSON.parse(localStorage.movies);

    console.log(movieListItems);

    var newMovie = {
        "name":form.Name.value,
        "image":form.ImageUrl.value,
        "description":form.Description.value,
        "price":form.Prize.value,
        "likes":0,
        "dislikes":0,
        "delete":false,
        "id": movieListItems.length

    };


    console.log(newMovie);


    movieListItems.push(newMovie);

    console.log(movieListItems);



    localStorage.setItem('movies', JSON.stringify(movieListItems));



}




