# LyMenu

### props

```js
menus：{
    id: string | number;
    path: string;
    text: string;
    icon?: string; // 可以是路径，也可以是base64位编码
    type?: "group" | "";
    children?: MenuItem[]
}[]
```

其他属性同 element-plus 的 el-menu 组件属性相同，直接传入即可

# LyForm

### props

```js
vModel: {
  [k: string | symbol | number]: string | number | boolean;
} //form表单数据，使用v-model绑定的值
formItems: {
  attrs: {
    label?: string;
    prop: string;
    [k: string]: unknown;
  }; // el-form-item 的属性
  component: {
    componentIs: string | Component;  // 组件名，比如el-input，或者直接是个组件
    attrs?: { [k: string]: unknown; }; // 组件的属性，比如el-input的属性size...
  };
}[] // 表单项配置，根据此对象决定表单类型
```
