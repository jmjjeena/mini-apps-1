// var table = document.getElementById('myTable');
// var cell = document.getElementsByClassName('cell').rows;

function clickHandler() {
  console.log('clicked');
}

document.querySelectorAll('#myTable td').forEach(element =>
  element.addEventListener('click', clickHandler));