// কোটগুলোর লিস্ট
const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
    "The way to get started is to quit talking and begin doing. - Walt Disney",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
];

// HTML এলিমেন্টগুলো নির্বাচন
const quoteText = document.getElementById("quote");
const newQuoteButton = document.getElementById("new-quote");
const copyQuoteButton = document.getElementById("copy-quote");

// নতুন র‍্যান্ডম কোট জেনারেট করা
newQuoteButton.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
});

// কোট কপি করা
copyQuoteButton.addEventListener("click", () => {
    navigator.clipboard.writeText(quoteText.textContent).then(() => {
        alert("Quote copied to clipboard!");
    });
});
