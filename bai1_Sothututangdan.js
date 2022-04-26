function ketQua() {
  var number1El = +document.getElementById("numBer1").value;
  var number2El = +document.getElementById("numBer2").value;
  var number3El = +document.getElementById("numBer3").value;
  document.getElementById("reSult").style.display = "block";
  document.getElementById("reSult").style.color = "red";
  document.getElementById("reSult").style.fontSize = "30px";
  if (number1El == "" || number2El == "" || number3El == "") {
    document.getElementById("reSult").innerHTML = "Bạn chưa nhập số";
    document.getElementById("reSult").style.fontWeight = "700";
  } else if (number1El < number2El && number2El < number3El) {
    document.getElementById("reSult").innerHTML =
      number1El + "," + number2El + "," + number3El;
  } else if (
    number1El < number2El &&
    number3El < number2El &&
    number1El < number3El
  ) {
    document.getElementById("reSult").innerHTML =
      number1El + "," + number3El + "," + number2El;
  } else if (number2El < number1El && number1El < number3El) {
    document.getElementById("reSult").innerHTML =
      number2El + "," + number1El + "," + number3El;
  } else if (
    number2El < number1El &&
    number3El < number1El &&
    number3El > number2El
  ) {
    document.getElementById("reSult").innerHTML =
      number2El + "," + number3El + "," + number1El;
  } else if (number3El < number1El && number1El < number2El)
    document.getElementById("reSult").innerHTML =
      number3El + "," + number1El + "," + number2El;
  else if (
    number3El < number1El &&
    number2El < number1El &&
    number3El < number2El
  ) {
    document.getElementById("reSult").innerHTML =
      number3El + "," + number2El + "," + number1El;
  }
}
