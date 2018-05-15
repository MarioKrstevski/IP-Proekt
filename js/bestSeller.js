

function GetSortOrder(prop) {
    return function(a, b) {
        if (a[prop] > b[prop]) {
            return 1;
        } else if (a[prop] < b[prop]) {
            return -1;
        }
        return 0;
    }
}
function ShowBestLiked() {

    var movieListItems = JSON.parse(localStorage.movies);
    movieListItems.sort(GetSortOrder("likes"));
    var dolzina = movieListItems.length;

    document.write("<br>" + movieListItems[dolzina-1].name);

    // for (var item in movieListItems) {
    //     document.write("<br>" + movieListItems[item].name);
    // }

}

ShowBestLiked();