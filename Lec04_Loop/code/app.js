var people = ["Vu", "Lien", "Thu"];

/* for 
- lặp theo index
*/
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}

/* for/of
- duyệt trực tiếp lấy ra phần tử trong arr
*/
for (const item of people) {
  console.log(item);
}

/* while
- lặp nếu điều kiện đúng
- dùng while khi mà không biết số lần lặp.
*/
var i = 0;
while (i < people.length) {
  console.log(people[i]);
  i++;
}
