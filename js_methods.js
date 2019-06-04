// 合并对象
var a = {
    a: 1,
    b: 3
};

var b = {
    b:5,
    c:8
};
// ES5
console.log(Object.assign({},a,b));
// ES6
console.log({...a, ...b});

// JSON.parse(str, reviver)
var multiLayoutObj = {
    a1: 1,
    a2: 2,
    b1: {
        b2: 1,
        b3: {
            c1: 1
        }
    }
};

var jsonObj = JSON.parse(JSON.stringify(multiLayoutObj), function (key, val) {
    console.log(val);
    return val;
});

console.log(jsonObj);


// 判断是否为数组
var arr = [1, 2];
console.log(typeof arr); // Object! 不能使用！
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(Object.prototype.toString.call(arr));
console.log(toString.call(arr));

// 找最大数
var nums = [1, 2, -1, 10];
console.log(Math.max(...nums));
console.log(Math.max.apply(null, nums));
console.log(Math.max.call(null, ...nums));
