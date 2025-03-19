# 混淆加密

JavaScript代码混淆，主要是为了防止源码被窃取，从而一定程度上达到保护代码的目的。默认采用了javascript-obfuscator插件进行代码混淆。

> 注意：开发模式下建议不开启压缩与加密，生产环境可以使用压缩与加密。同时还需要了解到复杂的加密会增加代码执行时间，降低代码运行效率。


## javascript-obfuscator

> javascript-obfuscator 插件的目标是 代码混淆，它不仅压缩代码，还对代码的结构进行修改，使得代码变得更难以理解和逆向。这种混淆通常包括更复杂的技术，比如控制流扁平化、字符串加密、死代码注入等。

### 主要解决的问题：
- 代码混淆：通过改变代码的结构、变量名、函数名等，使代码更加难以阅读和理解。例如，变量名被替换成无意义的短字符（如 a, b, c 等），控制流被打乱，字符串被加密等。
- 字符串加密与提取：将代码中的字符串提取到数组中，并通过索引引用，这样可以避免直接查看源代码时轻松找到敏感信息。
控制流扁平化：通过改变代码的控制流，使代码变得更加复杂，并不直接按常规顺序执行。
- 死代码注入：向代码中插入一些永远不会执行的“死代码”，以增加分析和理解的难度。

### 适用场景：

- 代码保护：如果你希望保护代码免受逆向工程、剖析或窃取，特别是涉及到敏感业务逻辑或算法时，使用代码混淆是一种有效手段。
- 防止盗用：通过混淆技术，增加其他人复制或修改你的代码的难度。
- 高级混淆：如果你需要更复杂的混淆（如控制流扁平化、字符串加密等）。

### 执行步骤：

- 打开项目根目录下面的package.json文件，可以看到如下配置：
  ```
  "scripts": {
    "build": "cpx \"src/**/*\" script",
    "build-zip": "cpx \"src/**/*\" script && ts-node --esm ./deekeScriptZipBuild",
    "build-obfuscator": "cpx \"src/**/*\" script && javascript-obfuscator script --output script --config obfuscator.config.json",
    "build-obfuscator-zip": "cpx \"src/**/*\" script && javascript-obfuscator script --output script --config obfuscator.config.json && ts-node --esm ./deekeScriptZipBuild",
    "postinstall": "ts-node --esm init"
  },
  ```
> build命令是将源码复制到script文件夹；build-zip命令是将源码复制到script文件夹并打包成zip；包含“obfuscator”相关的命令则是在原有命令基础上增加代码混淆。
>
> 混淆执行命令：npm run build-obfuscator

### 代码混淆示例

```javascript
const arr = [1, 2, 3];

// 自动抛出 RangeError，因为数组索引越界 192.168.1.3:8088
const value = arr[-1];  // TypeScript 会提示 `undefined`，但是在运行时会引发错误

function test() {
    let obj: any = {};
    // 访问 null 时，会触发 TypeError
    console.log(obj.someMethod());  // TypeError: Cannot read property 'someMethod' of null
}

console.log(arr);
test();

```

加密后【未启用压缩】，如下：

```javascript
function a1_0x1ec2(_0x5231f6, _0x2af77f) {
    var _0x5a5af3 = a1_0x5a5a();
    return a1_0x1ec2 = function (_0x1ec206, _0x34fa78) {
        _0x1ec206 = _0x1ec206 - 0x179;
        var _0x37087a = _0x5a5af3[_0x1ec206];
        return _0x37087a;
    }, a1_0x1ec2(_0x5231f6, _0x2af77f);
}
function a1_0x5a5a() {
    var _0x1d7dd5 = [
        '518VpvfkM',
        '23080UeErzH',
        '1602955bwJgKL',
        '342gUFXyW',
        '12dsfZzM',
        '1806525wDAlMV',
        'SbsGP',
        'log',
        '7117510QcznoC',
        '2088666fYozPk',
        '5582424BzocDR',
        '1339PzFigh',
        'someMethod'
    ];
    a1_0x5a5a = function () {
        return _0x1d7dd5;
    };
    return a1_0x5a5a();
}
(function (_0x505f31, _0x8f1e42) {
    var _0x4cc1b2 = a1_0x1ec2, _0x21a0db = _0x505f31();
    while (!![]) {
        try {
            var _0x204909 = parseInt(_0x4cc1b2(0x184)) / 0x1 * (parseInt(_0x4cc1b2(0x179)) / 0x2) + -parseInt(_0x4cc1b2(0x17c)) / 0x3 * (-parseInt(_0x4cc1b2(0x17a)) / 0x4) + parseInt(_0x4cc1b2(0x17b)) / 0x5 * (-parseInt(_0x4cc1b2(0x17d)) / 0x6) + -parseInt(_0x4cc1b2(0x17e)) / 0x7 + -parseInt(_0x4cc1b2(0x183)) / 0x8 + parseInt(_0x4cc1b2(0x182)) / 0x9 + parseInt(_0x4cc1b2(0x181)) / 0xa;
            if (_0x204909 === _0x8f1e42)
                break;
            else
                _0x21a0db['push'](_0x21a0db['shift']());
        } catch (_0x17c6b7) {
            _0x21a0db['push'](_0x21a0db['shift']());
        }
    }
}(a1_0x5a5a, 0x55c72), ((() => {
    'use strict';
    var _0x349cf0 = a1_0x1ec2, _0x4b0556 = {
            'SbsGP': function (_0x2127e2) {
                return _0x2127e2();
            }
        };
    var _0x461321 = [
            0x1,
            0x2,
            0x3
        ], _0x7f0d4c = _0x461321[-0x1];
    function _0x27bef1() {
        var _0xd3ee64 = a1_0x1ec2, _0x353c31 = {};
        console[_0xd3ee64(0x180)](_0x353c31[_0xd3ee64(0x185)]());
    }
    console['log'](_0x461321), _0x4b0556[_0x349cf0(0x17f)](_0x27bef1);
})()));
//# sourceMappingURL=task/test.js.map
//# sourceMappingURL=test.js.map
```