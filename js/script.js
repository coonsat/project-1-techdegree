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
        "citation" : null,
        "year": null
    },
    {
        "quote" : "Everyone thinks of changing the world, but no one thinks of changing himself",
        "source" : "Lev Tolstoy",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "Strive not to be a success, but rather to be of value",
        "source" : "Albert Einstein",
        "citation" : null,
        "year": null
    },
    {
        "quote" : "Keep your face always towards the sunshine - and shadows will fall behind you",
        "source" : "Walt Whitman",
        "citation" : null,
        "year": null
    }
];



/***
 * `getRandomQuote` function
***/

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

/***
 * `printQuote` function
***/

function printQuote() {
  const quote = getRandomQuote();
  let quoteBox = document.getElementById('quote-box');
  quoteBox.innerHTML = "";
  quoteBox.innerHTML = 
    `<p class="quote">${quote.quote}</p>
    <p class="source">${quote.source}
      <span class=${quote.citation !== null ? "citation" : ''}>${quote.citation !== null ? quote.citation : ''}</span>
      <span class=${quote.year !== null ? "year" : ''}>${quote.year !== null ? quote.year : ''}</span>
    </p>`
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);