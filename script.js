var x;
function allReset(){
x = Math.random() * (100-1) + 1;
x = Math.floor(x);

document.getElementById("num").value = '';
document.getElementById("result").innerHTML = 'Результат';
}

function compare() {
  var val = document.querySelector("#num").value;

  if (x > val) {
    document.getElementById("result").innerHTML = 'Маловато';
}
  else if (x < val) {
    document.getElementById("result").innerHTML = 'Многовато';
  }
  else if (x == val) {
    document.getElementById("result").innerHTML = 'Угадали';
  }
}
document.querySelector('.input-num').onkeypress = function(){
  if (event.key == 'Enter') {
    compare()
  }
}

