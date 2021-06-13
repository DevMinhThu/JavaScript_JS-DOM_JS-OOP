/* cách khai báo */
// C1:
var cars = new Array("Honda", "Toyota", "BMW");
cars[3] = "Dodge";
console.log(cars);

// C2:
var people = ["Minh", "Thu", "Vu"];
people[3] = "Win";
console.log(people);

// Mảng chứa bất kỳ loại data nào cũng được
var arr = ["Thu", 4, "Minh", true, function () {}, "Thu"];
arr.push("new push value");
console.log(arr);

var index = arr.indexOf("Thu");
console.log("Index of value Thu in arr: ", index); // result: 0

var index = arr.lastIndexOf("Thu");
console.log("Index of value Thu in arr: ", index); // result: 5

/* 
- 1 số phương thức thường dùng
+ push: thêm phần tử vào mảng, thêm cuối mảng
+ indexOf: 
    - lấy chỉ số của phần tử mà nó tìm thấy đầu tiên
    - nếu phần tử đó không có trong mảng thì trả về -1
+ lastIndexOf: lấy chỉ số phần tử cuối cùng của mảng
*/
