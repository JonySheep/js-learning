async function async1() {
    console.log("async1 start");
    await  async2();
    console.log("async1 end");

}
async  function async2() {
    console.log( 'async2');
}
console.log("script start");
setTimeout(function () {
    console.log("settimeout");
},0);
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
/**
 * script start
 * settimeout??
 * async1 start
 * async2
 * async1 end
 * promise1
 * promise2
 */


var foo='foo';
var bar='bar';
function myFunc() {
    console.log(foo+bar) ;
}
myFunc();
