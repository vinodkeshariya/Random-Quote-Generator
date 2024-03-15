document.addEventListener("DOMContentLoaded", function() {
    const quoteElement = document.getElementById("quote");
    const newQuoteButton = document.getElementById("newQuote");

    const apiUrl = 'https://api.quotable.io/random';

    function getNewQuote() {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const quote = data.content;
                quoteElement.textContent = `"${quote}"`;
            })
            .catch(error => {
                console.error("Error fetching quote:", error);
                quoteElement.textContent = "Error fetching a new quote.";
            });
    }

    newQuoteButton.addEventListener("click", getNewQuote);

    // Initial quote on page load
    getNewQuote();
});
