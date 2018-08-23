# Web 之旅

## 1. Web 入门

学习 MDN 的教程 [《Web 入门》](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web) 教程。要求：

* 《安装基础软件》 只需了解加即可，我们使用 [Visual Studio Code](../tools/editer.md#visual-studio-code) 作为代码编辑器，Chrome 作为浏览器，使用 Nginx 作为 Web 服务器。
* 《你的网站看起来是什么样的？》中的<图像>部分，可以使用 https://cn.bing.com/images/ 作为图片搜索的网站，<字体>部分可以忽略。
* 《发布网站》只需了解下即可。
* 教程中指向外部内容的链接，扩展阅读、延伸阅读系列，都无需学习。
* 除上述之外的内容，都需要学习。

:::tip 练习
在自己的代码仓库中，建立 `test-site` 的目录，跟着教程，把教程中要求练习的代码，提交到此目录下。按教程要求，本教程学习完后的练习的样子应该是这样的： 
![test](/web-tour/images/1.png)
:::

:::warning 注意
教程中练习的代码不允许复制粘贴，请一个个字母敲出来，这样会比较深刻。为节省时间，教程中大段的文字可以复制粘贴。之后的练习练习，都采用此规则。
:::

## 2. HTML

学习 MDN 的 [《HTML -- 构建 Web》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML) 教程。要求：
* 《HTML 介绍》 全部内容。 完成练习 [《标记一封信》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)、[《结构化一个页面的内容》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)。
* 《多媒体与嵌入》，只需学习 [<HTML 中的图片>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)。
* 《HTML 表格》，全部内容。完成练习 [《Assessment: Structuring planet data》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Structuring_planet_data)。
* 《HTML 表单》，只需学习 [<HTML表单指南>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms)、[<您的首个 HTML表单>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Your_first_HTML_form)、[<如何构建 HTML 表单>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)、[<原生表单部件>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets)。

将本次练习提交到自己的代码仓库的 `html-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

## 3. CSS

学习 MDN 的 [《CSS -- 设计 Web》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) 教程。要求：

* 《CSS介绍》，[<选择器>](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Selectors) 部分，只需学习 [<简单选择器>](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)。<属性选择器>、<伪类和伪元素>、<组合器和多用选择器>，不作要求。 这一章节，其余部分都需要学习。完成练习 [《基本的CSS理解》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension)。
* 《样式化文字》，全部内容。完成练习 [《排版社区大学首页》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Typesetting_a_homepage)。
* 《样式化区块》，全部内容。完成练习 [《创建精美的信纸》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)。
* 《CSS 排版概述》，不做要求。

以上练习提交到自己的代码仓库中 `css-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

:::tip 综合练习
实现登陆、注册页。具体页面草图如下：

* [登录页](/web-tour/images/2.png)
* [注册页](/web-tour/images/3.png)

要求：

1. **纯手工打造**页面的 HTML、CSS，不允许使用第三方类库。
2. 页面的色调，不做要求，可自由发挥 。
3. 头部导航条，宽度 100%，全屏撑满。

将本次练习提交到自己的代码仓库 `html-css-exercise` 目录。
:::

## 4. Javascript

学习 MDN 的 [《JavaScript — 用户端动态脚本》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) 教程。要求：

* 《JavaScript 第一步》，全部学习。完成练习 [《蠢萌故事生成器》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。
* 《JavaScript 基础要件》，全部学习。完成练习 [《相片走廊》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。
* 《JavaScript 对象介绍》，全部学习。完成练习 [《实践对象构造》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_building_practice)、 [《向“弹跳球”演示程序添加新功能》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/%E5%90%91%E2%80%9C%E5%BC%B9%E8%B7%B3%E7%90%83%E2%80%9D%E6%BC%94%E7%A4%BA%E7%A8%8B%E5%BA%8F%E6%B7%BB%E5%8A%A0%E6%96%B0%E5%8A%9F%E8%83%BD)。
* 《客户端网页 API》，只需学习 [<Web API简介>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)、[<操作文档>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)、[<从服务器获取数据>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)。
* 将本次练习提交到自己的代码仓库的 `javascript-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

## 5. jQuery

* 学习廖雪峰的 [《JavaScript教程》](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499993118b8173572625b4afe93a8b19dd707ea1d000) 中的 jQuery章节 。
* 学习 [《jQuery插件——Validation Plugin》](https://www.imooc.com/learn/385)。

:::tip 练习
在自己的代码仓库中，创建目录 `jquery-execrise`，复制 `html-css-exercise` 练习的代码到此目录下。使用 [jquery-validation](https://jqueryvalidation.org/) 给登陆、注册页面加上表单校验，具体校验规则见草图：

* [登录页](/web-tour/images/4.png)
* [注册页](/web-tour/images/5.png)
:::

## 6. Bootstrap

学习 [Bootstrap](http://code.z01.com/v4/docs/) 官网教程。

:::tip 练习

用 Bootstrap 实现以下页面，见草图：

* [登陆页](/web-tour/images/4.png)
* [注册页](/web-tour/images/5.png)
* [用户管理页](/web-tour/images/6.png)
* [用户添加模块模态框](/web-tour/images/7.png)
* [用户信息编辑模态框](/web-tour/images/8.png)
* [用户详情显示模态框](/web-tour/images/9.png)
* [我的设置页](/web-tour/images/10.png)

需要用到栅格系统、Modal、Table、Form、Tab、Button 等组件。将本次练习提交到自己的代码仓库 `bootstrap-exercise` 目录。
:::

## 7. 前端编码规范

学习：

* [谷歌 HTML/CSS 规范](https://segmentfault.com/a/1190000007023192)[[英文版]](https://google.github.io/styleguide/htmlcssguide.html)
* [Airbnb JavaScript Style Guide(ES5版)](https://github.com/sivan/javascript-style-guide/blob/master/es5/README.md)

## 8. PHP 语言基础
在学习 PHP 之前，需先搭建 PHP 开发环境，参见 [《PHP开发环境搭建》]()。下面列出了 PHP 入门第一步需要掌握的内容，**请边学习边实践**。

简介：

* [PHP 是什么？](http://php.net/manual/zh/intro-whatis.php)
* [PHP 能做什么？](http://php.net/manual/zh/intro-whatcando.php)

简明教程：

* [第一个PHP页面](http://php.net/manual/zh/tutorial.firstpage.php)
* [实用的脚本](http://php.net/manual/zh/tutorial.useful.php)
* [处理表单](http://php.net/manual/zh/tutorial.forms.php)

语言参考：

* [基本语法](http://php.net/manual/zh/language.basic-syntax.php)
* [类型](http://php.net/manual/zh/language.types.php)
* [变量](http://php.net/manual/zh/language.variables.php)
* [常量](http://php.net/manual/zh/language.constants.php)
* [表达式](http://php.net/manual/zh/language.expressions.php)
* [运算符](http://php.net/manual/zh/language.operators.php)
* [流程控制](http://php.net/manual/zh/language.control-structures.php)
* [函数](http://php.net/manual/zh/language.functions.php)
* [预定义变量](http://php.net/manual/zh/reserved.variables.php)
* [Session](http://php.net/manual/zh/session.examples.basic.phps)

函数参考：

* [字符串处理函数](http://php.net/manual/zh/ref.strings.php) chr, echo, explode, implode, lcfirst, ltrim, nl2br, print, rtrim, sprintf, str_ireplace, str_split, strip_tags, stripos, strlen, strpos, strtolower, strtoupper, substr, trim, ucfirst
* [数组处理函数](http://php.net/manual/zh/book.array.php) array_key_exists, array_keys, array_merge, array_pop, array_push, array_rand, array_replace, array_search, array_shift, array_values, count, in_array, ksort, list, shuffle, sort
* [日期/时间函数](http://php.net/manual/zh/ref.datetime.php) date, time, strtotime
* [文件操作函数](http://php.net/manual/zh/ref.filesystem.php) basename, chmod, chown, fopen, copy, delete, dirname, fclose, feof, fgetc, fgets, file_exists, file_get_contents, file_put_contents, filesize, fopen, fputs, fread, fwrite, is_dir, is_executable, is_file, is_readable, is_writable, mkdir, pathinfo, realpath, rename, rmdir, unlink

:::tip 练习
下载 [php-basic-exercise.zip](/web-tour/files/php-basic-exercise.zip)，解压到自己的代码仓库下 `php-basic-exercise` 目录。
具体要求，见代码目录下的 README.md 文件。
:::

## 9. PHP 面向对象基础

传统的面向过程编程，通常是将任务视为一系列的顺序指令或者一条条操作步骤，便于理解，但当项目规模越来越大时维护和重用会很困难，面向对象（Object Oriented），则强调对任务进行抽象，抽象出对象以及对象的状态和行为，映射到程序模型中即：类、实例、方法、属性、各种数据结构。面向对象可细分为三个方面：

* 面向对象分析（OOA, Object Oriented Analysis）
* 面向对象设计（OOD, Object Oriented Design）
* 面向对象编程（OOP, Object Oriented Programming）

学习以下内容：

* [面向对象入门](https://www.imooc.com/learn/887)。
* [PHP类与对象](http://php.net/manual/zh/language.oop5.php)：仅学习“简介、基本概念、属性、类常量、自动加载类、构造函数和析构函数、访问控制、对象继承、范围解析操作符、抽象类、对象接口、重载、类型约束”部分即可。
* [《PHP 异常处理》](http://www.w3school.com.cn/php/php_exception.asp)

拓展了解：

* [面向对象程序设计](https://zh.wikipedia.org/wiki/%E9%9D%A2%E5%90%91%E5%AF%B9%E8%B1%A1%E7%A8%8B%E5%BA%8F%E8%AE%BE%E8%AE%A1)

:::tip 练习
在自己的代码仓库下，新建目录 `php-exception-exercise`；将本节学习过程中的练习代码提交到此目录下。
:::

## 10. MVC 模式简介

MVC 模式是软件工程中的一种架构模式，它把软件系统分成三个基本部分：模型（Model）、视图（View）、控制器（Controller），此模式通过对业务实现进行拆分解耦合，方便了拓展、维护、复用。

学习以下内容：

* [《谈谈MVC模式》](http://www.ruanyifeng.com/blog/2007/11/mvc.html)
* [《MVC理解》](http://www.digpage.com/mvc.html)

拓展了解：

* [MVC模式](https://zh.wikipedia.org/wiki/MVC)

:::tip 练习

实现简易版的 MVC 模式，改写上一个练习 `php-basic-exercise` 的代码，基于 MVC 模式实现，并将上一个练习中的 `include/functions` 实现的函数，改写为类的方法。

步骤：

1. 新建 `php-mvc-exercise` 目录，复制 `php-basic-exercise` 的代码到此目录中。
2. 新建 `index.php` 文件，作为所有页面的入口文件，各个页面的入口地址为：
    1. 登陆页：`index.php?controller=auth&action=login`
    2. 退出：`index.php?controller=auth&action=logout`
    3. 注册页：`index.php?controller=register&action=index`
    4. 用户管理页：`index.php?controller=user&action=index`
    5. 添加用户模态框：`index.php?controller=user&action=addModal`
    6. 编辑用户模态框：`index.php?controller=user&action=editModal`
    7. 删除用户：`index.php?controller=user&action=delete`
    8. 我的设置页：`index.php?controller=my&action=settings`
3. 实现 `index.php` 的逻辑：
    1. 从 $_GET 中获取 controller 和 action 两个参数；
    2. 根据 controller 参数，载入相应的 Controller 文件，并实例化 Controller 对象 `$controller`；
    3. 调用 `$controller` 相应的 action 方法。
4. 在子目录 `classes` 下，创建 `auth-controller.class.php`、`register-controller.class.php`、`user-controller.class.php`，分别实现 `AuthController`、`RegisterController`、`UserController`，代码逻辑大致如下：

``` php
<?php
class AuthController
{
    public function loginAction()
    {
        // @todo 登陆逻辑
    }

    public function logoutAction()
    {
        // @todo 退出逻辑
    }
}
```

5. 将之前的代码，迁移到各个 Action 下。
6. 在 `classes` 子目录下，新建 `user-model.class.php`，把对 `user.txt` 的增删改查的逻辑封装到 `UserModel` 类。
7. 改写 `includes/functions.php` 中的函数，为类的方法，每个类一个文件，文件名以 `.class.php` 结尾，放到子目录 `classes` 下。
8. 使用异常(Exception)，改写错误处理机制，并使用 `set_exception_handler` 函数，设置全局异常处理机制。
:::
