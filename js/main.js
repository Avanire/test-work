const cookiesBtn = document.querySelector('.cookies__button');
const cookiesBlock = document.querySelector('.cookies');

cookiesBtn.addEventListener('click', () => {
    cookiesBlock.classList.remove('cookies--active');
    cookiesBlock.classList.add('cookies--deactivated');
});

document.addEventListener("DOMContentLoaded", function () {
    cookiesBlock.classList.add('cookies--active');
});
