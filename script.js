const hamburgerToggle = document.getElementById('hamburger-toggle');
const wideLogoTop = document.querySelector('.topText');
const wideLogoBottom = document.querySelector('.bottomText');
const logoTopLine = document.querySelector('.logoTopLine');
const logoBottomLine = document.querySelector('.logoBottomLine');

hamburgerToggle.addEventListener('change', function() {
  if (this.checked) {
    wideLogoTop.classList.add('blackText');
    wideLogoBottom.classList.add('blackText');
    logoTopLine.classList.add('blackLine');
    logoBottomLine.classList.add('blackLine');
  } else {
    wideLogoTop.classList.remove('blackText');
    wideLogoBottom.classList.remove('blackText');
    logoTopLine.classList.remove('blackLine');
    logoBottomLine.classList.remove('blackLine');
  }
});