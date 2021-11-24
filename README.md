# babel-plugins
开发指南：
[ast在线预览](https://astexplorer.net/) [插件开发文档](https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md#toc-inserting-a-sibling-node)

## simple
比较简单的插件
### tree shaking
 
```
import { Button, Alert } from 'hy-store';
// 转换为
import Button from "hy-store/Button";
import Alert from "hy-store/Alert";
```

### insert method
```
export default XPage({
    show(){
    },
    hide(){
    },
})

// 插入代码后
export default XPage({
    show(){
    },
    hide(){
    },
    showPop(){
        this.getComponent('pop').show();
    }
})

```
这个demo在写的过程中发现，实现成本蛮高的，主要是因为showPop方法的ast结构比较复杂。考虑到自己的需求只是动态插入代码，不需要做词法分析，考虑直接使用node的fs来实现。
在采用node写的时候最开始考虑读取一个模板文件，然后解析文件再在里面插入代码，但是不做词法分析还是很难弄。后面换了一个思路，把模板维护在代码里，通过独取配置生成不同的代码。具体代码见src/inertMethod/node.js
