// Click event on each cell

function clickHandler() {
  console.log('clicked');
  var cell = document.querySelectorAll('td');
  cell.forEach((cell) => cell.innerHTML = "X")
}

document.querySelectorAll('#myTable td').forEach(element =>
  element.addEventListener('click', clickHandler));