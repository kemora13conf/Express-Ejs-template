// i want to make the header fixed when the user scrolls up but hidden when the user scrolls down
const header = document.querySelector('header');
const images = header.querySelectorAll('img');
let lastScroll = 0;

checkWichLogo = () => {
    if (header.offsetWidth > 600) {
        images[0].src = 'assets/logo/logo-description-horizontal.png';
    } else {
        images[0].src = 'assets/logo/logo.png';
    }
}

addEventListener('load', () => {
    header.classList.contains('header-hidden') ? header.classList.remove('header-hidden') : null;
    checkWichLogo();
});
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= 70) {
    header.classList.remove('header-hidden');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('header-hidden')) {
    // down
    header.classList.add('header-hidden');
  } else if (
    currentScroll < lastScroll &&
    header.classList.contains('header-hidden')
  ) {
    // up
    header.classList.remove('header-hidden');
  }
  lastScroll = currentScroll;
});
addEventListener('resize', () => {
   checkWichLogo();
});