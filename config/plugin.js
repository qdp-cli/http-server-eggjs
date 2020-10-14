"use strict";

/** @type Egg.EggPlugin */
module.exports = {
    // 开启跨域支持插件
    cors: {
        enable: true,
        package: "egg-cors"
    },
    // prometheus监控插件
    prometheus: {
        enable: true,
        package: "egg-prometheus"
    }
};