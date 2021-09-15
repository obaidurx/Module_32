const loadQuotes = ()=>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displayQuotes(data))
}


function displayQuotes(quotes){
    const quotesContainer = document.getElementById('quote');
    // const blockQuote = document.createElement('blockquote');
    // blockQuote.innerText=quotes.quote;
    // quotesContainer.appendChild(blockQuote);
    quotesContainer.innerText =quotes.quote;
} 
