// Funcionalide do carrossel

let currentGroupIndex = 0;

function nextImages() {
  const groups = document.querySelectorAll('.grupo-imagens');
  groups[currentGroupIndex].classList.remove('active');

  currentGroupIndex = (currentGroupIndex + 1) % groups.length;

  groups[currentGroupIndex].classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.grupo-imagens').classList.add('active');
});
