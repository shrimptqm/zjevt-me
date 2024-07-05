---
url: https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian/
tags:
  - Obsidian/TIPS
author: windilycloud
---
```ad-summary
title: 全文摘要
该文章来自[PKMer社区](https://pkmer.cn/page/)，是一篇关于obsidian的概述型文章。主要内容包括:社区教程和资源、核心插件、社区插件、第三方联动方案、obsidian外观定制、基于obsidian的实践经验分享。**推荐作为obsidian资源获取的导航页使用。** by 汤沁民

```

如果你是刚安装 Obsidian 担心上手进阶教程较难，可以参考这里 [如何使用Obsidian笔记-一步一步的指南](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8obsidian%E7%AC%94%E8%AE%B0-%E4%B8%80%E6%AD%A5%E4%B8%80%E6%AD%A5%E7%9A%84%E6%8C%87%E5%8D%97)

Obsidian 是一款本地文档型纯文本笔记软件，和其它笔记软件相比，其自定义程度非常高。这个自定义程度可以大致分为两个方面：

1.  纯文本本地文档：纯文本，本地这两个属性可以使得 Obsidian 与大部分软件进行联动，常见的有：Zotero，Vscode，Flow.Launcher，Syncthing，AutoHotkey，NextCloud，AList，Pandoc，Repgrep，Everything 等软件。用户可以完全不依赖 Obsidian 进行增删查改，充分让笔记数据得以流动。
2.  庞大的社区生态：大多数软件缺乏拓展能力，某些操作不符合用户习惯，缺功能，缺联动，缺分享，这些都可以依赖插件进行解决。社区目前近 1000 个插件，从优化编辑体验，增强可视化能力，自动化操作，成型工作流分享，到知识管理，日程管理，时间管理，内容管理，娱乐爱好，工作提效，再到本地软件联动，在线软件联动，自建同步和发布，均有免费且较为成熟的实践分享。

Obsidian 并不预设用户应该怎样使用软件，软件本体的功能有限，但社区插件提供的功能无限，你可以在其中探寻符合你使用习惯和思维方式的最佳实践。同 Obsidian 的思想一脉相承，我们也提供针对不同人群的入门指南，本文只是鸟瞰整个 Obsidian 功能生态。

若以功能提供的方式进行划分，Obsidian 可分为：

-   本体功能：提供基础功能，如窗口管理，状态栏，基本编辑器，基本显示和交互，库的创建等，基础功能必选，不可移除。
-   核心插件功能：在基础功能之上由官方维护的功能，如大纲，书签，命令面板，随机漫游等，这些都可以供用户开关，但不可移除。
-   社区插件功能：在基础功能和核心插件之上构建的，由社区开发者维护的功能。这些功能能随意搭配组合使用，可供用户开关，可移除。
-   主题样式定制：在社区有 160 多款由社区爱好者定制的主题，许多主题配合主题类插件能实现单主题数百种样式调整。
-   CSS 片段样式定制：区别于主题，CSS 片段针对某一个样式进行调整。需要 CSS 基础，CSS 并不是门编程语言，而是一种修改界面样式的配置文件。

## 社区教程和资源

