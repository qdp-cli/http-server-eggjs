# zcdn-server

### 项目结构

    .
    ├── README.md
    ├── app
    │   ├── constant
    │   │   └── statusCode.js
    │   ├── controller
    │   │   └── home.js
    │   ├── extend
    │   │   └── context.js
    │   ├── model
    │   ├── public
    │   ├── router.js
    │   └── routes
    │       └── check.js
    ├── commitlint.config.js
    ├── config
    │   ├── config.default.js
    │   └── plugin.js
    ├── jsconfig.json
    ├── test 
    ├── logs
    ├── package.json
    └── package-lock.json


### 测试部署

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### 生产部署

```bash
$ npm start
$ npm stop
```