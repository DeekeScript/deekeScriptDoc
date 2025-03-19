# module - 模块

在很多时候，我们的应用可能不止1个JavaScript文件就能实现的，尤其是在构建复杂应用的时候。

在DeekeScript中，可以轻松通过import方法来加载JavaScript文件。下面是一个实例：

> 注意：如果使用Typescript开发，可以使用Typescript的模块导入语法

## require

```javascript
//项目文件结构如下：项目跟目录下有一个js文件夹和一个task文件夹
//js文件夹中包含了我们需要import的文件，task文件里面有一个dy_toker.js文件
//下面我们在dy_toker.js文件中引用js文件夹下面的a.js和b.js
// |> js
// | - a.js
// | - b.js
// |> task
// | - dy_toker.js
// |deekeScript.json

// js/a.js文件代码如下
export let a = {
    name: "我是a.js",
    getName(){
        return this.name;
    }
}
module.exports = a;

//dy_toker.js代码如下  特别说明，路径是相对于项目根目录的路径
let a = require('js/a.js');//相对于项目根目录路径（deekeScript.json文件所在目录）
console.log(a.getName());//输出 “我是a.js”
```