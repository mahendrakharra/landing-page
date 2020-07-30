const show = document.querySelector('.main-box');
const hide = document.querySelector('.loader');

function loading(){
    hide.style.display = "none";
    show.style.transform = "scale(1)";
}setTimeout(loading, 3000);

const name = document.querySelector('h1');
name.addEventListener('mouseover', () => {
     name.classList.add('bounce');
});

const copy = document.querySelector('article');
copy.addEventListener('copy', e => {
   alert('Ooppss sorry! Copyright content!');
});

const picture = document.querySelector('.picture');
picture.addEventListener('mouseover', event => {
   picture.classList.toggle('animate');
});

const author = document.querySelector('#author');
author.setAttribute('style', 'color:teal');



