"use strict";
// app.js
class AppBootHook {
    constructor(app) {
        this.app = app;
    }

    configWillLoad() {
        // 例如：把statusCode赋值在app的constant命名下面
        const fs = require("fs");
        let aConstantFile = [];
        try {
            aConstantFile = fs.readdirSync("./app/constant/");
        } catch (e) {}
        this.app.constant = {};
        const getKeyName = (name) => {
            return name.replace(/\_(\w)/g, function (all, letter) {
                return letter.toUpperCase();
            }).split(".")[0];
        }
        aConstantFile.forEach(itemPath => {
            const keyName = getKeyName(itemPath);
            this.app.constant[keyName] = require(`./app/constant/${itemPath}`);
        })
    }

    async didLoad() {
        // 所有的配置已经加载完毕
        // 可以用来加载应用自定义的文件，启动自定义的服务

        // 例如：创建自定义应用的示例
        // const errorCounter = new this.app.prometheus.Counter({
        //     name: "error_request_total",
        //     help: "number of requests to a route",
        //     labelNames: [ "method" ],
        // });

        // this.app.monitor = {
        //     errorCounter
        // };
    }
}

module.exports = AppBootHook;
