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


// 对象字面量
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


// 自定义类型: 可以自定义类型, 用来简化复杂类型
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