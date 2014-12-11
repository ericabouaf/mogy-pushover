

var Pushover = require('node-pushover');

module.exports = function (input, config, cb) {

    var push = new Pushover({
        token: config.apptoken,
        user: input.userkey
    });

    push.send(input.title, input.msg, cb);
};
