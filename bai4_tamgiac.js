function Figure() {
  var edgeA = +document.getElementById("canh1").value;
  var edgeB = +document.getElementById("canh2").value;
  var edgeC = +document.getElementById("canh3").value;
  document.getElementById("ketQua").style.display = "block";
  document.getElementById("ketQua").style.color = "red";
  document.getElementById("ketQua").style.fontSize = "30px";

  if (edgeA == "" || edgeB == "" || edgeC == "") {
    document.getElementById("tamGiac").innerHTML = "Chưa có số kìa  ";
    document.getElementById("tamGiac").style.fontWeight = "700";
  } else if (
    edgeA + edgeB < edgeC ||
    edgeA + edgeC < edgeB ||
    edgeB + edgeC < edgeA
  ) {
    document.getElementById("tamGiac").innerHTML = " không phải tam giác";
    document.getElementById("tamGiac").style.fontWeight = "700";
  } else if (edgeA === edgeB && edgeB === edgeC) {
    document.getElementById("tamGiac").innerHTML = "tam giác đều";
  } else if (edgeA === edgeB || edgeA === edgeC || edgeB === edgeC) {
    document.getElementById("tamGiac").innerHTML = "tam giác cân";
  } else if (
    edgeA * edgeA + edgeB * edgeB == edgeC * edgeC ||
    edgeA * edgeA + edgeC * edgeC == edgeB * edgeB ||
    edgeB * edgeB + edgeC * edgeC == edgeA * edgeA
  ) {
    document.getElementById("tamGiac").innerHTML = "tam giác vuông";
  } else {
    document.getElementById("tamGiac").innerHTML = " tam giác khác ";
  }
}

//b1 : DOM tới các input và lấy giá trị là các cạnh của hình
//b2 : xét xem đấy là tam giác gì
//b3 : xuất ra kết quả
