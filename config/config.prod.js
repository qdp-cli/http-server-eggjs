/* eslint valid-jsdoc: "off" */

"use strict";

module.exports = () => {

    const config = exports = {};

    // 还原static默认配置，使API文档在生产环境无法访问！
    config.static = {};

    // 用户自定义配置
    const userConfig = {
        // myAppName: 'egg'
    };

    return {
        ...config,
        ...userConfig
    };
};
