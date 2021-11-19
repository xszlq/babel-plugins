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
