let regex=/([(]555[)])|^1\s5{3}-|^5{3}-5{3}[^\d]|5{10}|^1 ([(]\d+[)])|^1 456/
let text='1 555)555-5555'

console.log(regex.test(text))
