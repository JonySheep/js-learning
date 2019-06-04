let a = 'globleA';

function test() {
    console.log(a);
    console.log(...arguments);
}

test();
test.call(this, 1, 2, 3, 'call'); // 等价于 this.function = test
test.apply(this, [1, 2, 3, 'apply']); // 只有两个参数！！
test.bind(this)(1, 2, 3, 'bind'); // 返回一个函数

// 模拟call
Function.prototype.myCall = function (context) {
    var tmpCtx = context || window;
    tmpCtx.fn = this;
    var args = [...arguments].slice(1); // 所有参数
    var res = tmpCtx.fn(...args); // 传入的是单个参数
    delete tmpCtx.fn;
    return res;
};

test.myCall(this, 1, 2, 3, 'mycall');

Function.prototype.myBind = function (context) {
    if (typeof this !== "function") throw new Error('Not A Function!');

    var tmp = this;
    var args = [...arguments].slice(1);
    
    return function F() {
        if (this instanceof F) {

            return new tmp(...args, ...arguments);
        }
        return tmp.apply(context, args.concat(...arguments)); // 参数柯里化
    }
};

test.myBind(this)(1, 2, 3, 'myBind');