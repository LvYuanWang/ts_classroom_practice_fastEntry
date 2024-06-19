
## JS数据类型

- number
- string
- boolean
- null
- undefined
- symbol
- bigint
- object




## any类型

any类型可以绕过类型检查，因此，any类型的数据可以赋值给任意类型,当然如果没有约束，也没有类型推断，那这个类型就是any类型

## 字面量类型

```js
const b = "hello";
const c = null;

let d: "hello";
d = "hello"; 
// d = "world"; // 报错,只能赋值为hello
```



## 联合类型 

```typescript
let v1: string | number | undefined = undefined;
v1 = "hello";
v1 = 123;

let v2: "男" | "女";
v2 = "女"

let v3: "UP" | "DOWN" | "LEFT" | "RIGHT";
v3 = "RIGHT";
```


## 数组

数组可以通过**类型[]**来表示，比如 `number[]`、`string[]`、`boolean[]`等

数组也可以通过`Array<elemType>`来表示，比如`Array<number>`、`Array<string>`、`Array<boolean>`等

```typescript
const arr1 = [1, 2, 3, 4, 5];
const arr2: string[] = ["a", "b", "c", "d", "e"];
const arr3: number[] = [1, 2, 3, 4, 5];
const arr4: Array<number> = [1, 2, 3, 4, 5];
```

空数组默认推断为`any[]`,不过这个和**相关类型检查机制有关联**

```typescript
const arr5 = [];
arr5.push(123);
arr5.push("123");
```

数组也能联合类型

```typescript
let arr6: (string | number)[] = [1, "2", 3, "4"];
let arr7: Array<string | number> = [1, "2", "3", 4];
// 注意和下面写法的区别
let arr8: string[] | number[] = [1, 2, 3, 4];
let arr9: Array<string> | Array<number> = ["1", "2", "3", "4"];
```

## 元祖类型(Tuple)

一个固定长度的数组，并且数组中每一项的类型确定

```typescript
const tuple1: [number, number] = [1, 2];
const tuple2: [number, string] = [1, "2"];
```

**场景:** 在地图中,使用经纬度坐标来标记位置信息

可以使用数组来记录坐标,那么,该数组中只有两个元素,并且这两个元素都是数值类型

```js
let position: number[] = [39.5427, 116.2317]
```

使用 **number[]** 的缺点: 不严谨,因为该类型的数组中可以出现任意多个数字

**更好的方式:** 元组(Tuple)

元组类型时另一种类型的数组,他确切的知道包含多少个元素,以及特定索引对应的类型

```js
let position: [number, number] = [39.5427, 116.2317]
```

**解释:**

元组类型可以确切的标记处有多少个元素,以及每个元素的类型。示例中,元素有两个元素,每个元素的类型都是number

**容易混淆的赋值**

```typescript
let tuple3: [] = []; // 空元祖

// tuple3 = [1];//报错

let value = [] // 这样才表示暂时的空数组，不过类型是any[]
```

## 函数

和js的区别无非也就是多了参数和返回值类型的类型定义

返回值类型可以进行推断，其实参数的类型也能够通过类型检查的`"noImplicitAny": false,`配置设定取消

```typescript
function add(a: number, b: number):number {
  return a + b;
}

const r = add(1, 2);
```

**可选参数与默认参数**

```typescript
function sum1(a: number, b: number, c?: number) { 
  console.log(a, b, c);
}
sum1(3, 4);

// 默认参数本身就是可选参数
function sum2(a: number, b: number, c = 10) { 
  console.log(a, b, c);
}
```

**剩余参数**

```typescript
const fn = (a: number, b: number, ...args:number[]) => { 
  console.log(a, b, args[0]);
}
```

## void

函数没有显式的返回值类型，会被默认的推导为`void`

```typescript
function print():void{
  console.log("1.登录");
  console.log("2.注册");
}
```

## 泛型

TypeScript中的泛型是一种工具，它允许在定义函数、接口或类时提供一个类型变量。这种类型变量可以被视为一种特殊的标记，它允许你在不同的地方使用不同的、具体的类型。泛型提供了一种方式来创建可重用的组件，这些组件可以支持多种类型的数据，同时保持类型的安全性。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");  // 明确指定T为string
// 也可以使用类型推断
let output2 = identity("myString");  // 类型推断，T被推断为string
let output3 = identity(123);  // 类型推断，T被推断为number
console.log(output1, output2, output3);

function getTuple<T>(a: T, b: T){ 
  return [a, b]
}
const as = getTuple<string>("hello", "world");

function myNumberFilter(arr:number[],callback:(item:number, index?:number) => boolean):number[] { 
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}
const filterArr1 = myNumberFilter([1, 2, 3, 4, 5], item => item % 2 === 0);
console.log(filterArr1);

function myFilter<T>(arr:T[], callback:(item: T,index?:number) => boolean):T[] { 
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}

const filterArr2 = myFilter(["xxx.js","aaa.java","bbb.md"], item => item.endsWith(".js"));
console.log(filterArr2);
```



## 对象字面量类型

```typescript
const obj1 = {
  name: "lily",
  age: 18,
};

// 其实是下面的简写：
const obj2: {
  name: string;
  age: number;
} = {
  name: "lily",
  age: 18,
};

