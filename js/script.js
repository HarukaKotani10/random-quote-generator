/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

let quotes = [
              {quote:   "The greatest glory in living lies not in never falling, but in rising every time we fall.", 
               source:  "Nelson Mandela"},
              {quote:   "Whoever is happy will make others happy too.", 
               source:  "Anne Frank",
               citation:"The Diary of a Young Girl",
               year:    "1929-1945"}, 
              {quote:   "Tell me and I forget. Teach me and I remember. Involve me and I learn.", 
               source:  "Benjamin Franklin"}, 
              {quote:   "The only impossible journey is the one you never begin.", 
               source:  "Tony Robbins"}, 
              {quote:   "I find that the harder I work, the more luck I seem to have.", 
               source:  "Thomas Jefferson"}
            ];
/***
 * `getRandomQuote` function
***/

function getRandomQuote(){
    var randomNum = Math.floor(Math.random() * quotes.length);
    return quotes[randomNum];
};

/***
 * `printQuote` function
***/
function printQuote(){
    let randomQuote = getRandomQuote();
    //document.getElementsByClassName('quote')[0].innerHTML = RandomQuote["quote"];
    let PtoHTML1 = "<p class='quote'>" + randomQuote.quote + "</p><p class='source'>" + randomQuote.source;
   // document.getElementsByClassName('source')[0] = RandomQuote["source"];

   if(typeof randomQuote.citation !== "undefined"){
        PtoHTML1 = PtoHTML1 + "<span class='citation'>" + randomQuote.citation + "</span>"
   }

   if(typeof randomQuote.year !== "undefined"){
        PtoHTML1 = PtoHTML1 + "<span class='year'>" + randomQuote.year + "</span>"
}
    PtoHTML1 = PtoHTML1 + "</p>"

    document.getElementById('quote-box').innerHTML = PtoHTML1;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", function(){
    printQuote();
})