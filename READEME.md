## 想要实现的命令

> 在命令行中

- workbench install (安装)
- workbench config get/set/remove (配置rc文件(要拉取的模板的仓库地址))


## npm link
需要在 **项目根目录下** 创建一个 `bin/` 目录
，而不是其它地方


## process.argv 进程参数
```
npm i commander
``` 

## rc文件
一种linux配置文件，一般存放于 操作系统当前用户的用户根目录

，在window系统下，可以使用 `cat ~/想要查看的文件` 来查看

以a=b的形式书写配置

可使用 ini 模块对其进行解析

## FAQ

>不是说 **rc文件** 是以 `a=b` 的形式书写的吗，**.babelrc** 为什么打开文件查看是对象的形式?

download project ...(node:7968) UnhandledPromiseRejectionWarning: Unhandled promise rejection (rejection id: 1): Refer
ceError: version is not defined
ode:7968) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections
hat are not handled will terminate the Node.js process with a non-zero exit code.