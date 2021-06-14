/* 
Cho 2 mảng
a = [3,-6, 8, -9, -4, 5, 12]
1) Tính tổng các số trong mảng a
2) Tìm phần tử âm lớn nhất trong mảng a. Xuất giá trị và chỉ số tại vị trí đó
3) Tính tổng các số lẻ
4) Tìm số lớn nhất trong mảng và xuất ra vị trí của nó.
*/

var arr = [3, -6, 8, -9, -4, 5, 12];

// 1)
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
console.log(sum);

// 2)
/* 
* TH1: Mảng toàn số dương
* TH2: Mảng toàn số âm
* TH3: Mảng vừa số âm, vừa số dương.
* TH4: nhiều số âm trùng nhau

* Gỉai thuật
* 1. Đầu vào: Mảng các số
* 2. Đàu ra: số âm lớn nhất
* 3. Gỉai thuật
- Đặt chỉ số âm đầu tiên chiSoAmDauTien = -1
- Duyệt vòng lặp, nếu tìm thấy số âm, gán chiSoAmDauTien la chỉ số của số âm hiện tại đang duyệt
- Duyệt lại mảng từ chiSoAmDauTien + 1 trở đi
- Nếu phần tử tiếp theo là số âm và số âm này lớn hơn giá trị tại phần tử chiSoAmDauTien, cập nhật lại chiSoAmDauTien là chỉ số hiện tại
- Khai báo mảng chứa phần tử âm lớn nhất bằng nhau
- Duyệt lại mảng từ chiSoAmDauTien trở đi
- Kiểm tra phần tử có giá trị bằng phần tử tại chiSoAmDauTien thì đưa vào mảng các giá trị âm lớn nhất
*/

var array = [1, 2, -4, 3, -6, 8, -9, -4, 5, 12];
var chiSoAmDauTien = -1;
for (var i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    chiSoAmDauTien = i;
    break;
  }
}

var chiSoAmMax = chiSoAmDauTien;
if (chiSoAmDauTien != -1) {
  for (var i = chiSoAmDauTien + 1; i < array.length; i++) {
    if (array[i] < 0 && array[i] > array[chiSoAmMax]) {
      chiSoAmMax = i;
    }
  }
  // console.log(
  //   "Gia tri am lon nhat tai: " + chiSoAmMax + " gia tri la: " + array[chiSoAmMax]
  // );
  var mangAmLonNhat = [];
  for (let i = chiSoAmMax; i < array.length; i++) {
    if (array[i] === array[chiSoAmMax]) {
      mangAmLonNhat.push(i);
    }
  }
  // In ra result
  for (var i = 0; i < mangAmLonNhat.length; i++) {
    var index = mangAmLonNhat[i];
    console.log(`( ${index}, ${array[mangAmLonNhat[i]]} )`);
  }
} else {
  console.log("Mang khong co so am");
}

// 3)
var arr3 = [3, -6, 8, -9, -4, 5, 12];
var tongSoLe = 0;
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] % 2 != 0) {
    tongSoLe += arr3[i];
  }
}
console.log(tongSoLe);
