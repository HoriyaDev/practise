const quotation = document.getElementById("quotes")
const name =document.getElementById("write")
const button = document.getElementById("btn")
const quotes = [
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
    { text: "Get your facts first, then you can distort them as you please.", author: "Mark Twain" },
    { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "Do not wait to strike till the iron is hot, but make it hot by striking.", author: "William Butler Yeats" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "We must be the change we wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { text: "To live is the rarest thing in the world. Most people exist, that is all.", author: "Oscar Wilde" }
];

const randomQuote = ()=>{
    const random = Math.floor(Math.random()*quotes.length)
    return quotes[random]
}
const displayQuote = ()=>{
    const quote = randomQuote()
    quotation.textContent= `${quote.text}`
    name.textContent = `${quote.author}`
}
button.addEventListener("click" , displayQuote)