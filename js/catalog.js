$(document).ready(function () {
    $.getJSON("./json/database.json",function(data){
        var movieObject = '';

        $.each(data,function (key, value) {


            movieObject+='<div class="object">';
            movieObject+='<div style="display:none" > ' + value.id + ' </div>';
            movieObject+='<img class="img" src="'+ value.image+'" alt="Movie Image" >';
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

    })

});

var json = (function() {
    var json = null;
    $.ajax({
        'async': false,
        'global': false,
        'url': "./json/database.json",
        'dataType': "json",
        'success': function (data) {
            json = data;
        }
    });
    return json;
})();

json[0].name = "Novo ime";

console.log(json[0].name);

function increaseLikes(movie){

    var currentId= parseInt(movie.parentNode.childNodes[0].innerHTML);
    json[currentId].likes++;
    movie.parentNode.childNodes[7].innerHTML = json[currentId].likes;

    console.log(json[currentId].likes);
}

function  increaseDislikes(movie){

    var currentId= parseInt(movie.parentNode.childNodes[0].innerHTML);
    json[currentId].dislikes++;
    movie.parentNode.childNodes[11].innerHTML = json[currentId].dislikes;

    console.log(json[currentId].dislikes);
}

