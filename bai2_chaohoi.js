function people() {
  var userEL = document.getElementById("user").value;
  document.getElementById("toTal").style.display = "block";
  if (userEL == "") {
    document.getElementById("toTal").innerHTML = "bạn chưa nhập tên";
    document.getElementById("toTal").style.fontWeight = 700;
    document.getElementById("toTal").style.color = "red";
  } else if (userEL === "A") {
    document.getElementById("toTal").innerHTML = "Chào Anh Trai";
  } else if (userEL === "B") {
    document.getElementById("toTal").innerHTML = " Chào Bố";
  } else if (userEL === "M") {
    document.getElementById("toTal").innerHTML = " Chào Mẹ";
  } else if (userEL === "E") {
    document.getElementById("toTal").innerHTML = " Chào Em gái ";
  } else if (userEL === "Php") {
    document.getElementById("toTal").innerHTML = "Chào mừng chủ nhân trở lại";

    document.getElementById("toTal").style.fontWeight = 700;
    document.getElementById("toTal").style.color = "red";
  } else {
    document.getElementById("toTal").innerHTML = " No Family";
    document.getElementById("toTal").style.fontWeight = 700;
    document.getElementById("toTal").style.color = "red";
  }
}
