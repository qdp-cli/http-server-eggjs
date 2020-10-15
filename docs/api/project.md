
## 项目添加接口

请求方式：`POST`

PATH: `/api/v1/platform/project/add`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|name|是|string|项目名称|
|userId|是|string|创建人UID|
|firmList|是|array|CDN厂商列表|


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
    "code": -1100,
    "message": "the project already exists, please retry!",
    "currentTime": 1592826484141
}
```



## 项目修改接口

请求方式：`POST`

PATH: `/api/v1/platform/project/update`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|id|是|string|项目ID|
|userId|是|string|创建人UID|
|name|否|string|项目名称|
|firmList|否|array|CDN厂商列表|


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
    "code": -1101,
    "message": "project information update failed!",
    "currentTime": 1592826684394
}
{
    "code": -1103,
    "message": "please check whether the project belongs to you!",
    "currentTime": 1592827038837
}
```


## 项目删除接口

请求方式：`POST`

PATH: `/api/v1/platform/project/update`

请求头:

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|token|是|string|用户token(权限校验)|

请求参数: JSON格式

|参数|是否必须|类型|描述|
|-|:-:|:-:|-|
|id|是|string|项目ID|
|userId|是|string|创建人UID|


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
    "code": -1102,
    "message": "project information remove failed!",
    "currentTime": 1592826684394
}
{
    "code": -1103,
    "message": "please check whether the project belongs to you!",
    "currentTime": 1592827038837
}
```


## 查询用户信息接口

请求方式：`GET`

PATH: `/api/v1/platform/project/list`

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
    "currentTime": 1592827760412,
    "data": {
        "list": [
            {
                "id": "5ef09a2fcf0ce00dcd30ca00",
                "name": "龙卷风6",
                "userId": 1,
                "userName": "佟领3",
                "firmList": [
                    {
                        "firm": "uc",
                        "ak": "555"
                    }
                ],
                "createdAt": "2020-06-22T11:46:55.070Z",
                "updatedAt": "2020-06-22T11:46:55.070Z"
            }
        ],
        "page": 2,
        "pageSize": 1,
        "totalCount": 2
    }
}
```