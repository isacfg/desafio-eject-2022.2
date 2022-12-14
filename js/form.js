const inputs = document.querySelectorAll('.input');
const textarea = document.querySelector('.textarea');


textarea.addEventListener('input', (e) => {
    let value = e.target.value;
    if (value.length > 0) {
        textarea.classList.toggle('active');
    }
    else {
        textarea.classList.toggle('active');
    }
});

inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
        if (e.target.value > 0) {
            input.classList.toggle('active');
        }
        else {
            input.classList.toggle('active');
        }
    });
});

// const nav = document.querySelector('.navbar');

// window.onscroll = (e) => {
//     if (window.pageYOffset > 0) {
//         nav.classList.toggle('scrolled');
//         console.log(e)
//     }
//     else {
//         nav.classList.toggle('scrolled');
//     }
// }
// Make navbar transparent when it is on the top
$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});