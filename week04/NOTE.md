学习笔记
Math.random()返回一个 0 到 1 之间的伪随机数（不包括 1，包括 0）
所以 Math.random()\*26 的范围为 0 到 25

String.fromCharCode(97) 其中 97 为小写的 a 的 ascii 码值，返回小写 a
"a".charCodeAt(0) 其中获取字符串 0 位置的 ascii 码值

word += String.fromCharCode(Math.random() \* 26 + "a".charCodeAt(0));
则为获取 a-z 的随机字母
