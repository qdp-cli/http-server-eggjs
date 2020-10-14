#!/bin/bash

mysql_name=zcdn-mysql
mysql_version=5.7
mysql_image=mysql:$mysql_version
mysql_port=3308

redis_name=zcdn-redis
redis_version=5.0.5
redis_image=redis:$redis_version
redis_port=6381

install_mysql () {
    [ ! "$(docker images | grep mysql | grep $mysql_version)" ] && docker pull $mysql_image
    [ "$(docker ps -a | grep $mysql_name)" ] && docker rm -vf $mysql_name

    if [[ `uname` = "Linux" ]] || [[ `uname` = "Darwin" ]]; then
        rm -rf ./docker_volumes/mysql
        mkdir -p ./docker_volumes/mysql
        docker run --name $mysql_name -e TZ=Aisa/Shanghai -e MYSQL_ROOT_PASSWORD=better -p $mysql_port:$mysql_port -d $mysql_image --port=$mysql_port
    else
        docker run --name $mysql_name -e TZ=Aisa/Shanghai -e MYSQL_ALLOW_EMPTY_PASSWORD=yes -p $mysql_port:$mysql_port -d $mysql_image --port=$mysql_port
    fi

    echo "正在启动mysql，请耐心等待..."
    sleep 2
	docker ps -a | grep $mysql_name
}

install_redis () {
    [ ! "$(docker images | grep redis | grep $redis_version)" ] && docker pull $mysql_image
    [ "$(docker ps -a | grep $redis_name)" ] && docker rm -vf $redis_name

    docker run --name $redis_name -p $redis_port:6379 -d $redis_image –requirepass "better"
    echo "正在启动redis，请耐心等待..."
    sleep 2
	docker ps -a | grep $redis_name
}

if [[ $1 = "init" ]]; then
	install_mysql
    # install_redis
    # mock_data
    # npm i -g yarn
    # yarn
elif [[ $1 = "data" ]]; then
    mock_data
else
	echo 'Usage: ./make <command>'
	echo ' '
	echo 'commands: '
	echo '  - install: 安装 redis 和 npm 依赖包'
	echo '  - deploy: 部署 autocert'
	echo '  - data: 初始化数据库'
fi