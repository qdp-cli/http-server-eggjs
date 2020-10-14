"use strict";

const Service = require("egg").Service;

class DemoService extends Service {

    async sayHello(body) {
        return {
            code: 0,
            data: "hello!"
        }
    }

}

module.exports = DemoService;
