# 加解密 Enctypt

本模块主要囊如了一些场景的加密方式，和一些编码方式

## base64Encode(str)
> str {string} 需要编码的字符串
> 
> 返回 {string}

base64编码字符串

## base64Decode(str)
> str {string} base64Encode后的字符串
> 
> 返回 {string}

base64解密后的字符串

## md5(str)
> str {string} 加密前的字符串
> 
> 返回 {string} 加密后的字符串

md5加密

## sha1(str)
> str {string} 加密前的字符串
> 
> 返回 {string} 加密后的字符串

sha1加密

## sha256(str)
> str {string} 加密前的字符串
> 
> 返回 {string} 加密后的字符串
>
sha256加密

## aesCbcEncode(key, iv, str)
> key {string}
> 
> iv {string}
> 
> str {string} 需要加密的内容
> 
> 返回 {string} 加密后的内容

采用AES-CBC加密

```javascript
let iv = Encrypt.generateIv();
let key = "sdfsdl";
let encodeStr = Enctypt.aesCbcEncode(key, iv, str);
console.log(encodeStr);//输出加密后的内容
```

## aesCbcDecode(key, iv, encodeStr)
> key {string}
> 
> iv {string}
> 
> str {string} 需要被解密的内容
> 
> 返回 {string} 解密后的内容

采用AES-CBC模式解密

```javascript
let iv = Encrypt.generateIv();//替换成实际的iv
let key = "sdfsdl";
let str = Enctypt.aesCbcEncode(key, iv, encodeStr);
console.log(encodeStr);//输出加密后的内容
```
