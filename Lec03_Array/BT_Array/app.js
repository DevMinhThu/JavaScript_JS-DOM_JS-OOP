/* 
Cho 2 mảng
a = [3,-6, 8, -9, -4, 5, 12]
1) Tính tổng các số trong mảng a
2) Tìm phần tử âm lớn nhất trong mảng a. Xuất giá trị và chỉ số tại vị trí đó
3) Tính tổng các số lẻ
4) Tìm số lớn nhất trong mảng và xuất ra vị trí của nó.
*/

var a = [3, -6, 8, -9, -4, 5, 12];

// 1)
let sum = 0;
for (let i = 0; i < a.length; i++) {
  sum += a[i];
}
console.log(sum);