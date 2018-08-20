# 配置开发编辑器

## visual studio code

一款比较流行的IDE

### 下载安装

[官网](http://code.visualstudio.com/)

### 安装插件

```
ctrl + p， 在弹出的框内输入 ext install (或只要 ext + 空格)， 然后按回车
安装以下插件
  EditorConfig for VS code
  Git Blame
  Git History
  PHPUnit
  TWIG pack
```

### 配置插件

```
单元测试插件需要配置，不然无法在我们项目中使用
左上角菜单 --> 文件(File) --> 首选项(Preference) --> 设置（Setting)
找到PHPUnit Configuration 并展开，
选中 phpunit.args 并点击左边的笔进行编辑
右边框中，输入 
    "phpunit.args": [
        "--configuration", "app/phpunit.xml.dist"
    ]
```

### 如何使用单元测试插件

```
测试一个类， 类文件中，右键 --> 命令面板 --> 输入或找到 PHPUnit Test
测试一个类的一个方法，类文件中，选中方法名， 右键 --> 命令面板 --> 输入或找到 PHPUnit Test
```