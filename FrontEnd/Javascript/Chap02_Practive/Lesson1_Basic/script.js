// Kiem tra so nguyen duong
// var number = prompt("Nhap so nguyen la:");
// if (number > 0) {
//   document.write(number + "la so nguyen duong");
// } else {
//   document.write(number + "là số nguyên âm");
// }

// var number1 = prompt("Nhap so nguyen la:");
// var number2 = prompt("Nhap so nguyen la:");
// var total = parseInt(number1) + parseInt(number2);
// document.write("Tong cua 2 so la: " + total);

// var array = [1, 2, 3, 4532, 43];
// var total = 0;
// for (var i = 0; i < array.length; i++) {
//   total += array[i];
// }
// document.write("Total elments in array: " + total);

// PT bac 1 co dang ax+b=0;

// var a = prompt("Nhap a : ");
// var b = prompt(" Nhap b : ");
// var x = -b / a;
// document.write("Nghiem cua PT la : " + x);

// So nguyen to la so lơn hơn 1 và chỉ chia het cho 1 va chinh no: 2,3,5,7,
// var n = prompt("Nhap so nguyen de kiem tra co phai so nguyen to hay khong : ");
// var check = true;
// if (n < 2) {
//   document.write(n + " khong la so nguyen to !");
// } else {
//   for (var i = 2; i < n; i++) {
//     if (n % i == 0) {
//       check = false;
//     }
//   }
//   if (check) {
//     document.write(n + " la so nguyen to !");
//   } else {
//     document.write(n + " khong la so nguyen to !");
//   }
// }

// var e = document.getElementById("btn");
// console.log(number);
// console.log(e);
// function print() {
//   var number = document.getElementById("number").value;
//   for (var i = 1; i <= number; i++) {
//     console.log(i);
//     document.write(number);
//   }
// }

//Bài 01: Tính tổng các số chẵn từ 0 tới n bằng cách sử dụng vòng lặp while trong javascript

// const n = prompt("Nhap n : ");
// var total = 0;
// var i = 0;
// while (i <= n) {
//   if (i % 2 == 0) {
//     total += i;
//   }
//   i++;
// }
// document.write("Tong cac so chan la:" + total);

//In ra thông báo khi click vào button bằng Javascript
// var btn = document.getElementById("btn");
// btn.onclick = function () {
//   alert("Hop thoa thong bao!");
// };
