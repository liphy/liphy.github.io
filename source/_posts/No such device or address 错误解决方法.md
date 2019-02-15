---
title: 常见错误解决方法
date: 2018-04-03 22:52:02
tags:
  - Hexo
---



1. 如果出现以下错误：

```
bash: /dev/tty: No such device or address
```

解决方法：

_config.yml 设置：

```
deploy:
    type: git
    repo: git@github.com:[username]/[username].github.io.git
    branch: master
```

