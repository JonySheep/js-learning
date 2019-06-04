// console.log('1');
//
// setTimeout(function () {
//     console.log('2');
// }, 100);
//
// console.log('3');
//
// async function test() {
//     console.log('4');
//     await Promise.resolve(); // 这个会延迟多久？
//     console.log('5');
// }
// test();
//
// var a = new Promise(function (resolve) {
//     setTimeout(() => {
//         resolve();
//         console.log('6');
//     }, 0);
// });
//
// console.log('7');
//
// a.then(function () {
//     console.log('8');
// });

//1、3、4、7、6、8、5、2

// answer：1、3、4、7、5、6、8、2

var promise1 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log('p1!');
        resolve('promise1');

    }, 2000)
});
var promise2 = new Promise(function(resolve, reject) {
    setTimeout(()=>{
        console.log('p2!');
        resolve('promise2');
        // reject();
    }, 0)
});
// race--赛跑，返回跑得更快的结果
Promise.race([promise1, promise2]).then((value)=>{
    console.log(value);
}).catch(()=>{
    console.log('error!')
});
Promise.all([promise1, promise2]).then((value)=>{
    console.log(value);
}).catch(()=>{
    console.log('error!')
});