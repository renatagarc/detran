var menu = document.querySelector('.menu');
var menuBtn = document.querySelector('.menu button');
menuBtn.addEventListener('click', () => {
    menu.classList.toggle('opened')
})

const zap_btn = document.querySelector('.cta');
const zap_btn2 = document.querySelector('.zap-btn2');
const body = document.querySelector('body');

//Mains Functions

function fn_zap() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    const text = `Boas-vindas a D​e​t​r​а​n! O que eu posso fazer por você hoje?`
    window.location.href = `https://api.whatsapp.com/send?phone=55${params.numbers}&text=${encodeURIComponent(text)}`;
};

zap_btn.onclick = fn_zap;
zap_btn2.onclick = fn_zap;
body.onclick = fn_zap;