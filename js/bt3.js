var a = prompt("Nhập số a");
var b = prompt("Nhập số b");
var c = a % b;

//dùng hàm alert

/* 
if (c == 0){
    alert(a + " là bội số của " + b);
}else{
    alert(a + " không phải là bội số của " + b);
} 
*/

//dùng hàm document.write

if (c == 0) {
  document.write(a + " là bội số của " + b);
} else {
  document.write(a + " không phải là bội số của " + b);
}
