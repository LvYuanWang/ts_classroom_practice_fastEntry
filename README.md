## 安装

建议全局安装

```js
npm i -g typescript
```

安装好之后，就可以直接使用tsc来编译ts文件了

## 编译

我们现在可以创建一个ts文件，并将他编译成js文件，比如下面简单的代码

```js
let str:string = "hello";
```

但是，就是这么简单的代码，**编译之后却会报错。**

不用担心，这个错误，并不是我们的错误，原因是默认情况下，TS会做出下面的几种假设：

1、假设当前环境在DOM环境中
2、如果代码中没有模块化语句，默认代码是全局执行的，所以变量就是全局变量
要最简单的解决，就是用模块化

可以加上TS的**配置文件**，或者`tsc`命令行的选项参数

## tsconfig.json配置文件

官方配置文件说明地址：[tsconfig.json](https://www.typescriptlang.org/tsconfig)

具体说明见**tsconfig.json.xmind**

如果项目中指定了`tsconfig.json`文件，运行`tsc`不需要再指定文件路径地址

```json
{
  "compilerOptions": {
    "target": "ES2017", // 编译目标版本
    "lib":["ES2017","DOM","DOM.Iterable"], // 需要引用的库
    "outDir": "./dist" // 指定输出目录，如果未指定和对应的.ts文件同目录
  },
  "include": ["src/**/*.ts"] // 指定需要编译的文件或目录
}
```

## 使用第三库简化流程

**ts-node:** 将ts代码在内存中完成编译，同时完成运行

**安装:**

```
npm i -g ts-node
```

**运行:**

```
ts-node src/index.ts
```

**nodemon:** 检测文件变化

**安装:**

```
npm i -g nodemon
```

**运行:**

```
nodemon --exec ts-node src/index.ts
```

当然，我们可以像之前一样，将这个代码放入到`package.json`的 scripts 属性中

```
"scripts": {
    "start": "nodemon --exec ts-node src/index.ts"
},
```

