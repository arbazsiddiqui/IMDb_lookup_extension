/**
 * Created by siddiqui on 02-07-2015.
 */
chrome.contextMenus.create({
    'title' : 'Search IMDB for "%s"',
    'contexts' : ['selection'],
    'onclick' : function(inf) {
        name = inf.selectionText;
        var url = "http://www.omdbapi.com/?t="+name+"&tomatoes=true";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, false);
        xhr.send();

        console.log(xhr.status);
        console.log(xhr.statusText);
        var imdb = xhr.response;

        var json = JSON.parse(imdb);

        var rating ="Title : "+ json.Title + "\n" + "\n"
            + "IMdb Rating : " +  json.imdbRating + "\n" + "\n"
            + "Genre : " +  json.Genre + "\n" + "\n"
            + "Year : " + json.Year + "\n" + "\n"
            + "Cast : " + json.Actors + "\n" + "\n"
            + "Runtime : " + json.Runtime + "\n" + "\n"
            + "Rotten Tomato Rating : " + json.tomatoRating + "\n" + "\n"
            + "Plot : " + json.Plot + "\n";

        alert(rating);
        //chrome.tabs.create({url: 'http://www.imdb.com/find?q=' + inf.selectionText});
    }
});

