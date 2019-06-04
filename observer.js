var pubObs = {};
// 发布者
(function(q) {
    var subscribers = {};
    var uid = 0;

    /**
     * 发布函数
     * @param topic
     * @param args
     */
    q.publish = function (topic, args) {
        if (!subscribers[topic]) {
            // 没有这个订阅主题
            return false;
        }

        // 异步执行
        setTimeout(function () {
            var thisTopics = subscribers[topic];
            var len = thisTopics? thisTopics.length: 0;
            while (len--) {
                thisTopics[len].func(topic, args);
            }
        }, 0);
    };

    q.subscribe = function (topic, func) {
        if (!subscribers[topic]) {
            subscribers[topic] = [];
        }

        var token = (++uid).toString();
        subscribers[topic].push({
            token: token,
            func: func
        });
        return token;
    }
})(pubObs);

// 订阅者
pubObs.subscribe('Book', function(topic, data){
    console.log(topic + ': ' + data);
});
pubObs.subscribe('Book', function(topic, data){
    console.log(topic + ': ' + data + '  Congratulations!!!');
});

pubObs.publish('Book', '《白夜行》重新出版啦～')