// 同样，在函数中也可以使用对象字面量
function getInfo(user: { name: string; age: number }):{ name: string; age: number }[] {
  // todos...
  return [
    {
      name: "lily",
      age: 18,
    },
    {
      name: "lucy",
      age: 20,
    }
  ]
}
```

## 自定义类型:类型别名与接口

在TS中，**类型别名（Type Aliases）**和**接口（Interfaces）**是两种定义对象类型的方式。它们在很多情况下可以互换使用，但各自有其特点和最佳应用场景。

**类型别名**是一种为类型创建新名称的方式，就是取一个新的名字。类型别名可以是任何有效的类型，包括基本类型、联合类型、元组等

```typescript
type TypeName = /* some type */

type Point = {
  x: number;
  y: number;
};

type ID = string | number;

type Age = number;

type User = {
  name: string;
  age: Age;
};

const obj3: User = {
  name: "lily",
  age: 18,
}

```

**接口**是面向对象的概念，因此它定义对象结构的一种方式，它描述了对象的形状，即对象应该有哪些属性以及属性的类型。接口主要用于声明对象的结构

```typescript
interface InterfaceName {
  // structure
}

interface Person {
  id: number
  name: string
  age: number
}

const obj4: Person = {
  id: 1,
  name: "lily",
  age: 18,
}
```

有了自定义的类型之后，可以很方便的在函数和数组中使用

```typescript
function fn1(user: User) { 
  console.log(user.name);
}

const users: User[] = [
  {
    name: "lily",
    age: 18,
  },
  {
    name: "lucy",
    age: 20,
  },
];
```

**类型中的函数声明与可选属性**

```typescript
type InfoFn = (id: number, name?: string) => string;

interface Book{
  id: number
  name: string
  price?: number
  show(id: number): void
  filter: (id: number) => void 
  info: InfoFn
  author:User
}

const book: Book = {
  id: 1,
  name: "javascript",
  show(id: number) {
    console.log(id);
  },
  filter(id: number) {
    console.log(id);
  },
  info(id: number, name?: string) {
    return "hello";
  },
  author: {
    name: "lily",
    age: 18,
  }
}
```

## 交叉类型

```typescript
type A = {
  id: number
  name: string
}
type B = {
  age: number
}
type C = A & B;
type D = A | B;

// 注意类型C与类型D的区别
/*
const v5: C = {
  id: 1,
  name: "lily",
  // age: 18, //error 缺少age属性
}
*/

const v6: D = {
  id: 1,
  name: "lily",
  // age: 18,
}
```

## 类型断言

类型断言是一种告诉编译器“我知道我在做什么”的方式。允许你将一个变量指定为更具体或更宽松的类型。

简单来说，TS根据它的类型推测，并不能确定到底是什么类型。但是我们明确知道一个值的类型，那我们就人为的干涉一下。告诉TS，这就是某种类型，别怕

**语法:** 

```typescript
<类型>值 
或者 
值 as 类型
```

```typescript
let someValue: any = "this is a string";
let strLength1: number = (<string>someValue).length;
// 如果要写断言，建议用as，因为上面的形式在react中会有歧义。尖括号语法与JSX的标签语法相冲突
let strLength2: number = (someValue as string).length;
```

**非空断言**

当你确信某个值不是`null`或`undefined`时，可以使用非空断言

**语法:** `值!`，比如`someValue!`

```typescript
let maybeString: string | null = "hello";
let definitelyString = maybeString!;
```

```typescript
function getRandom(length?: number) { 
  if (!length) {
    return undefined;
  }
  
  return Math.random().toString(36).slice(-length);
}
let s = getRandom(6);
// 可以使用类型断言
(s as string).charAt(0);
// 由于就是字符串和非空的处理，可以使用非空断言
s!.charAt(0);
```

```typescript
type Box = {
  id: number
  name: string
}

function getBox(): Box | undefined {
  if (Math.random() > 0.5) {
    return {
      id: 1,
      name: "box1",
    }
  }
  return undefined;
}

function createProduction(box:Box) { 
  // todos...
}

createProduction(getBox() as Box);
// 非空断言
createProduction(getBox()!);
```

比如常见的dom操作

```typescript
const inputDom = document.querySelector("input");
inputDom!.addEventListener("change", e => { 
  console.log((e.target as HTMLInputElement).value);
})
```

> 所有的DOM相关的类型声明都在核心库定义文件`lib.dom.d.ts`中，要查找相关的Element，可以查看i**nterface HTMLElementTagNameMap**

## 可选链操作符

注意，可选链操作符是ES2020新的语法特性，并不是TS的新特性

可选链操作符 `?.` 使得我们在尝试访问一个对象的属性或调用一个方法时，如果该对象是 `undefined` 或 `null`，不会引发错误，而是会返回 `undefined`。这样可以避免使用冗长的条件语句来检查对象的每个层级。

```typescript
interface Address {
  street?: string;
  city?: string;
}

interface Student {
  name: string;
  address?: Address;
}

let student: Student = {
  name: "Rose",
  address: {
    city: "上海"
    // 注意：这里没有提供street属性
  }
};

// 使用可选链安全地访问street属性
let street = student.address?.street; // street将为undefined，但不会抛出错误

console.log(street); // 输出 undefined
```

