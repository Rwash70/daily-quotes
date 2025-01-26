document.addEventListener("DOMContentLoaded", function () {
  const quoteEl = document.getElementById("quote");
  const authorEl = document.getElementById("author");
  const buttonEl = document.getElementById("new-quote");

  const quotes = [
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      text: "Don’t watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "The harder you work for something, the greater you'll feel when you achieve it.",
      author: "Unknown",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "Our lives are what our thoughts make it.",
      author: "Marcus Aurelius",
    },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    {
      text: "Your time is limited, so don’t waste it living someone else’s life.",
      author: "Steve Jobs",
    },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "Act as if what you do makes a difference. It does.",
      author: "William James",
    },
    {
      text: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    {
      text: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
      author: "Ralph Waldo Emerson",
    },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      text: "It is never too late to be what you might have been.",
      author: "George Eliot",
    },
    {
      text: "We can do anything we want to if we stick to it long enough.",
      author: "Helen Keller",
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "You are never too old to set another goal or to dream a new dream.",
      author: "C.S. Lewis",
    },
    {
      text: "A goal is not always meant to be reached, it often serves simply as something to aim at.",
      author: "Bruce Lee",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Success is the sum of small efforts, repeated day in and day out.",
      author: "Robert Collier",
    },
    {
      text: "The harder you work, the luckier you get.",
      author: "Gary Player",
    },
    {
      text: "Don’t limit your challenges. Challenge your limits.",
      author: "Unknown",
    },
    {
      text: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll",
    },
    {
      text: "In the middle of every difficulty lies opportunity.",
      author: "Albert Einstein",
    },
    {
      text: "Success usually comes to those who are too busy to be looking for it.",
      author: "Henry David Thoreau",
    },
    {
      text: "The only place where success comes before work is in the dictionary.",
      author: "Vidal Sassoon",
    },
    {
      text: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.",
      author: "Roy T. Bennett",
    },
    {
      text: "The way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Everything you can do, or dream you can, begin it. Boldness has genius, power, and magic in it.",
      author: "Johann Wolfgang von Goethe",
    },
    {
      text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
    },
    {
      text: "You don’t have to be great to start, but you have to start to be great.",
      author: "Zig Ziglar",
    },
    {
      text: "To succeed in life, you need two things: ignorance and confidence.",
      author: "Mark Twain",
    },
    {
      text: "You can never cross the ocean until you have the courage to lose sight of the shore.",
      author: "Christopher Columbus",
    },
    {
      text: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt",
    },
    {
      text: "It does not matter how slowly you go as long as you do not stop.",
      author: "Confucius",
    },
    {
      text: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
    },
    {
      text: "Success is not the key to happiness. Happiness is the key to success.",
      author: "Albert Schweitzer",
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
    {
      text: "If you want to achieve greatness stop asking for permission.",
      author: "Unknown",
    },
    {
      text: "It always seems impossible until it’s done.",
      author: "Nelson Mandela",
    },
    {
      text: "You miss 100% of the shots you don’t take.",
      author: "Wayne Gretzky",
    },
    {
      text: "The secret of getting ahead is getting started.",
      author: "Mark Twain",
    },
    {
      text: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
    },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    {
      text: "It’s not whether you get knocked down, it’s whether you get up.",
      author: "Vince Lombardi",
    },
    {
      text: "You must be the change you wish to see in the world.",
      author: "Mahatma Gandhi",
    },
    {
      text: "Everything you’ve ever wanted is on the other side of fear.",
      author: "George Addair",
    },
    {
      text: "Our lives are what our thoughts make it.",
      author: "Marcus Aurelius",
    },
    {
      text: "The best way to predict your future is to create it.",
      author: "Abraham Lincoln",
    },
    {
      text: "The only limit to our realization of tomorrow is our doubts of today.",
      author: "Franklin D. Roosevelt",
    },
    {
      text: "What you get by achieving your goals is not as important as what you become by achieving your goals.",
      author: "Zig Ziglar",
    },
    { text: "Don’t wait for opportunity. Create it.", author: "Unknown" },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
  ];
  // Function to get a random quote from the quotes array
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }

  function resetQuote() {
    quoteEl.textContent = "Click the button to get a quote";
    authorEl.textContent = "-Author";
  }

  // Set the content of quote and author elements
  function displayQuote(quote) {
    quoteEl.textContent = `"${quote.text}"`;
    authorEl.textContent = `- ${quote.author}`;
  }

  // Add event listener to the button
  buttonEl.addEventListener("click", function () {
    const randomQuote = getRandomQuote();
    displayQuote(randomQuote);

    setTimeout(() => {
      resetQuote();
    }, 5000);
  });

  resetQuote();
});
