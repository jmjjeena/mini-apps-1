var table = document.getElementById('table');
var box = document.getElementsByClassName('cell');

box.addEventListener('click', event => {
  box.innerHTML = `X ${event.detail}`;
});
