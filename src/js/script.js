$(document).ready(function () {
    $(".carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
    });
});


const popupBg = document.querySelector(".popup_bg");
const popup = document.querySelector(".popup");
const openBtn = document.querySelector(".open-popup");
const closeBtn = document.querySelector(".close-popup");

openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.add('active');
    popup.classList.add('active');
});

closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg.classList.remove('active');
    popup.classList.remove('active');
});

document.addEventListener('click', (e) => {
    if (e.target === popupBg) {
        popupBg.classList.remove('active');
        popup.classList.remove('active');
    }
});


function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}




