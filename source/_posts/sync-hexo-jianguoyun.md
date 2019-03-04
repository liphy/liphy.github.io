---
title: 多端同步 Hexo
date: 2018-04-26 20:31:00
tags:
  - blog
  - github
  - Hexo
  - 同步
---



使用 Hexo + Github Pages 搭建个人博客，如果想在不同的终端写博客，就需要保证终端的配置和静态文件保持一致，否者在多端执行 hexo d -g 后会出现不一样的情况。

我的同步方案是使用坚果云同步整个 blog 文件夹，这样能保持多端修改能够自动同步。

有大神说建个 repo，待我 git 学习好了再试。



2019年2月15日 uodate:

照着这篇文章搞定了：[hexo博客同步管理及迁移](https://www.jianshu.com/p/fceaf373d797)

步骤：

在原电脑上操作，给 [username.github.io](https://link.zhihu.com/?target=http%3A//username.github.io) 博客仓库创建hexo分支，并设为默认分支。（具体可参考[这篇文章](https://link.zhihu.com/?target=https%3A//www.jianshu.com/p/0b1fccce74e0)的操作，有图示）

如果未给你的 github 账号添加过当前电脑生成的 ssh key，需要创建 ssh key 并添加到 github 账号上。（如何创建和添加 [github help](https://link.zhihu.com/?target=https%3A//help.github.com/articles/connecting-to-github-with-ssh/) 就有）

随便一个目录下，命令行执行 git clone git@github.com:username/username.github.io.git 把仓库 clone 到本地。

显示所有隐藏文件和文件夹，进入刚才 clone 到本地的仓库，删掉除了 .git 文件夹以外的所有内容。

命令行 cd 到 clone 的仓库，git add -A ，git commit -m "--"，git push origin hexo，把刚才删除操作引起的本地仓库变化更新到远程，此时刷新下 github 端博客hexo分支，应该已经被清空了。

将上述 .git 文件夹复制到本机本地博客根目录下（即含有 themes、source 等文件夹的那个目录），现在可以把上述 clone 的本地仓库删掉了，因为它已经没有用了，本机博客目录已经变成可以和 hexo 分支相连的仓库了。

将博客目录下 themes 文件夹下每个主题文件夹里面的 .git .gitignore 删掉。

 cd 到博客目录，git add -A ，git commit -m "--"，git push origin hexo，将博客目录下所有文件更新到 hexo 分支。如果上一步没有删掉 .git .gitignore，主题文件夹下内容将传不上去。至此原电脑上的操作结束。

在新电脑上操作，先把新电脑上环境安装好，node.js、git、hexo，ssh key 也创建和添加好。

选好博客安装的目录， git clone git@github.com:username/username.github.io.git 。

cd 到博客目录，npm install、hexo g && hexo s，安装依赖，生成和启动博客服务。正常的话，浏览器打开 localhost:4000 可以看到博客了。至此新电脑操作完毕。

**以后无论在哪台电脑上，更新以及提交博客，依次执行，git pull，git add -A ，git commit -m "--"，git push origin hexo，hexo clean && hexo g && hexo d 即可。**