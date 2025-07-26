// let name = prompt("Nhập tên của bạn:");
alert("Xin chào ");
var xacsuat = Math.random()*100 ;
xacsuat = parseInt(xacsuat);
console.log(xacsuat);

var t = prompt("nhap so du doan");
var so_tien = prompt("nhap so tien choi");
  confirm("coi ky lai so tien nhap");
  if(t==xacsuat){
    alert("chúc mừng bạn đã trúng số:" + so_tien*70);
  }else{
    alert("chúc bạn may mắn lần sau");

  }