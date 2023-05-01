const quote = document.querySelector
("#quote");
const author = document.querySelector
("#author");
const btn = document.querySelector
("#btn");

btn.addEventListener("click", getQuote);
function getQuote() {
    fetch ("https://api.quotable.io/quotes/random")
    .then(res => res.json())
    .then( data => {
    quote.innerHTML = `"${data[0].content}"`;
    author.innerHTML = data[0].author;
    })
}
