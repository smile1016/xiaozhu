# xiaozhu

## 框架搭建：

### 前端

#### vue cli搭建框架

vue create xiaozhu-fe

Manually select features

babel、router、vuex、css pre-processers

输入n 使用(hash)

sass/scss(with node-sass)

in package.json

n(不存为预设)

创建结束后切入目录 yarn serve

#### ElementUI安装和使用



### 后端

### 阿里云部署mysql

ssh root@101.37.30.53

⼀、配置Mysql扩展源

  rpm -ivh http://repo.mysql.com/yum/mysql-5.7-community/el/7/x86_64/mysql57-community-release-el7-10.noarch.rpm

⼆、yum安装mysql

yum install mysql-community-server -y

三、启动Mysql，并加⼊开机⾃启

 systemctl start mysqld

systemctl enable mysqld

四、使⽤Mysq初始密码登录数据库

 mysql -uroot -p$(awk '/temporary password/{print $NF}' /var/log/mysqld.log)

五、修改数据库密码(公网不要设置)

数据库默认密码规则必须携带⼤⼩写字⺟、特殊符号，字符⻓度⼤于8否则会报错。

因此设定较为简单的密码时需要⾸先修改set global validate_password_policy和_length参数值。

mysql> set global validate_password_policy=0;

Query OK, 0 rows affected (0.00 sec)

mysql> set global validate_password_length=1;

Query OK, 0 rows affected (0.00 sec)

六、修改密码

set password for root@localhost = password('Gp16@123456')

七、登录测试

先退出

mysql -uroot -p123456（root,123456是用户名和密码）

show databases;（查看原有数据库）