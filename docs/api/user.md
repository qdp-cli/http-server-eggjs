## 用户登录接口

请求方式：`POST`

PATH: `/api/v1/platform/user/login`

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|name|是|string|用户名|
|password|是|string|密码(加密后)|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592553808431,
    "data": {
        "userId": 3,
        "name": "佟领2",
        "gender": "男",
        "role": "admin",
        "mobile": "13335677368",
        "email": "tongling@tongling.com",
        "department": "技术中心",
        "position": "开发",
        "token": "c52377790f0f7a074d05c51a600e96f8d0833083bfe1bd04ecdd1c232c9effd0",
        "avatar": "http://p.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bsyn5cdM9vpib3FKjv3G7KEyjCF3C7HbRziawFcicuN2GOYJjiaZ9WzxaN4g/0"
    }
}
```

返回数据示例(失败)：
```json
{
    "code": -1005,
    "message": "check to see if the user exists!",
    "currentTime": 1592553907263
}
```

## 用户登出接口

请求方式：`POST`

PATH: `/api/v1/platform/user/logout`

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|userId|是|string|用户ID|
|password|是|string|密码(加密后)|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592553808431
}
```

返回数据示例(失败)：
```json
{
    "code": -1005,
    "message": "check to see if the user exists!",
    "currentTime": 1592553907263
}
```


## 用户添加接口

请求方式：`POST`

PATH: `/api/v1/platform/user/add`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|name|是|string|用户名|
|role|是|number|角色 1-管理员 2-普通用户|
|gender|是|string|性别-男-女|
|department|是|string|部门|
|position|是|string|职位|
|email|是|string|邮箱|
|mobile|是|string|手机号|
|password|是|string|密码(加密后)|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592552418152
}
```

返回数据示例(失败)：
```json
{
    "code": -1000,
    "message": "the username already exists, please retry!",
    "currentTime": 1592552319247
}
```


## 更新用户信息接口

请求方式：`POST`

PATH: `/api/v1/platform/user/update`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|userId|是|string|用户ID|
|name|否|string|用户名|
|role|是|number|角色 1-管理员 2-普通用户|
|gender|否|string|性别-男-女|
|department|否|string|部门|
|position|否|string|职位|
|email|否|string|邮箱|
|mobile|否|string|手机号|
|password|否|string|密码(加密后)|
|avatar|否|string|用户头像|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592552418152
}
```

返回数据示例(失败)：
```json
{
    "code": -1001,
    "message": "user information update failed!",
    "currentTime": 1592553022437
}
{
    "code": -1005,
    "message": "check to see if the user exists!",
    "currentTime": 1592553054268
}
```


## 删除用户信息接口

请求方式：`POST`

PATH: `/api/v1/platform/user/remove`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|userId|是|string|用户ID|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592552418152
}
```

返回数据示例(失败)：
```json
{
    "code": -1005,
    "message": "check to see if the user exists!",
    "currentTime": 1592553054268
}
```


## 查询用户信息接口

请求方式：`GET`

PATH: `/api/v1/platform/user/list`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|page|是|number|页面|
|pageSize|是|number|每页条数|


返回

|参数|是否必须|类型|描述|
|:-:|:-:|:-:|:-:|
|code|是|number|请求状态|
|currentTime|是|number|唯一标识|
|data|是|json|主体内容|
|message|是|json|接口信息|


返回数据示例(成功)：
```json
{
    "code": 0,
    "message": "success",
    "currentTime": 1592553500604,
    "data": {
        "list": [
            {
                "userId": 3,
                "name": "佟领2",
                "role": "admin",
                "gender": "男",
                "mobile": "13335677368",
                "email": "tongling@tongling.com",
                "department": "技术中心",
                "position": "开发",
                "avatar": "http://p.qpic.cn/wwhead/duc2TvpEgSTPk74IwG7Bsyn5cdM9vpib3FKjv3G7KEyjCF3C7HbRziawFcicuN2GOYJjiaZ9WzxaN4g/0",
                "createdAt": "2020-06-19T07:40:18.146Z",
                "updatedAt": "2020-06-19T07:40:18.146Z"
            }
        ],
        "page": 1,
        "pageSize": 1,
        "totalCount": 1
    }
}
```


