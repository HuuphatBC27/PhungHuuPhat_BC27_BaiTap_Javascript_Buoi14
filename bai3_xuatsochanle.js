function Parity() {
  var number4El = +document.getElementById("Number4").value;
  var number5El = +document.getElementById("Number5").value;
  var number6El = +document.getElementById("Number6").value;
  var reSultEl = document.getElementById("finish");
  reSultEl.style.display = "block";
  if (number4El == "" || number5El == "" || number6El == "") {
    reSultEl.innerHTML = "bạn chưa nhập đủ số yêu cầu";
  } else if (number4El % 2 == 0 && number5El % 2 == 0 && number6El % 2 == 0) {
    reSultEl.innerHTML = " có 3 số chẵn";
  } else if (number4El % 2 > 0 && number5El % 2 > 0 && number6El % 2 > 0) {
    reSultEl.innerHTML = " có 3 số lẻ";
  } else if (
    (number4El % 2 == 0) &
    (number5El % 2 == 0) &
    (number6El % 2 > 0)
  ) {
    reSultEl.innerHTML = " có 2 số chẳn" + "," + " 1 số lẻ";
  } else if (
    (number4El % 2 == 0) &
    (number5El % 2 > 0) &
    (number6El % 2 == 0)
  ) {
    reSultEl.innerHTML = " có 1 số lẻ" + "," + " 2 số chẳn";
  } else if (
    (number5El % 2 == 0) &
    (number6El % 2 == 0) &
    (number4El % 2 > 0)
  ) {
    reSultEl.innerHTML = " có 2 số chẳn" + "," + " 1 số lẻ";
  } else if ((number5El > 0) & (number4El % 2 > 0) & (number6El % 2 == 0)) {
    reSultEl.innerHTML = " có 2 số lẻ" + "," + " 1 số chẳn";
  } else if ((number6El % 2 > 0) & (number5El % 2 > 0) & (number4El % 2 == 0)) {
    reSultEl.innerHTML = " có 2 số lẻ" + "," + " 1 số chẳn";
  } else if ((number6El % 2 > 0) & (number5El % 2 == 0) & (number4El % 2 > 0)) {
    reSultEl.innerHTML = " có 2 số lẻ" + "," + " 1 số chẳn";
  }
}
// b1 : DOM tới các input và lấy giá trị  số 
// B2 : nhập các số nguyên
//b3  : xuất ra số chẳn và lẻ