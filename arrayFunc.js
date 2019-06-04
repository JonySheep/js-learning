let arr = [0, 1, 2, 3, 4, 5, 5];

/**
 * 插入
 * @type {number}
 */
let push = arr.push(1);
console.log('push: ',push, arr);

let unshift = arr.unshift(-1);
console.log('unshift: ',unshift, arr);

let spliceInsert = arr.splice(1, 0);
console.log('insert splice: ',spliceInsert, arr);

/**
 * 删除
 * @type {number}
 */
let pop = arr.pop();
console.log('pop: ',pop, arr);

let shift = arr.shift();
console.log('shift: ',shift, arr);

let splice = arr.splice(1, 1);
console.log('delete splice: ',splice, arr);

/**
 * 查询
 * @type {number}
 */
let indexof = arr.indexOf(5);
console.log('indexof: ', indexof);

let lastIndexOf = arr.lastIndexOf(5);
console.log('lastIndexOf: ', lastIndexOf);

let every = arr.every((v)=>{return v > 3});
console.log('every: ', every);

let some = arr.some((v)=>{return v > 3});
console.log('some: ', some);

let include = arr.includes(5);
console.log('include: ', include);

let find = arr.find((v)=>{return v>0});
console.log('find: ',find); // return element value

let findIndex = arr.findIndex((v)=>{return v>0});
console.log('findIndex: ',findIndex); // return element index

let filter = arr.filter((v) => {return v>3});
console.log('filter: ', filter);


/**
 * 遍历
 * @type {IterableIterator<number>}
 */
let keys = arr.keys();
console.log('keys: ',...keys);

let entries = arr.entries();
console.log('entries: ', ...entries);

let map = arr.map((v)=>{return v*2});
console.log('map: ', map);

// 报错？？
// let flatMap = arr.flatMap((v)=>{return v*2});
// console.log('flatMap: ', flatMap);

arr.forEach((value) => {value*=2; console.log(value)});

let reduce = arr.reduce((accumulator, currentVal, currentIndex) => {
    console.log('reduce: ',accumulator,currentVal, currentIndex )
});

/**
 * 排序
 * @type {this}
 */
let sort = arr.sort((a, b)=>{return b-a});
console.log('sort: ', sort)


/**
 * 反转
 * @type {number[]}
 */
let reverse = arr.reverse();
console.log('reverse: ', reverse);


/**
 * 拼接
 * @type {number[]}
 */
let concat = arr.concat(100, [6, 7, 8], 'string');
console.log('concat: ', concat);

let join = arr.join(" | ");
console.log('join: ', join);

// 报错！！
// let flat = arr.flat(1);
// console.log('flat: ',flat);

let toString = arr.toString();
console.log('toString: ', toString);

/**
 * 替换
 * @type {this}
 */
let copyWithin = arr.copyWithin(0, 1, 3);
console.log('copyWithin: ', copyWithin);

let fill = arr.fill(0, 1, 3);
console.log('fill: ', fill);

let slice = arr.slice(1, 5);
console.log('slice: ', slice);

