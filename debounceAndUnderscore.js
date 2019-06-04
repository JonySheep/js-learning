// 防抖和节流

/**
 * 防抖函数
 * @param func 函数
 * @param wait 间隔时间
 */
const debounce = (func, wait = 50) =>{
    let timer = 0;
    return function(...args) {
        if (timer) {clearTimeout(timer)}
        timer = setTimeout(()=>{
            func.apply(this, args)
        }, wait)
    }
};

// 试一下
var count = 0;
function printCount() {
    console.log(count++);
}

debounce(printCount());
debounce(printCount());
debounce(printCount());
setTimeout(()=>{
    debounce(printCount());
}, 100);


/**
 * 节流函数：只执行一次
 * @param func
 * @param wait
 */
const underscore = (func, wait = 50) => {
    var preTime, timeout;

    return function() {
        var now = new Date();

        if (!preTime) {
            // 首次调用
            preTime = now;
        }
        var remain = wait - (now - preTime);

        if (remain <= 0 ) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }

            timeout = setTimeout(()=>{
                func.apply(this,...arguments);
            })

        } else {
            timeout = setTimeout(()=>{}, remain)
        }
    }
}