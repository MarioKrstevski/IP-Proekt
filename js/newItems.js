$(document).ready(function($) {
    $(document).on('submit', '', function(event) {
        event.preventDefault();

        alert('page did not reload');
    });
});
function addObject(form){

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



    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
        console.log("success downlaod function");
    }


    var jsonElement = {
        "name":form.Name.value,
        "image":form.ImageUrl.value,
        "description":form.Description.value,
        "price":form.Prize.value,
        "likes":0,
        "dislikes":0,
        "delete":false
    };
     var text1 = JSON.stringify(jsonElement);

    document.getElementById('output').innerHTML=text1;

    console.log(text1);

    jsonList.append(jsonElement);
    console.log("success");
    var text = JSON.stringify(json);
    download(text, 'json.json', 'text/plain');

    }


