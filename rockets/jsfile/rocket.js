var slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

var sindex = 1
// sSlides(sindex);

function cSlide(j) {
    sSlides(sindex = j);
}
document.querySelector(".d-head").style.height = window.innerHeight;
document.querySelector(".d-head").style.height = window.innerHeight;
document.querySelector(".slideshow-container").style.height = window.innerHeight;

document.querySelector(".wt-rocket-head").addEventListener("click", function(){
    window.location.href = "../index.html#rocket-info";
});

document.querySelector(".org-head").addEventListener("click", function(){
    window.location.href = "../index.html#organizations";
});

document.querySelector(".up-launch-head").addEventListener("click", function(){
  window.location.href = "../upcoming-launches.html";
});

function fun404() {
    window.location.href = "../Under_Development/404.html";
}

document.addEventListener("scroll", function(){
    if(window.pageYOffset > 300) {
        const counters = document.querySelectorAll('.counter');
        const speed = 50;

        counters.forEach( counter => {
           const animate = () => {
              const value = +counter.getAttribute('akhi');
              const data = +counter.innerText;
             
              const time = value / speed;
                if(data < value) {
                  counter.innerText = Math.ceil(data + time);
                  setTimeout(animate, 1);
                }else{
                  counter.innerText = value;
                }
           }
           
           animate();
        });
    }
});

//250+window.innerHeight