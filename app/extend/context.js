"use strict";

module.exports = {
    failure(code = -1) {
        this.body = this.app.constant.statusCode(code);
    },
    succeed(data) {
        const body = this.app.constant.statusCode("0");
        if (data) {
            body.data = data;
        }
        this.body = body;
    }
};
