

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btni')
const dropDownMenu = document.querySelector('.dropdown_menu') 

window.onload = function () {
    document.getElementById('toggle_btn').onclick = function() {
        document.getElementById('dropdown_menu').classList.toggle('open')
        
    }
}

var swiper = new Swiper('.blog-slider', {
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        mousewheel: {
        invert: false,
        },
        // autoHeight: true,
        pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
        }
  });