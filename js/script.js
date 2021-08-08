let menu = document.querySelector('#bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}


var swiper = new Swiper('.swiper-container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    },
});

document.querySelectorAll('.top-image').forEach(image_1 => {
    image_1.addEventListener('click', () => {
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image1').src = src;
    });
});