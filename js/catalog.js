$(document).ready(function () {
    $.getJSON("./json/database.json",function(data){
        var movieObject = '';

        $.each(data,function (key, value) {


            movieObject+='<div class="object">';
            movieObject+='<img class="img" src="'+ value.image+'" alt="Movie Image" >';
            movieObject+='<div class="right" >';
            movieObject+='<h1 class="title">'+ value.name +'</h1>';
            movieObject+='<p class="desc">'+ value.description +'</p>';
            movieObject+='<p class="prize">'+ value.price +'</p> ';
            movieObject+=' <button>Like</button> <span>'+ value.likes +'</span>';
            movieObject+=' <button>Dislike</button> <span> '+ value.dislikes + '</span>';

            movieObject+='</div>';
            movieObject+='</div>';


        });
        $("#catalog").append(movieObject);

    })

});