function generateQuote() {
    const quotes = [
        "Believe in yourself!",
        "Dream big, work hard.",
        "Success is not final, failure is not fatal.",
        "Stay positive and happy.",
        "Never give up!",
        "Push yourself, because no one else will."
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
}