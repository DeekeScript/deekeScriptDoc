# module - 模块

在很多时候，我们的应用不是一个或者几个JavaScript文件组成，而是由几十个甚至几百个文件组成，这个时候就需要模块化，将不同功能拆分到不同模块。

在DeekeScript中，可以轻松通过import方法来加载JavaScript文件。下面是一个实例：

> 注意：为了方便你的使用，在使用require的时候，请使用相对路径，不要使用绝对路径（如果你不使用代码混淆，则可以使用绝对路径，否则混淆后的代码由原src文件夹变更到script文件夹，导致找不到模块）

## require

```javascript
//项目文件结构如下：项目跟目录下有一个js文件夹和一个task文件夹
//js文件夹中包含了我们需要import的文件，task文件里面有一个dy_toker.js文件
//下面我们在dy_toker.js文件中引用js文件夹下面的a.js和b.js
// |> js
// | - a.js
// | - b.js
// |> task
// | - main.js
// | - dy_toker.js
// |DeekeScript.json

// js/a.js文件代码如下，b.js代码类似
export let a = {
    name: "我是a.js",
    getName(){
        return this.name;
    }
}
module.exports = a;

//dy_toker.js代码如下  特别说明，路径是相对于项目根目录的路径
let a = require('../js/a.js');//相对路径
let main = require('./main.js');//相对路径
let b = require('js/b.js');//绝对路径（相对于项目根目录）
console.log(a.getName(), main.getName(), b.getName());//输出 “我是a.js”  “我是main.js”  “我是b.js”
```

> 相对路径为require('../xx/xx.js') 或者 require('./x/x.js')两种方式，绝对路径前面没有“./”或者“../”
> 