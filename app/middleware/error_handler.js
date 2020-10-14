/* eslint valid-jsdoc: "off" */
"use strict";
// const statusCode = require("../constant/status_code.js");

module.exports = () => {
    return async (ctx, next) => {
        const { statusCode } = ctx.app.constant;
        try {
            await next();
        } catch (e) {
            try {
                // 处理程序正常抛出的错误
                const errJson = JSON.parse(e.message);
                ctx.body = Object.assign(statusCode(errJson.code));
            } catch (_) {
                // 处理程序异常抛出的错误
                ctx.logger.error(e.message);
                ctx.body = Object.assign(statusCode("-1"), { data: e.message });
            }
        }
    };
};
