"use strict";

/**
 * @param { Egg.Application } app - egg application
 */
module.exports = app => {
    // 健康检查路由表
    require("./routes/check")(app);
    // 用户相关路由表
    require("./routes/demo")(app);
};
