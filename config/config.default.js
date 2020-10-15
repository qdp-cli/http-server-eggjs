/* eslint valid-jsdoc: "off" */

"use strict";
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    const path = require("path");
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1586398327868_5644";

    // 添加中间件配置
    config.middleware = [ "errorHandler" ];

    // API文档配置(用于测试环境和开发环境查看API页面)
    config.static = {
        prefix: "/docs",
        dir: path.join(appInfo.baseDir, "docs")
    };

    // 日志切割配置
    config.logrotator = {
        // filesRotateByHour: [],           // list of files that will be rotated by hour
        // hourDelimiter: '-',              // rotate the file by hour use specified delimiter
        // filesRotateBySize: [5],           // list of files that will be rotated by size
        // maxFileSize: 50 * 1024 * 1024,   // Max file size to judge if any file need rotate
        // maxFiles: 10,                    // pieces rotate by size
        // rotateDuration: 60000,           // time interval to judge if any file need rotate
        maxDays: 7 // keep max days log files, default is `31`. Set `0` to keep all logs
    };

    // prometheus监控配置
    config.prometheus = {
        scrapePort: 3000,
        scrapePath: "/metrics"
    };

    // 允许跨域配置
    config.security = {
        csrf: {
            enable: false,
            ignoreJSON: true
        }
    };

    // 允许跨域配置
    config.cors = {
        origin: "*",
        allowMethods: "GET,HEAD,PUT,POST,DELETE,PATCH"
    };

    // 用户自定义配置
    const userConfig = {
        // myAppName: 'egg'
    };

    return {
        ...config,
        ...userConfig
    };
};
