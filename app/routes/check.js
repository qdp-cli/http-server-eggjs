"use strict";

module.exports = ({ router }) => {
    // 健康检查路由, 用于服务器检查服务可用性
    router.get("/ping", async ctx => {
        ctx.succeed();
    });
};
