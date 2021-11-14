const quotes = [
	"“What is pride? A rocket that emulates the stars.”",
	"“Being a rocket scientist isn’t all that smart when you could work in finance.”",
	"“When you launch in a rocket, you’re not really flying that rocket. You’re just sort of hanging on.”",
	"“The deeper the journey into inner space, the further the possibilities in outer space.”",
	"“Rocket science has been mythologized all out of proportion to its true difficulty.”",
	"“There’s the whole myth about rocket science. It’s really not that hard. It’s not brain surgery.”",
	"“Don’t take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck.”"
];

const quotesBy = [
	"– William Wordsworth",
	"― A.D. Aliwat, Alpha",
	"– Michael P. Anderson",
	"― Curtis Tyrone Jones",
	"– John Carmack",
	"— John Powell",
	"— Dr. APJ Abdul Kalam"
];

let randomNum = Math.floor(Math.random() * 7);

let randomQuote = quotes[randomNum];
let randomQuoteBy = quotesBy[randomNum];

let quoteContent = document.querySelector(".quoteContent");
let quoteAuthor = document.querySelector(".quoteAuthor");

quoteContent.innerHTML = randomQuote;
quoteAuthor.innerHTML = randomQuoteBy;

document.querySelector(".mid-bar").style.height = window.innerHeight;

document.querySelector(".wt-rocket-head").addEventListener("click", function () {
	window.location.href = "#rocket-info";
});

document.querySelector(".org-head").addEventListener("click", function () {
	window.location.href = "#organizations";
});

document.querySelector(".up-launch-head").addEventListener("click", function () {
	window.location.href = "./upcoming-launches.html";
});

document.querySelector(".wht-is-rckt-km").addEventListener("click", function () {
	window.location.href = "./learn_with_us/whtisrckt.html";
});

document.querySelector(".wht-rckt-sc-km").addEventListener("click", function () {
	window.location.href = "./learn_with_us/whtisrcktsc.html";
});

document.querySelector(".why-rckt-imp").addEventListener("click", function () {
	window.location.href = "./learn_with_us/rcktuses.html";
});
document.querySelector(".aboutus-head").addEventListener("click", function () {
	window.location.href = "./about_us/about_us.html";
});

function fun404() {
	window.location.href = "./Under_Development/404.html";
}