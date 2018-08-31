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

## 11. MySQL 基础 以及 PDO 的使用

* 学习视频教程 [《MySQL 入门》](https://www.jikexueyuan.com/course/627.html)。
* 学习 [《PHP数据库抽象层PDO》](https://www.jikexueyuan.com/course/2546.html)，第5课时 <事务处理>可暂时先不学习。教程中使用的环境为 Windows、Apache，请自行对应到我们的环境 Ubuntu、Nginx。
* 学习 [《数据库操作函数之PDO》](http://php.net/manual/zh/intro.pdo.php)，学习其中的<简介>, <连接与连接管理>, <预处理语句>(存储过程无需学习), <错误与错误处理>, <PDO 类>, <PDOStatement 类>, <PDOException 异常类>。

:::tip 练习

改写 `php-mvc-exercise` 练习，将数据保存到数据库。练习步骤：

1. 创建数据库 `bootcamp`。
2. 创建表 `user`。
3. 创建 `php-db-exercise`，复制 `php-mvc-exercise` 的代码到此目录。
4. 创建 `config.php`，用于配置数据库的参数，代码大致如下：

```php
<?php

return [
    'host' => '127.0.0.1',
    'dbname' => 'bootcamp',
    'user' => 'root',
    'password' => '',
];
```

5. 改写 `UserModel` 类，读取 `config.php` 中的配置，用 PDO 连接数据库，存取数据。
:::

## 12. PHP 命名空间

* 学习 [《命名空间》](http://php.net/manual/zh/language.namespaces.php) 的除FAQ以外的所有内容。
* 学习 [`spl_autoload_register`](http://php.net/manual/zh/function.spl-autoload-register.php) 函数的使用。

:::tip 练习

1. 创建 `php-namespace-exercise` 子目录，复制上一练习中的代码到此目录。
2. 为所有的 `Controller` 添加 `App\Controller` 的命名空间。
3. 为 `Model` 类添加 `App\Model` 的命名空间。
4. 使用 `spl_autoload_register` 函数，注册类的自动载入机制。
:::

## 13. 包管理 Composer

学习 Composer 的中文文档的 [《简介》](https://docs.phpcomposer.com/00-intro.html)、[《基本用法》](https://docs.phpcomposer.com/01-basic-usage.html)、[《库（资源包）》](https://docs.phpcomposer.com/02-libraries.html)。

:::warning Composer 加速配置

由于访问国外服务器比较慢，建议使用使用国内的镜像安装 Composer，并配置 Composer 中国镜像，以加快程序包的下载速度：

```
sudo wget https://dl.laravel-china.org/composer.phar -O /usr/local/bin/composer
sudo chmod a+x /usr/local/bin/composer
composer config -g repo.packagist composer https://packagist.phpcomposer.com
```
:::

:::tip 练习

1. 创建 `php-composer-exercise` 子目录，复制上一练习中的代码到此目录；
2. 在 `php-composer-exercise` 目录下，执行： `composer init`，依次回答一下内容，生成 `composer.json` 配置文件：
```
Package name (<vendor>/<name>): codeages/bootcamp
Description []: (回车)
Author: (回车)
Minimum Stability : (回车)
Package Type: project
License: (回车)
Would you like to define your dependencies :yes
Search for a package: monolog/monolog
Enter the version constraint to require: (回车)
```
3. 创建子目录 `src`。
4. 在 `composer.json` 文件中，增加配置，设置 子目录 `src` 的命名空间为 `App\\`。
5. 调整所有的类的代码文件，放置到 `src` 目录下相应位置。
6. 在 `index.php` 中，引入 `vendor/autoload.php`，利用 Composer Autoload 自动载入类文件。
:::

## 14. Twig 模板引擎

学习 Twig 官方文档：
* [Introduction](https://twig.symfony.com/doc/2.x/intro.html)
* [Installation Twig for Template Designers](https://twig.symfony.com/doc/2.x/templates.html)
* [Twig Reference](https://twig.symfony.com/doc/2.x/) 的 Tags、Filters、Functions、Tests 部分。

:::tip 练习

1. 创建 `php-twig-exercise` 子目录，复制 `php-composer-exercise` 的代码到此目录。
2. 使用 Twig 的方式，修改 `templates` 目录下的模板文件，每个文件以 `.html.twig` 结尾。
3. 创建 `page-base.html.twig`，使用 `extends` 的方式来实现页面代码的重用，并改写原有的页面代码。
4. 创建 `modal-base.html.twig`，使用 `extends` 的方式来实现模态框代码的重用，并改写原有的模态框代码。
:::

## 15. 单元测试
学习：

* [单元测试](https://zh.wikipedia.org/wiki/%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95)
* [PHPUnit 官网文档](https://phpunit.readthedocs.io/zh_CN/latest/)

:::tip 练习

创建 `php-phpunit-exercise` 子目录，复制上一练习中的代码到此目录；
新建 `tests` 目录，在此目录下面，创建单元测试文件，对上一练习中的 Model 类，以及 Util 类中的每个方法，加上单元测试。
:::

## 16. 分层架构
学习：

* [三层(3-tier architecture）】——初次遇见你](https://blog.csdn.net/zt15732625878/article/details/50809170)
* [三层架构，数据层(DAL)、逻辑层(BLL)、表示层(UI)](https://singee77.com/article/386.html)

:::tip 练习

1. 创建 `php-3-tier-exercise` 子目录，复制上一练习中的代码到此目录；
2. 将 `UserModel` 类中的代码拆分为 `UserService`、`UserDao`，`UserDao` 封装访问数据库的接口提供给 `UserService` 调用，`UserService` 封装业务逻辑，给 Controller 调用。
3. 为 `UserService` 和 `UserDao` 编写单元测试。
:::

## 17. 设计模式：单例模式

学习：

* [单例模式](https://zh.wikipedia.org/wiki/%E5%8D%95%E4%BE%8B%E6%A8%A1%E5%BC%8F)
* [PHP 设计模式系列 —— 单例模式（Singleton）](http://laravelacademy.org/post/2599.html)

:::tip 练习

1. 创建 `php-singleton-exercise` 子目录，复制上一练习中的代码到此目录；
2. 创建 PDO 数据库连接的单例类 `App\Component\Database\PDOConnection`，实现以下接口，并编写单元测试：
```php
<?php
namespace App\Component\Database;

interface DbConnection
{
    /**
     * 向表插入数据
     *
     * @param string $table 表名
    * @param array $fields 数据字段
    * @return int 当前插入记录的主键 id 值
    */
    public function insert($table, $fields);

    /**
     * 根据主键 id 更新数据库记录
     *
     * @param string $table 表名
    * @param int $id 需要跟新的记录的 id
    * @param string $fields 需要更新的数据字段
    * @return int 更新的行数
    */
    public function update($table, $id, $fields);

    /**
     * 根据主键 id 删除数据记录
     *
     * @param string $table 表名
    * @param int $id 需要删除的记录的 id
    * @return int 删除的行数
    */
    public function delete($table, $id);

    /**
     * 根据主键 id 查询一行数据
     *
     * @param string $table 表名
    * @param int $id 需要查询的记录的 id
    * @return array|null 数据存在则返回数据数组，不存在则返回 null
    */
    public function get($table, $id);

    /**
     * 根据查询条件查询一行数据
     * 
     * 例如查询用户名为 'lilei' 的用户：
     * $user =  $this->getByField('user', ['username' => 'lilei']);
     *
     * @param string $table 
    * @param string $fields 查询条件的字段
    * @return array|null 数据存在则返回数据数组，不存在则返回 null
    */
    public function getByFields($table, $fields);

    /**
     * 根据查询条件查询多行数据
     * 
     * 例如查询职业为学生，性别为男的第 1~100 个用户数据：
     * $users = $this->findByFields('user', ['job' => 'student', 'gender' => 'male], 0, 100);
     *
     * @param string $table 表名
    * @param array $fields 查询条件
    * @param int $start 查询记录集的开始行数
    * @param int $limit 查询条数
    * @return array 数据存在则返回数据集的数组，不存在则返回空数组
    */
    public function findByFields($table, $fields, $start, $limit);

    /**
     * 根据查询条件查询数据记录的行数
     *
     * @param string $table 表名
    * @param array $fields 查询条件
    * @return int
    */
    public function countByFields($table, $fields);

    /**
     * 获得 PDO 数据库连接对象
     *
     * @return \PDO
    */
    public function getPDO();
}
```

3. 使用 `App\Component\Database\PDOConnection` 类中的方法，替代 `UserModel` 类中的相关数据库查询代码。
:::

## 18. 设计模式：工厂模式

学习设计模式 [《PHP设计模式（一）简单工厂模式 （Simple Factory For PHP）》](https://www.cnblogs.com/wilburxu/p/6086394.html)。

:::tip 练习

1. 创建 `php-factory-exercise` 子目录，复制上一练习中的代码到此目录；
2. 创建 `UserDao` 接口；
3. 创建 `UserDaoFileImpl` 类，使用文件做为数据存储，实现 `UserDao` 的接口。
4. 创建 `UserDaoDbImpl` 类，使用 MySQL 作为数据存储，实现 `UserDao` 的接口。
5. 创建 `UserDao` 的工厂类 `UserDaoFactory，用于创建` `UserDaoFileImpl` 或 `UserDaoDbImpl`。
6. `UserService` 通过 `UserDaoFactory` 创建 `UserDao`，具体创建哪个实现的 Dao，由系统的配置决定。
7. 为新增的每个类写单元测试。
:::

## 19. 控制反转(IoC)
1. 学习 [IoC 感念]()。
2. 学习 [Pimple](https://pimple.symfony.com/)。

:::tip 练习

1. 创建 `php-container-exercise` 子目录，复制上一练习中的代码到此目录；
2. 使用 Pimple Container 管理 Service 、 Dao 类的创建。
:::

## 20. Symfony
使用原生的PHP进行Web开发时，应对客户端的请求，通常是一个请求对应一个PHP脚本，使用 `$_REQUEST`、`$_POST` 等提取HTTP数据，使用PDO建立数据库连接、CURD、关闭连接。 Symfony2作为MVC框架，大大简化了这些操作，Symfony的Controller组件让我们可以在一个PHP脚本（类）中定义对多个请求的处理方法，请求的参数直接作为参数传递给方法，同时对Request、Response进行封装，代码更简介优雅。

:::warning 注意

Symfony 最新版本为 4.1 ，本教程中我们学习 3.4 版本的 Symfony。

文档入口地址： http://symfony.com/doc/3.4/index.html
:::

学习文档 《Getting Started》Chapter 1 ~ 6 部分后，完成以下练习。 其余部分文档，请先学习以下内容：

* [Controllers](http://symfony.com/doc/3.4/book/controller.html)
* [Routing](https://symfony.com/doc/3.4/routing.html)
* [Templating by Twig](https://symfony.com/doc/3.4/templating.html)
* [Configuration](https://symfony.com/doc/3.4/configuration.html)
* [Bundles](https://symfony.com/doc/3.4/bundles.html)
* [Security](https://symfony.com/doc/3.4/security.html)
* [Service Container](http://symfony.com/doc/3.4/book/service_container.html)

:::tip 练习

1. 用 Symfony 的脚手架命令创建项目 `php-symfony-exercise`。
2. 将上一练习中的代码，搬迁到 Symfony 的框架结构下。
:::

## 21. 正则表达式
学习：

* [正则表达式快速入门](http://deerchao.net/tutorials/regex/regex.htm)
* [PHP正则相关API](http://php.net/manual/zh/book.pcre.php)
#