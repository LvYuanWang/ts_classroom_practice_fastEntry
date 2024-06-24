// string number boolean undefined null symbol bigint object
let str = "hello";


/* any 类型 */
let nullType;
nullType = 1;
nullType = "string";
nullType = true;
let anyType: any = 1;
anyType = "string";
anyType = true;
anyType = null;


/* 字面量类型 */
const b = "hello";
const c = null;
// c = 'fdlask' // 报错
let d: 'world';
// d = "hello world"; // 报错
d = 'world';


/* 联合类型 */
let v1: string | number | boolean | undefined = undefined;
v1 = 1;
v1 = "hello";
v1 = true;
// v1 = null; // 报错
let v2: "男" | "女";
v2 = "男";
v2 = "女";
// v2 = "hello"; // 报错
let v3: "up" | "down" | "left" | "right";
v3 = "up";
v3 = "left";
// v3 = "DOWN"; // 报错


/* 数组类型 */
// 数组类型可以有两种表达方式
// 类型[]
// Array<类型>
const arr1: number[] = [1, 2, 3];
const arr2: Array<string> = ["hello", "world"];
const arr3 = [true, false, true, false, false];

// 当出现空数组赋值时, 在strict严格模式下默认是any类型, 但是当noImplicitAny配置为true时,则变成never类型, 不能赋值任何值
const arr4 = [];
arr4.push(1);
arr4.push("hello");

// 数组也可以用联合类型
const arr5: (string | number)[] = ["hello", 1, "world", 2];
const arr6: Array<number | boolean> = [1, 2, 3, true, false, true];
// 但是需要注意下面的写法
const arr7: string[] | number[] = ["hello", "world"];   // 要么是字符串数组, 要么是数字数组
const arr8: Array<number> | Array<boolean> = [1, 2, 3]; // 要么是数字数组, 要么是布尔数组


/* 元组类型 */
const tuple1: [string, number, boolean] = ["hello", 1, true];   // 顺序和类型都要对应, 不能多也不能少, 限制的更加严格
const tuple2: [string | number, number, boolean] = ["hello", 1, true];   // 也可以使用联合类型

// 使用场景: 坐标
// const position = [69.33, 291.34];   // 但是这样的话, 无法限制长度和类型
const position: [number, number] = [69.33, 291.34];   // 使用元组类型, 限制长度和类型

// 一个容易混淆的赋值情况
let value = []; // 这里是一个空数组, 不是元组
let tuple3: [] = [];    // 空元组


/* 函数 */
function add(a: number, b: number): number {
    return a + b;
}
const r = add(1, 2);

// 可选参数
// 在参数后面加上?表示可选参数, 指这个参数可以不用一定要传值
// 可选参数必须要在必选参数后面
function sum1(a: number, b: number, c?: number) {
    console.log(a, b, c);
}
sum1(1, 2);

// 默认参数本身就是可选参数
function sum2(a: number, b: number, c = 10) {
    console.log(a, b, c);
}
sum2(1, 2);

// 剩余参数: 用来接收多余的参数
const fn = (a: number, b: number, ...rest: string[]) => {
    console.log(a, b, rest);
}
fn(1, 2, "hello", "world", "hello", "world");

// 如果没有返回值类型, 默认返回类型是void

// 泛型
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
// 也可以使用类型推断
const output2 = identity("myString");
let output3 = identity(123);
console.log(output1, output2, output3);

function getTuple1<T>(a: T, b: T): [T, T] {
    return [a, b];
}
const as1 = getTuple1<string>("hello", "world");
console.log(as1);

function getTuple2<T, U>(a: T, b: U): [T, U] {
    return [a, b];
}
const as2 = getTuple2<string, number>("hello", 123);
console.log(as2);

const as3 = getTuple2(false, "boolean");
console.log(as3);

function myNumbersFilter(arr: number[], callback: (item: number, index?: number) => boolean): number[] {
    const result: number[] = [];
    arr.forEach((item, index) => {
        if (callback(item, index)) {
            result.push(item);
        }
    })
    return result;
}

const filterArr = myNumbersFilter([1, 2, 3, 4, 5, 6], (item) => item % 2 === 0);
console.log(filterArr);

// 使用泛型定义filter函数
function myFilter<T>(arr: T[], callback: (item: T, index?: number) => boolean): T[] {
    const result: T[] = [];
    arr.forEach((item, index) => {
        if (callback(item, index)) {
            result.push(item);
        }
    })
    return result;
}

const filterArr2 = myFilter(["index.java", "index.ts", "index.js", "test.ts"], (item) => item.endsWith(".ts"));
console.log(filterArr2);


/* 对象字面量 */
const selfName = "xiaoBai";
const obj: { name: "xiaobai", age: 20, sex: "男" | "女" } = { name: "xiaobai", age: 20, sex: "男" }
const objArr: { name: string, age: 20 }[] = [
    { name: "xiaohong", age: 20 },
    { name: "xiaohei", age: 20 }
]

function getInfo(user: { name: string, age: number }): { name: string, age: number }[] {
    return [
        { name: user.name, age: user.age }
    ]
}
getInfo({ name: "xiaoChou", age: 21 });


