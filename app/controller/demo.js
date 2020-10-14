"use strict";

const Controller = require("egg").Controller;

class DemoController extends Controller {

    /**
     * @description: demo
     * @return: "hello"
     */
    async sayHello() {
        const body = this.ctx.request.query;
        const payload = await this.ctx.service.demo.sayHello(body);
        console.log(payload)
        if (payload.code) {
            this.ctx.failure(payload.code);
            return false;
        }
        this.ctx.succeed(payload.data);
    }

}

module.exports = DemoController;
