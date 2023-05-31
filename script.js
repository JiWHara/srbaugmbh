const hamburgerToggle = document.getElementById('hamburger-toggle');
const wideLogoTop = document.querySelector('.topText');
const wideLogoBottom = document.querySelector('.bottomText');
const logoTopLine = document.querySelector('.logoTopLine');
const logoBottomLine = document.querySelector('.logoBottomLine');
const squareLogo = document.querySelector('.squareLogo');
const squareText = document.querySelector('.squareText');
const html = document.querySelector('body');

hamburgerToggle.addEventListener('change', function() {
  if (this.checked) {
    wideLogoTop.classList.add('blackText');
    wideLogoBottom.classList.add('blackText');
    logoTopLine.classList.add('blackLine');
    logoBottomLine.classList.add('blackLine');
    squareLogo.classList.add('blackBorder');
    squareText.classList.add('blackText');
    document.body.style.setProperty('overflow-y', 'hidden');
  } else {
    wideLogoTop.classList.remove('blackText');
    wideLogoBottom.classList.remove('blackText');
    logoTopLine.classList.remove('blackLine');
    logoBottomLine.classList.remove('blackLine');
    squareLogo.classList.remove('blackBorder');
    squareText.classList.remove('blackText');
    document.body.style.setProperty('overflow-y', 'visible');
  }
});