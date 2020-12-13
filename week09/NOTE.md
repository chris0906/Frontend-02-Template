学习笔记

# specificity（css 优先级）

# 比较的规则是高位能比较出来就不比较低位，否则往低位比较

div div #id
[0, 1, 0, 2] => 2 个 tag 1 个 id 所以是 1 和 2
inline id class tag

div #my #id
[0, 2, 0, 1]
inline id class tag

# 整个流程

1. 通过状态机把 html 标签里所有的 tag 和属性都识别出来并保存在 dom 根结点的字节点中
2. 把 css 的 rule 添加到自己的 rules 的全局数组中，这里记录了所有 css 属性和值和对应的节点
   这里用到了一个 css 包，需要下载
3. 当解析每一个节点的同时，把 css 的属性和值加入到每一个对应的节点中
   如果遇到一个节点满足多条 css，则采取优先级高的覆盖优先级低的规则（参考 specificity）