/* 自定义类型: 可以自定义类型, 用来简化复杂类型 */
// 两种定义类型的方式
// 类型别名: 创建一个类型的新的名字, 类型别名可以是任何有效的类型
// 接口: 接口其实是面向对象的概念, 所以一般用于定义对象类型

// 一. 类型别名
// 语法: type 类型名 = 类型
type ID = string | number;

type Age = number;

type User = {
    id: ID,
    name: string,
    age: Age
}

const user: User = {
    id: 1,
    name: "xiaohongmao",
    age: 23
}

// 二. 接口
// 语法: interface 接口名 { 属性名: 类型 }
interface Point {
    x: number,
    y: number
}

interface Person {
    id: ID,
    name: string,
    age: Age,
    point: Point
    sex: "男" | "女"
}

const obj1: Person = {
    id: 1,
    name: "zhangsan",
    age: 20,
    sex: "男",
    point: {
        x: 1,
        y: 2
    }
}

// 自定义类型用户函数
function getUser(user: User) {
    console.log(user.name);
}

const persons: Person[] = [
    {
        id: 1,
        name: "liSi",
        age: 23,
        sex: "男",
        point: {
            x: 1,
            y: 0
        }
    },
    {
        id: 2,
        name: "xiaoMei",
        age: 21,
        sex: "女",
        point: {
            x: 0,
            y: 1
        }
    }
]

// 函数类型的定义
type InfoFn = (id: number, name?: string) => string;

// 可选属性和函数声明
interface Book {
    id: number,
    name: string,
    price?: number,
    // 函数类型的表示方式
    show(id: number): void,
    filter?: (id: number) => void,
    info?: InfoFn,
    author?: User
}

const book: Book = {
    id: 0,
    name: "xiaoChou",
    show: function (id: number): void {
        console.log(id)
    },
    info: function (id: number, name?: string | undefined): string {
        return `Hello ${id}号 ${name}`;
    }
}


/* 交叉类型 */
// 交叉类型是可以将多个类型合并为一个类型
// 类型A & 类型B
type A = {
    id: number,
    name: string
}

type B = {
    age: number,
    gender: "男" | "女"
}

type C = A & B;
type D = A | B; // 联合类型: 可以是A, 也可以是B
type E = string | number | boolean;
type F = object & null & undefined; // 交叉类型: 可以是object, 也可以是null, 也可以是undefined

const obj2: C = {
    id: 1,
    name: "xiaoLi",
    age: 20,
    gender: "男"
}

const obj3: D = {
    id: 2,
    name: "xiaoLv",
    age: 20
}


/* 类型断言 */
// 简单来说, TS会根据上下文进行推测, 但是有时候我们可以人为干涉, 确定某个类型
// 语法: 1.值 as 类型  或者  2.<类型>值
let someValue: any = "this is a string";
// 建议使用 as 的方式, 因为react中的jsx语法和 <类型>值 方式会产生歧义
let strLength1 = (someValue as string).length;
let strLength2 = (<string>someValue).length;


/* 非空断言 */
// 当你确定某个值不是 null 或者 undefined 时候, 可以直接使用非空断言
// 语法: 值!
let maybeString: string | undefined = "hello";
let defineString = maybeString!;

function getRandom(length?: number) {
    if (!length || length <= 0) {
        return undefined;
    }

    // -length: (-)号表示取反, 也就是取后面的值的负数
    return Math.random().toString(36).slice(-length);
}
let s = getRandom(10);
// s.charAt(0);    // 这里会报错, 因为s有可能是undefined
(s as string).charAt(0); // 这里不会报错, 因为使用了非空断言
s!.charAt(0);   // 这里也不会报错, 因为使用了非空断言

type Box = {
    id: number,
    name: string
}

function getBox(): Box | undefined {
    if (Math.random() > 0.5) {
        // as Box: 这里是类型断言, 用来确定返回值的类型
        return { id: 1, name: "xiaohong" } as Box;
    }
    return undefined;
}

function createProduction(box: Box) {
    console.log(box);
}

// createProduction(getBox()); // 这里会报错, 因为getBox()有可能是undefined
createProduction(getBox()!); // 这里不会报错, 因为使用了非空断言
createProduction(getBox() as Box); // 这里不会报错, 因为使用了类型断言

// 比如常见的DOM操作
// const inputDom = document.querySelector("input");
// inputDom!.addEventListener("click", e => {
//     console.log((e.target as HTMLInputElement).value);
// })


/* 可选链操作符: 在ES2020就已经存在了 */
// 语法: 对象?.属性  || 对象?.方法 || 对象?.[key] || 对象?.[key]?.[key] || 对象?.[key]?.[key]?.[key] ...
type Address = {
    city: string,
    street?: string
}

type Student = {
    name?: string,
    address?: Address
}

const student: Student = {
    name: "xiaohong",
    address: {
        city: "beijing",
        street: "chaoyang"
    }
}

// ES2020就已经存在这种写法了, 当对象的属性不存在时, 不会报错, 而是返回undefined, 反之则返回属性值
let city = student.address?.city; // 这里不会报错, 因为使用了可选链操作符(也可以使用非空断言或者类型断言...)
console.log(city);


/* 类型声明 */
import axios from "axios";
import _ from "lodash";
import path from "path";

path.join("hello", "world");

axios.get("http://baidu.com").then(res => {
    console.log(res.data);
})

_.chunk([1, 2, 3, 4, 5], 2);