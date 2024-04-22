// write code here
function containsSensitiveWords(text) {
  let lowercaseText = text.toLowerCase();
  let sensitiveWords = ['xxx', 'sex', 'porn'];
  
  for (let word of sensitiveWords) {
    if (lowercaseText.includes(word)) {
      return true;
    }
  }
  return false;
}

let userInput = prompt("กรุณากรอกข้อความที่ต้องการตรวจสอบ:");
if (userInput !== null) {
  let hasSensitiveWords = containsSensitiveWords(userInput);
  if (hasSensitiveWords) {
    alert("ข้อความนี้มีคำที่ sensitive");
  } else {
    alert("ข้อความนี้ไม่มีคำที่ sensitive");
  }
}
