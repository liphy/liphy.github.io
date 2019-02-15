---
title: 利用KindleEar搭建免费的Kindle新闻推送系统
date: 2018-01-04 22:52:02
tags:
  - blog
  - github
  - Hexo
---

2180104 Thu


使用 Hexo + Github Pages 搭建个人博客

参考 
1.  [手把手教你使用Hexo + Github Pages搭建个人独立博客](https://linghucong.js.org/2016/04/15/2016-04-15-hexo-github-pages-blog/)

2. [Hexo 3.1.1 静态博客搭建指南](https://note.leodev.me/2016/09/01/Hexo-3-1-1-Staic-Blog-Build-Guide/)


# 系统环境配置

要使用Hexo，需要在你的系统中支持Nodejs以及Git，如果还没有，那就开始安装吧！

## 安装Node.js

[下载Node.js](https://nodejs.org/download/)
参考地址：[安装Node.js](http://www.w3cschool.cc/nodejs/nodejs-install-setup.html)

## 安装Git

下载地址：[http://git-scm.com/download/](http://git-scm.com/download/)

## 安装Hexo


```
$ cd d:/liphy-blog
$ npm install hexo-cli -g
$ hexo init blog # blog 为 liphy-blog 下的子目录		
$ cd blog
$ npm install
$ hexo g # 或者hexo generate
$ hexo s # 或者hexo server，可以在http://localhost:4000/ 查看
```

这里有必要提下Hexo常用的几个命令：

1.  hexo generate (hexo g) 生成静态文件，会在当前目录下生成一个新的叫做public的文件夹
2.  hexo server (hexo s) 启动本地web服务，用于博客的预览
3.  hexo deploy (hexo d) 部署播客到远端（比如github, heroku等平台）

另外还有其他几个常用命令：


```
$ hexo new "postName" #新建文章
$ hexo new page "pageName" #新建页面

```

常用简写


```
$ hexo n == hexo new
$ hexo g == hexo generate
$ hexo s == hexo server
$ hexo d == hexo deploy
```

常用组合

```
$ hexo d -g #生成部署
$ hexo s -g #生成预览

```
# 主题设置

## 	安装主题

```
$ hexo clean

$ git clone https://github.com/iissnan/hexo-theme-next blog/themes/next

```
## 启用主题

修改Hexo目录下的_config.yml配置文件中的theme属性，将其设置为next。

## 更新主题

更改主题后必须 **生成、更新：	**

```
$ cd themes/yilia

$ git pull

$ hexo g # 生成

$ hexo s # 启动本地web服务器

```


现在我们打开[http://localhost:4000/](http://localhost:4000/) 可以看到有了 next 主题的博客：		


![Screenshot-2018-1-4 Hexo]($res/Screenshot-2018-1-4%20Hexo.png)


# Github Pages 设置

## 创建自己的 Github Pages

略 liphy.github.io

[一步步在GitHub上创建博客主页 全系列](http://pchou.info/web-build/2013/01/03/build-github-blog-page-01.html)

[如何搭建一个独立博客——简明Github Pages与Hexo教程](http://www.jianshu.com/p/05289a4bc8b2)

# 部署 Hexo 到 Github Pages

首先需要明白所谓部署到github的原理。

1.  之前步骤中在Github上创建的那个特别的repo（jiji262.github.io）一个最大的特点就是其master中的html静态文件，可以通过链接 liphy.github.io 来直接访问。

2.  Hexo -g 会生成一个静态网站（第一次会生成一个public目录），这个静态文件可以直接访问。

3.  需要将hexo生成的静态网站，提交(git commit)到github上。

明白了原理，怎么做自然就清晰了。


# 使用hexo deploy部署


hexo deploy可以部署到很多平台，具体可以[参考这个链接](https://hexo.io/docs/deployment.html). 如果部署到github，需要在配置文件_config.xml中作如下修改：	
	
```
deploy:

  type: git

  repo: git@github.com:jiji262/jiji262.github.io.git

  branch: master

```
然后在命令行中执行

```
hexo d
```
即可部署。



---------

注意 问题 

# hexo问题

> 1.  先`hexo g`再执行`hexo d`布署，也可使直接用`hexo d -g`

> 1.  hexo 更新到3.0之后，deploy的type 的github需要改成`git`

> 1.  在执行 hexo deploy 后,出现 error deployer not found:git 的错误处理

输入代码：

`npm install hexo-deployer-git --save`