以下资源均是免费的 ，大家可以放心食用。国内成体系的资源相对较少，国外非常非常多，在 [Obsidian资源合集](https://pkmer.cn/Pkmer-Docs/01-%E7%A4%BE%E5%8C%BA%E8%B5%84%E6%BA%90%E5%90%88%E9%9B%86/%E7%AC%94%E8%AE%B0%E5%88%86%E4%BA%AB/obsidian%E8%B5%84%E6%BA%90%E5%90%88%E9%9B%86) 里可以查看更多，下面只列出个人觉得比较适合新手入门的资源。

### 官方资源

-   [obsidian开发计划](https://trello.com/b/Psqfqp7I/obsidian-roadmap)：用来查看 Obsidian 团队现在在干嘛，有什么计划
-   [obsidian英文论坛](https://forum.obsidian.md/)：最早成立的论坛，积累的资源数量和质量都是最高的，也是 Obsidian 提出功能需求，反馈 Bug 最主要的平台
-   [obsidian中文论坛](https://forum-zh.obsidian.md/)：后续成立的论坛，但活跃度比英文论坛差上不少，主要用于国内用户自发交流
-   [Home - Obsidian Help](https://help.obsidian.md/)：Obsidian 官方维护的教程和文档

### 社群

-   QQ 群：825255377：PKMer 关于知识管理的交流群
-   QQ 群：908688452，PKMer 名下 Blue Topaz 主题和 示例库的交流群，2000 人限制
-   QQ 群：774176839：Obsidian 爱好者汇集群，但有群人数 1000 限制，不活跃的会定时清理
-   [discord官方讨论群](https://discord.com/invite/veuWUTm)：Obsidian 信息资源时效性最高的地方，可以在这获取最新的版本更新，插件更新，插件上架信息等。目前有近 10 万人，可惜不好访问。

### 野生资源

-   [Pkmer Obsidian](https://pkmer.cn/Pkmer-Docs/10-Obsidian/Obsidian/)：国内 Obsidian 爱好者组建的知识管理平台，用于收集、汇总、分享和展示最有价值的知识管理信息，包括教程，工具使用和用法，工作流程，心得体会等。
-   [浙江工商大学Obsidian讲座](https://www.bilibili.com/video/BV1Ag411v7o1)：详细阐述了大部分 Obsidian 的基础功能，并展示了和 Zotero 结合的使用方式。
-   [简睿学堂](https://space.bilibili.com/1119961064/video)：长期活跃和更新的简睿，分享了大量 Obsidian 初级和高级的用法，非常值得探索。
-   [Obsidian软件基础操作教程](https://www.bilibili.com/video/BV1qD4y1m7nv/)：由社区里熟知的蚕子大佬录制的，他为 Obsidian 开发了许许多多非常人性化的工具，如数十个 Quicker 动作，Obsidian 插件翻译工具，增强编辑工具等。由于 Obsidian 本身是纯文本，所以在今天，那些内容大都没有过时。
-   [笔记软件 Obsidian 使用教程 & 学习资源汇总：从入门到精通](https://zhuanlan.zhihu.com/p/619960525)：搜集了大量不同类型的 Obsidian 资源类型，部分已经过时，瑕不掩瑜。
-   [找笔记方便、写作又给力的知识库，我是这么搭建出来的](https://sspai.com/post/77144)：一篇搭建笔记系统反响比较好的文章
-   [Obsidian周报-英文](https://www.obsidianroundup.org/)：由社区成员 Eleanorkonik 自发建立的 Obsidian 社区周报，总结和归纳最近一周在论坛，Discord 讨论和发布的最有价值的信息。同时也组织一些大佬做分享。
-   [Obsidian Hub-英文](https://publish.obsidian.md/hub/00+-+Start+here)：国外 Obsidian 爱好者组建的知识管理平台，共建关于 Obsidian 的各种用法和技巧，分享使用心得，资源非常丰富。
-   [Obsidian Observer-英文](https://medium.com/obsidian-observer)：由国外知名的工具爱好者 TftHacker 建立的 Obsidian 爱好者中心，分享大量关于 Obsidian 的使用和技巧。
-   [How to Take Smart Notes in Obsidian-英文](https://theknowledgeworker.substack.com/p/how-to-take-smart-notes-in-obsidian)：如何做笔记，针对《How to take smart notes》这本书的实践

-   [Obsidian新手指南](https://pkmer.cn/Pkmer-Docs/50-%E6%95%99%E7%A8%8B/obsidian/obsidian%E6%96%B0%E6%89%8B%E6%8C%87%E5%8D%97)：用图文结合的方式介绍 Obsidian 是什么，并给出下载安装及常见入门教程
-   [Obsidian概述](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A6%82%E8%BF%B0)：深入介绍 Obsidian 开发团队的背景，回答一些使用 Obsidian 必须要理解的问题
-   [Obsidian基本使用](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/obsidian%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8)：介绍 Obsidian 的各个内置功能，包括编辑器，文件及链接，双链，命令面板，布局等

## 核心插件

-   [Obsidian核心插件](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6)：介绍 Obsidian 的核心插件，并试图给出一些常见场景的解决方案
-   [白板](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E7%99%BD%E6%9D%BF)：在一张无限画布上组织你的笔记。
-   [笔记重组](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E7%AC%94%E8%AE%B0%E9%87%8D%E7%BB%84)：合并两篇笔记，或将笔记部分内容移动到另一笔记中。
-   [标签列表](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%A0%87%E7%AD%BE%E5%88%97%E8%A1%A8)：显示所有标签及其出现的次数。
-   [出链](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%87%BA%E9%93%BE)：显示当前笔记中已存在的链接并检测可能存在的链接。
-   [大纲](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%A4%A7%E7%BA%B2)：显示当前笔记或链接笔记的小标题列表。
-   [发布](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%8F%91%E5%B8%83)：付费将 Obsidian 的笔记分享到网上，能适配主题和 CSS 片段。
-   [反向链接](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%8F%8D%E5%90%91%E9%93%BE%E6%8E%A5)：在状态栏中显示指向当前笔记的链接的情况。
-   [工作区](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%B7%A5%E4%BD%9C%E5%8C%BA)：保存和加载工作区布局。
-   [关系图谱](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%85%B3%E7%B3%BB%E5%9B%BE%E8%B0%B1)：总览笔记间的联系。
-   [幻灯片](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%B9%BB%E7%81%AF%E7%89%87)：演示当前笔记。你可以通过键入”---“来分割每一页幻灯片的内容
-   [快速切换](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%BF%AB%E9%80%9F%E5%88%87%E6%8D%A2)：输入关键词即可跳转到对应文件
-   [录音机](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%BD%95%E9%9F%B3%E6%9C%BA)：录制音频并保存为附件。
-   [漫游笔记](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%BC%AB%E6%B8%B8%E7%AC%94%E8%AE%B0)：随机打开一则笔记，以助于回顾和发现。
-   [命令面板](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%91%BD%E4%BB%A4%E9%9D%A2%E6%9D%BF)：无序界面或快捷键操作，输入一个命令即可完成相应的功能。
-   [Obsidian 核心插件-模板](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/obsidian-%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6-%E6%A8%A1%E6%9D%BF)：插入模版文件夹中的模版内容
-   [日记](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%97%A5%E8%AE%B0)：打开今天的日记。如果该日记不存在，则创建该日记。
-   [时间戳生笔记成器](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%97%B6%E9%97%B4%E6%88%B3%E7%94%9F%E7%AC%94%E8%AE%B0%E6%88%90%E5%99%A8)：创建以时间戳为文件名的笔记，常用于 Zettelkasten 等方法中。
-   [搜索](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%90%9C%E7%B4%A2)：在所有笔记中搜索关键词。
-   [同步](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%90%8C%E6%AD%A5)：付费将 Obsidiain 的笔记在多端进行同步。
-   [文件恢复](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/%E6%96%87%E4%BB%B6%E6%81%A2%E5%A4%8D)：通过最近的快照来恢复意外丢失的数据。仅为 Markdown 文件生成快照。
-   [文件列表](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%9F%BA%E6%9C%AC%E4%BD%BF%E7%94%A8/%E6%96%87%E4%BB%B6%E5%88%97%E8%A1%A8)：查看仓库中的所有文件
-   [斜杠命令](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%96%9C%E6%9D%A0%E5%91%BD%E4%BB%A4)：启用后，在编辑器中输入斜杠即可触发命令。
-   [页面预览](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E9%A1%B5%E9%9D%A2%E9%A2%84%E8%A7%88)：悬停在 内部链接上，会显示一个悬浮窗口，查看这个链接大致内容。
-   [字数统计](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E5%AD%97%E6%95%B0%E7%BB%9F%E8%AE%A1)：在状态栏中显示字数。
-   星标：已被书签插件替代。
-   [书签](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E4%B9%A6%E7%AD%BE)：替代星标核心插件，更加强大。
-   [Markdown格式转换器](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/markdown%E6%A0%BC%E5%BC%8F%E8%BD%AC%E6%8D%A2%E5%99%A8)：将其他应用中的 Markdown 格式转换为 Obsidian 支持的格式。
-   [文档属性视图](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E6%A0%B8%E5%BF%83%E6%8F%92%E4%BB%B6/%E6%96%87%E6%A1%A3%E5%B1%9E%E6%80%A7%E8%A7%86%E5%9B%BE)：增加侧边栏视图，你可以用它们来管理属性

## 社区插件

-   [Obsidian社区插件](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6)：Obsidian 社区插件分类合集

## 第三方联动

-   [Quicker动作之BookxNote和Obsidian联动](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AF%E4%BB%B6/quicker/quicker%E5%8A%A8%E4%BD%9C%E4%B9%8Bbookxnote%E5%92%8Cobsidian%E8%81%94%E5%8A%A8)
-   [Quicker动作之自定义Zotero标注到Obsidian](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E8%87%AA%E5%8A%A8%E5%8C%96%E8%BD%AF%E4%BB%B6/quicker/quicker%E5%8A%A8%E4%BD%9C%E4%B9%8B%E8%87%AA%E5%AE%9A%E4%B9%89zotero%E6%A0%87%E6%B3%A8%E5%88%B0obsidian)
-   [Umi-OCR 本地图片识别并批量转换](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E5%9B%BE%E7%89%87%E5%A4%84%E7%90%86/umi-ocr-%E6%9C%AC%E5%9C%B0%E5%9B%BE%E7%89%87%E8%AF%86%E5%88%AB%E5%B9%B6%E6%89%B9%E9%87%8F%E8%BD%AC%E6%8D%A2)
-   [Syncthing](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E5%A4%87%E4%BB%BD%E4%B8%8E%E5%90%8C%E6%AD%A5/syncthing)：点对点同步并版本控制 Obsidian 库
-   [Pandoc学术指南](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E6%96%87%E6%A1%A3%E8%BD%AC%E6%8D%A2/pandoc%E5%AD%A6%E6%9C%AF%E6%8C%87%E5%8D%97)
-   [Omnivore](https://pkmer.cn/Pkmer-Docs/03-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%B7%A5%E5%85%B7/%E5%89%AA%E8%97%8F%E4%B8%8E%E6%91%98%E5%BD%95/omnivore)：免费开源可自建的稍候读，RSS 服务，可与 Obsidian 同步

## Obsidian 外观定制

定制外观有几种方式，其难度依次上升：

1.  使用主题：在 100 多个社区主题中，找到喜欢的主题，直接下载即可
2.  使用 [obsidian-style-settings](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E7%A4%BE%E5%8C%BA%E6%8F%92%E4%BB%B6/obsidian-style-settings)：该插件需要主题开发者做了相应适配，适配后可通过该插件调整主题样式
3.  使用社区的 CSS 片段：在社区里看到喜欢的 CSS 片段，直接放在 Snippets 文件夹里就行了
4.  自定义 CSS 片段：自己学点 CSS，能立刻修改样式做成 CSS 片段使用

除了 [Obsidian优秀外观分享](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/obsidian%E4%BC%98%E7%A7%80%E5%A4%96%E8%A7%82%E5%88%86%E4%BA%AB)，我们还搜集了一些 CSS 片段，大家可酌情使用：

-   [Obsidian样式-美化代码域对编程语言的样式展示](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E7%BE%8E%E5%8C%96%E4%BB%A3%E7%A0%81%E5%9F%9F%E5%AF%B9%E7%BC%96%E7%A8%8B%E8%AF%AD%E8%A8%80%E7%9A%84%E6%A0%B7%E5%BC%8F%E5%B1%95%E7%A4%BA)：修改高亮语法的样式
-   [Obsidian样式-编辑模式下当前行高亮](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E7%BC%96%E8%BE%91%E6%A8%A1%E5%BC%8F%E4%B8%8B%E5%BD%93%E5%89%8D%E8%A1%8C%E9%AB%98%E4%BA%AE)：当前行高亮
-   [Obsidian网址前自动加图标](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E7%BD%91%E5%9D%80%E5%89%8D%E8%87%AA%E5%8A%A8%E5%8A%A0%E5%9B%BE%E6%A0%87)：给链接添加图标
-   [Obsidian样式-文件浏览器样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E6%96%87%E4%BB%B6%E6%B5%8F%E8%A7%88%E5%99%A8%E6%A0%B7%E5%BC%8F)：给文件夹添加对应的图标
-   [Obsidian样式-Calendar插件的样式修改](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-calendar%E6%8F%92%E4%BB%B6%E7%9A%84%E6%A0%B7%E5%BC%8F%E4%BF%AE%E6%94%B9)：修改 calendar 插件的样式
-   [Obsidian样式-Callout样式](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-callout%E6%A0%B7%E5%BC%8F)：修改 Callout 的样式
-   [Obsidian样式-表格样式简明方法](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E8%A1%A8%E6%A0%BC%E6%A0%B7%E5%BC%8F%E7%AE%80%E6%98%8E%E6%96%B9%E6%B3%95)：修改表格的样式
-   [Obsidian样式-通过css修改安卓上的搜索框宽度](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E5%A4%96%E8%A7%82/css-%E7%89%87%E6%AE%B5/obsidian%E6%A0%B7%E5%BC%8F-%E9%80%9A%E8%BF%87css%E4%BF%AE%E6%94%B9%E5%AE%89%E5%8D%93%E4%B8%8A%E7%9A%84%E6%90%9C%E7%B4%A2%E6%A1%86%E5%AE%BD%E5%BA%A6)

## 经验分享

-   [obsidian-tasks的GTD实践](https://pkmer.cn/Pkmer-Docs/30-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%BA%94%E7%94%A8/%E6%97%B6%E9%97%B4%E7%AE%A1%E7%90%86/obsidian-tasks%E7%9A%84gtd%E5%AE%9E%E8%B7%B5)：Obsidian Tasks 的 GTD 实践 by alswl
-   [Obsidian-2023-seyee](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/obsidian-2023-seyee)：用 Obsidian 两年多，现在我怎么同步和使用？ by seyee
-   [一种实用新型 Obsidian 实践之构建我的第二大脑](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/%E6%9E%97%E5%AE%9C%E4%B8%99/%E4%B8%80%E7%A7%8D%E5%AE%9E%E7%94%A8%E6%96%B0%E5%9E%8B-obsidian-%E5%AE%9E%E8%B7%B5%E4%B9%8B%E6%9E%84%E5%BB%BA%E6%88%91%E7%9A%84%E7%AC%AC%E4%BA%8C%E5%A4%A7%E8%84%91) + [我给我的 Obsidian 实践写了一个插件](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/%E6%9E%97%E5%AE%9C%E4%B8%99/%E6%88%91%E7%BB%99%E6%88%91%E7%9A%84-obsidian-%E5%AE%9E%E8%B7%B5%E5%86%99%E4%BA%86%E4%B8%80%E4%B8%AA%E6%8F%92%E4%BB%B6)：林宜丙 对使用 Obsidian 的实践
-   [Thomas-我的个人任务管理系统分享](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/thomasteng/thomas-%E6%88%91%E7%9A%84%E4%B8%AA%E4%BA%BA%E4%BB%BB%E5%8A%A1%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E5%88%86%E4%BA%AB)：浅谈个人对任务管理的理解，涉及任务管理, 清单, 番茄工作法 by Thomas Teng
-   [卡片笔记的输入即输出](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/asureading/%E5%8D%A1%E7%89%87%E7%AC%94%E8%AE%B0%E7%9A%84%E8%BE%93%E5%85%A5%E5%8D%B3%E8%BE%93%E5%87%BA)：笔记越来越庞大，管理起来越来越力不从心的心路历程 by asureading
-   Echo
    -   [Echo的知识管理流程](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/echo/echo%E7%9A%84%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E6%B5%81%E7%A8%8B)
    -   [Echo的建立专业且博学的PK系统](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/echo/echo%E7%9A%84%E5%BB%BA%E7%AB%8B%E4%B8%93%E4%B8%9A%E4%B8%94%E5%8D%9A%E5%AD%A6%E7%9A%84pk%E7%B3%BB%E7%BB%9F)
    -   [Echo的卡片盒笔记法工作流程及Obsidian实践](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/echo/echo%E7%9A%84%E5%8D%A1%E7%89%87%E7%9B%92%E7%AC%94%E8%AE%B0%E6%B3%95%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B%E5%8F%8Aobsidian%E5%AE%9E%E8%B7%B5)
-   Ryooo
    -   [卢曼卡片盒与知识组织](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/ryooo/%E5%8D%A2%E6%9B%BC%E5%8D%A1%E7%89%87%E7%9B%92%E4%B8%8E%E7%9F%A5%E8%AF%86%E7%BB%84%E7%BB%87)
    -   [个人笔记组织方法](https://pkmer.cn/Pkmer-Docs/50-%E6%95%99%E7%A8%8B/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86/%E4%B8%AA%E4%BA%BA%E7%AC%94%E8%AE%B0%E7%BB%84%E7%BB%87%E6%96%B9%E6%B3%95)
-   Terry
    -   [myZettelkasten 介绍](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/terry/myzettelkasten-%E4%BB%8B%E7%BB%8D)
    -   [从企业管理角度看待笔记方法](https://pkmer.cn/Pkmer-Docs/02-%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9F%BA%E7%A1%80/%E7%9F%A5%E8%AF%86%E7%AE%A1%E7%90%86%E5%9C%86%E6%A1%8C%E8%AE%A8%E8%AE%BA/terry/%E4%BB%8E%E4%BC%81%E4%B8%9A%E7%AE%A1%E7%90%86%E8%A7%92%E5%BA%A6%E7%9C%8B%E5%BE%85%E7%AC%94%E8%AE%B0%E6%96%B9%E6%B3%95)
-   熊猫别熬夜
    -   [Obsidian插件技巧-自定义标签面板配合TagFolder](https://pkmer.cn/Pkmer-Docs/10-obsidian/obsidian%E4%BD%BF%E7%94%A8%E6%8A%80%E5%B7%A7/obsidian%E6%8F%92%E4%BB%B6%E6%8A%80%E5%B7%A7-%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A0%87%E7%AD%BE%E9%9D%A2%E6%9D%BF%E9%85%8D%E5%90%88tagfolder)：自定义漂亮的标签面板

> **讨论**
> 
> 若阁下有独到的见解或新颖的想法，诚邀您在文章下方留言，与大家共同探讨。