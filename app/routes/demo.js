"use strict";

module.exports = ({ router, controller }) => {
    // 例子演示
    router.get("/api/v1/demo", controller.demo.sayHello);
};
