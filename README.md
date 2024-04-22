# js-lab-84
### Lab84 String: การตรวจสอบข้อความ
จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ  xxx, porn, sex ตามลำดับ

```JavaScript
let text1 = "This is a sample text containing the word XXX.";
console.log(containsSensitiveWords(text1)); //true

let text2 = "This is a sample text without any sensitive words.";
console.log(containsSensitiveWords(text2)); //false
```
