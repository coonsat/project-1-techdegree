/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

const quotes = 
[
    {
        "quote" : "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel",
        "source" : "Maya Angelou",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.",
        "source" : "Nelson Mandela",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "Our lives begin to end the day we become silent about things that matter",
        "source" : "Martin Luther King",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "It's not the years in your life that count. It's the life in your years",
        "source" : "Abraham Lincoln",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "If you hear a voice within you say 'you cannot paint,' then by all means paint and that voice will be silenced",
        "source" : "Vincent Van Gogh",
        "citation" : "The Letters of Van Gogh",
        "year": null
    },
    {
        "quote" : "Everyone thinks of changing the world, but no one thinks of changing himself",
        "source" : "Lev Tolstoy",
        "citation" : null,
        "year": 2015
    },
    {
        "quote" : "Strive not to be a success, but rather to be of value",
        "source" : "Albert Einstein",
        "citation" : "Memoirs",
        "year": 2017
    },
    {
        "quote" : "Keep your face always towards the sunshine - and shadows will fall behind you",
        "source" : "Walt Whitman",
        "citation" : "Great Quotes of Our Modern Times",
        "year": 2016
    }
];



/***
 * `getRandomQuote` function
***/
/***
 * Explanation:
 * A random quote is retrieved using an index returned from 
 * the Math.random function and multiplying it by the length
 * of the quote array to. 
 * E.g. 
 * random = 0.92694746
 * length = 8
 * random * length = 7.411751294144449
 * Math.floor(random * length) = 7
***/
function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function
***/

/***
 * Explanation:
 * quote returned from getRandomQuote
 * quotebox retrieved from DOM
 * quotebox contents cleared of previous quote
 * use bactics (not sure how to spell it) the quote
 * structure from the template is replicated without
 * having to create an individual DOM element via
 * document.createElement('p')
 * One line if check examines if citation or year is
 * not null. The DOM element will still be rendered if
 * it is null but will not contain any contents. 
***/
function printQuote() {
  const quote = getRandomQuote();
  let quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = "";
  quoteBox.innerHTML = 
    `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}${quote.citation !== null ? `<span class=citation>${quote.citation}</span>` : ''}${quote.year !== null ? `<span class=year>${quote.year}</span>` : ''}</p>`
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);