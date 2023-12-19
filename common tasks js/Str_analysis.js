      
const path = "/users/download/index.html"

function isHtml(str)  {
    if (str.slice(-5) == ".html") {
        return console.log(true);
    } else {return console.log(false);};
}

isHtml(path);
     