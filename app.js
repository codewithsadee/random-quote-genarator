var card = {
  imageBox: document.querySelector(".image-box"),
  nameBox: document.querySelector(".title-box h1"),
  titleBox: document.querySelector(".title-box h5"),
  quoteBox: document.querySelector(".quote-box blockquote"),
  randomButton: document.querySelector(".random"),
  shareButton: document.querySelector(".share"),
  container: document.querySelector(".container")
}

var randomNumber = 0;
var randomNumberRef = 0;

var arr = [
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/nelson-mandela.jpg\" alt=\"Nelson Mandela\">",
    name: "Nelson Mandela<div class=\"transition-effect\"></div>",
    title: "Former President of South Africa<div class=\"transition-effect\"></div>",
    quote: "\"I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.\"<div class=\"transition-effect\"></div>"
  },
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/steve-jobs.jpg\" alt=\"Steve Jobs\">",
    name: "Steve Jobs<div class=\"transition-effect\"></div>",
    title: "American business magnate<div class=\"transition-effect\"></div>",
    quote: "\"Being the richest man in the cemetery doesn't matter to me. Going to bed at night saying we've done something wonderful, that's what matters to me.\"<div class=\"transition-effect\"></div>"
  },
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/alan-turing.jpg\" alt=\"Alan Turing\">",
    name: "Alan Turing<div class=\"transition-effect\"></div>",
    title: "Mathematician<div class=\"transition-effect\"></div>",
    quote: "\"Sometimes it is the people who no one imagines anything of who do the things that no one can imagine.\"<br><br>\"I propose to consider the question, 'Can machines think?\"<div class=\"transition-effect\"></div>"
  },
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/john-nash.jpg\" alt=\"John Forbes Nash Jr.\">",
    name: "John Forbes Nash Jr.<div class=\"transition-effect\"></div>",
    title: "American mathematician<div class=\"transition-effect\"></div>",
    quote: "\"Perhaps it is good to have a beautiful mind, but an even greater gift is to discover a beautiful heart!\"<div class=\"transition-effect\"></div>"
  },
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/albert-einstein.jpg\" alt=\"Albert Einstein\">",
    name: "Albert Einstein<div class=\"transition-effect\"></div>",
    title: "Theoretical physicist<div class=\"transition-effect\"></div>",
    quote: "\"Learn from yesterday, live for today, hope for tomorrow. The important thing is not to stop questioning.\"<div class=\"transition-effect\"></div>"
  },
  {
    imageSrc: "<div class=\"transition-effect\"></div><img src=\"./images/napoleon-hill.jpg\" alt=\"Napoleon Hill\">",
    name: "Napoleon Hill<div class=\"transition-effect\"></div>",
    title: "American author<div class=\"transition-effect\"></div>",
    quote: "\"If you cannot do great things, do small things in a great way. <br>Don't wait. The time will never be just right.\"<div class=\"transition-effect\"></div>"
  }
];

card.randomButton.addEventListener("click", function () {
  randomNumber = Math.floor(Math.random() * arr.length);

  card.imageBox.innerHTML = arr[randomNumber].imageSrc;
  card.nameBox.innerHTML = arr[randomNumber].name;
  card.titleBox.innerHTML = arr[randomNumber].title;
  card.quoteBox.innerHTML = arr[randomNumber].quote;

});