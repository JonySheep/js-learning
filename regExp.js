// 匹配5-13位数字（QQ）
var regQQ = new RegExp(/^[1-9][0-9]{4,12}$/g);
console.log(regQQ.test('011123'));
console.log(regQQ.test('870590361'));

// 匹配邮箱
var regMail = new RegExp(/^[0-9a-zA-Z]+@[0-9a-zA-Z]+(\.(com|cn|org))+$/g);
console.log(regMail.test('870590361@qq.cn'), 'email');
console.log(regMail.test('870590361@qq.com.cn'), 'email');

// 匹配字符
var regStr = new RegExp('ab*c', 'gi');

// 遍历exec
do {
    var res = regStr.exec('abbbbbcabcac');
    console.log(res)
} while (res)

console.log(regStr.test('abbbbbcabcac'))
console.log('abbbbbcabcac'.search(regStr));
console.log('abbbbbcabcac'.match(regStr));
console.log('abbbbbcabcac'.split('b'));

