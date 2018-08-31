# 8B知识库

## 建立8B知识库的目的

* 积累技术方案
* 分享技术
* 共同提高

## 如何贡献

**哪些内容放知识库：**

* 技术方案、研究成果、感悟
* 最佳实践
* 爬坑经历

## 知识库文档预览和发布

:::warning 注意
请确保你的 Node.js 版本 >= 8。
:::

知识库由 [Vuepress](https://vuepress.vuejs.org/) + [GitPages](https://pages.github.com/) 搭建而成，有空可以看下官网文档

全局安装 Vuepress

```
npm install -g vuepress # 或者： yarn global add vuepress
```

下载知识库到本地

```
git clone https://github.com/edboffical/ByteKnowdgeBase.git
```

本地预览

```
# 在知识库根目录下执行如下命令 即可在 localhost 上预览知识库
npm run docs:dev
```

知识库发布

```
# 在知识库根目录下执行如下命令 会自动将 docs/.vuepress/dist 目录下静态文件 push 至 gh-pages 分支 并更新网页内容
npm run docs:publish
```

发布命令只会将 Vuepress 生成的静态文件 push 到 gh-pages 分支 继而更新知识库网页内容，但是并不会将撰写的 Markdown 源文件 push 到 master 分支

**知识库发布必须遵循如下顺序：**

编写 Markdown 源文件 -> 本地预览 没问题再往下 -> 发布知识库 -> 将文件 push 到 master 分支

## 文档编写规范

编写规范参考阮一峰老师的[中文技术文档的写作规范](https://github.com/ruanyf/document-style-guide)，在编写文档之前，请仔细阅读。并附加以下规范：

* 文件夹、文件名都采用小写英文字母及数字(根目录下的`README.md`除外)，多个单词用横岗“-"隔开，禁止使用中文名作为文件名；
* 文档结构的层次与目录结构层次保持一致，一级目录下面应该有`README.md`
* 禁止上传 PPT / DOC 等无法协作编辑的二进制文件；
* 在编写新文档时，要使用已在其他文档中编写的内容时，请不要复制，请给出引用链接。因为源文档可能会更新，你复制的内容会过时。