//feed randomized advice into web-page on button click
 
//images from https://picsum.photos
function randomImage() {
	document.getElementById("adviceImage").src = "https://picsum.photos/500/350";
	randomQuote();
}

//api solution from: https://github.com/lukePeavey/quotable#get-random-quote
async function randomQuote() {
  const response = await fetch('https://api.quotable.io/random');
  const data = await response.json();
  document.getElementById("customAdvice").innerHTML = (`${data.content}` + "<br /> - " + `${data.author}`);
}

