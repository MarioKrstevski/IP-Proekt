$(document).ready(function($) {
    $(document).on('submit', '', function(event) {
        event.preventDefault();

        alert('page did not reload');
    });
});


var jsonList = (function() {
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
        console.log(json);
        return json;
    })();

    console.log(jsonList);

function addObject(form){

    var jsonElement = {
        "name":form.Name.value,
        "image":form.ImageUrl.value,
        "description":form.Description.value,
        "price":form.Prize.value,
        "likes":0,
        "dislikes":0,
        "delete":false
    };


    jsonList.push(jsonElement);



    console.log(jsonList);
    var text1 = JSON.stringify(jsonElement);
    console.log(text1);

}




