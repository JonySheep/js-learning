/**
 * Foo()函数返回匿名对象的引用（一个闭包），有延续变量作用域的功能
 * @returns {Function}
 * @constructor
 */
function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}

var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();

/**
 * 考点：会先从实例中找方法，如果没有找到才会找重写的原型
 * 考点：原型
 * @constructor
 */
function A() {
    // this.do=function() {return 'foo';};
}
// 这边实际上是一个函数了？没什么意义
A.prototype= function() {
    this.do=function() {return 'bar'};
};
// 这样写才是原型构造函数，而且要把上面function A里的this.do()注释掉
A.prototype = {
    constructor: A,
    do: function() {return 'bar'}
}
var x=new A().do();
console.log(x)


/**
 * 考点：匿名函数 变量作用域
 * var a=b=3等价于 var a = 3; b = 3; 重新声明了一个局部变量a，而b还是全局变量
 */
var a,b;
(function(){
    console.log(a);
    console.log(b);
    var a=b=3;
    console.log(a);
    console.log(b);
})();
console.log(a);
console.log(b);

var x = '40'
var y = 7
console.log(typeof (x%y))

var key = {
    a: 1,
    b: 2
}
console.log(Object.prototype)


function Person(name) {
    this.name = name
    this.addname = function () {
        this.name = 'name is '+ this.name
        console.log(this.name)
    } // 实例方法
}

// 原型方法
Person.prototype.sayHi = function () {
    console.log('Hi', this.name);
}

function Teacher(name, className) {
    // Teacher.prototype = Object.create(Person.prototype, {
    //     constructor: {
    //         value: Teacher,
    //         enumerable: false,
    //         writable: true,
    //         configurable: true
    //     }
    // })
    Person.call(this, name);
    this.className = className
    this.printClass = function () {
        console.log('class is ' + this.className)
    }
}

Teacher.prototype = new Person();

var t1 = new Teacher('Yang', 'SE');

console.log(t1.__proto__.__proto__)
console.log(t1.__proto__)
t1.addname()
t1.printClass()


var reg = new RegExp(/\(\)|\[\]|\{\}/g);
var str = '[(()]';

while (true) {
    if (str === "") {
        console.log(true);
        break;
    }

    if (reg.test(str)) {
        str = str.replace(reg, "");
    }else {
        console.log("false");
        break;
    }

}


function deleteRepeat(nums) {
    var newList = [...new Set(nums)];
    return newList;
}
console.log(deleteRepeat([1,1,2]));


var lengthOfLastWord = function(s) {
    if (s.length === 0 || s === '' ) return 0;
    if (s[s.length -1] === ' ') s.slice(0, s.length-1)

    var arr = s.split(' ');
    // only one word
    if (arr.length ===1) {
        s.replace(' ','');
        return s.length;
    } else {
        return arr[arr.length-1].length;
    }

};

console.log(lengthOfLastWord('a '));

// 正确比较浮点数
console.log(Math.abs(0.1+0.2-0.3) <= Number.EPSILON)

// 替换空格
var replaceStr = 'We are one';
// var res = replaceStr.replace(' ', '%20'); 但这样只会替换第一个

// OK! use 正则和replace
// var regexp = new RegExp(' ', 'gi');
// var res = replaceStr.replace(regexp, '%20');

// OK！使用join函数
var splitRes = replaceStr.split(' ');
var res = splitRes.join('%20');

// var res = replaceStr.replace(' ', (v)=>{return Array(v.length+1).join('??')});

console.log('safegga'.split());

var isPalindrome = function(s) {
    var newStr = s.replace(/[^0-9a-zA-Z]+/g, '');
    var reverseStr = newStr.split('').reverse().join('').toLowerCase();
    if (newStr === reverseStr) {
        return true;
    } else {
        return false;
    }
};
console.log(isPalindrome('A man, a plan, a canal: Panama'))

console.log([...Array(7).keys()].map(days => new Date(Date.now() - 86400000* days )))

// for(i=0;++i<20;console.log(i%5?f||i:f+'Buzz'))f=i%3?'':'Fizz'

console.log(Object.prototype.toString.call([]) === '[object Array]');
console.log([].constructor === Array);
console.log(Array.isArray([]));
