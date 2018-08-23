# Web 之旅

## 1.Web 入门

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

## 2.HTML

学习 MDN 的 [《HTML -- 构建 Web》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML) 教程。要求：
* 《HTML 介绍》 全部内容。 完成练习 [《标记一封信》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)、[《结构化一个页面的内容》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)。
* 《多媒体与嵌入》，只需学习 [<HTML 中的图片>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)。
* 《HTML 表格》，全部内容。完成练习 [《Assessment: Structuring planet data》](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Tables/Structuring_planet_data)。
* 《HTML 表单》，只需学习 [<HTML表单指南>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms)、[<您的首个 HTML表单>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/Your_first_HTML_form)、[<如何构建 HTML 表单>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form)、[<原生表单部件>](https://developer.mozilla.org/zh-CN/docs/Learn/HTML/Forms/The_native_form_widgets)。

将本次练习提交到自己的代码仓库的 `html-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

## 3.CSS

学习 MDN 的 [《CSS -- 设计 Web》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS) 教程。要求：

* 《CSS介绍》，[<选择器>](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Selectors) 部分，只需学习 [<简单选择器>](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Simple_selectors)。<属性选择器>、<伪类和伪元素>、<组合器和多用选择器>，不作要求。 这一章节，其余部分都需要学习。完成练习 [《基本的CSS理解》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Fundamental_CSS_comprehension)。
* 《样式化文字》，全部内容。完成练习 [《排版社区大学首页》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/%E4%B8%BA%E6%96%87%E6%9C%AC%E6%B7%BB%E5%8A%A0%E6%A0%B7%E5%BC%8F/Typesetting_a_homepage)。
* 《样式化区块》，全部内容。完成练习 [《创建精美的信纸》](https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_boxes/Creating_fancy_letterheaded_paper)。
* 《CSS 排版概述》，不做要求。

以上练习提交到自己的代码仓库中 `css-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

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

## 4.Javascript

学习 MDN 的 [《JavaScript — 用户端动态脚本》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript) 教程。要求：

* 《JavaScript 第一步》，全部学习。完成练习 [《蠢萌故事生成器》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。
* 《JavaScript 基础要件》，全部学习。完成练习 [《相片走廊》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript)。
* 《JavaScript 对象介绍》，全部学习。完成练习 [《实践对象构造》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/Object_building_practice)、 [《向“弹跳球”演示程序添加新功能》](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Objects/%E5%90%91%E2%80%9C%E5%BC%B9%E8%B7%B3%E7%90%83%E2%80%9D%E6%BC%94%E7%A4%BA%E7%A8%8B%E5%BA%8F%E6%B7%BB%E5%8A%A0%E6%96%B0%E5%8A%9F%E8%83%BD)。
* 《客户端网页 API》，只需学习 [<Web API简介>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)、[<操作文档>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)、[<从服务器获取数据>](https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data)。
* 将本次练习提交到自己的代码仓库的 `javascript-basic` 目录下，每个小练习，各自建立子目录，子目录名自定。

## 5.jQuery

* 学习廖雪峰的 [《JavaScript教程》](https://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001434499993118b8173572625b4afe93a8b19dd707ea1d000) 中的 jQuery章节 。
* 学习 [《jQuery插件——Validation Plugin》](https://www.imooc.com/learn/385)。

:::tip 练习
在自己的代码仓库中，创建目录 `jquery-execrise`，复制 `html-css-exercise` 练习的代码到此目录下。使用 [jquery-validation](https://jqueryvalidation.org/) 给登陆、注册页面加上表单校验，具体校验规则见草图：

* [登录页](/web-tour/images/4.png)
* [注册页](/web-tour/images/5.png)
:::

## 6.Bootstrap

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