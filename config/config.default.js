/* eslint valid-jsdoc: "off" */

"use strict";

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
    /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + "_1586398327868_5644";

    // add your middleware config here
    config.middleware = [ "errorHandler" ];

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

    // add your user config here
    const userConfig = {
        // myAppName: 'egg' 
    };

    return {
        ...config,
        ...userConfig
    };
};
