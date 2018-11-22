# 工具方法
#### 对传入字符串中 {{xxx}} 内容替换会data[xxx] 的值
```javascript
function stringfy(str, data) {
  return str.replace(/\{\{[^\}\}]+\}\}/g, function (v) {console.log(v);
    let key = v.substring(2, v.length - 2);
    return data[key] || v;
  });
}
```