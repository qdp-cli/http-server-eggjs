/* eslint valid-jsdoc: "off" */
"use strict";

module.exports = code => {

    const ERROR_CODE = {
        0: "success", // 成功状态
        "-1": "syntax error", // 语法错误
        "-2": "permission error!", // 参数错误
        "-3": "parameter error!", // 参数错误
        "-1000": "the username already exists, please retry!", // 用户名已存在
        "-1001": "user information update failed!",
        "-1002": "user information remove failed!",
        "-1003": "incorrect username or password!",
        "-1004": "user information add failed!",
        "-1005": "check to see if the user exists!",
        "-1006": "the password was not modified!",
        "-1100": "the project already exists, please retry!",
        "-1101": "project information update failed!",
        "-1102": "project information remove failed!",
        "-1103": "please check whether the project belongs to you!",
        "-1200": "the secret key error!"
    };

    return {
        code: parseInt(code),
        message: ERROR_CODE[String(code)],
        currentTime: new Date().getTime()
    };

};
