const escapeButton = document.querySelector('.escape-button');
escapeButton.addEventListener('mouseover', function () {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  escapeButton.style.left = x + 'px';
  escapeButton.style.top = y + 'px';
});
