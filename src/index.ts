// string number boolean undefined null symbol bigint object
let str = "hello";


// any 类型
let nullType;
nullType = 1;
nullType = "string";
nullType = true;
let anyType: any = 1;
anyType = "string";
anyType = true;
anyType = null;


// 字面量类型
const b = "hello";
const c = null;
// c = 'fdlask' // 报错
let d: 'world';
// d = "hello world"; // 报错
d = 'world';


// 联合类型
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


// 数组类型
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


// 元组类型
const tuple1: [string, number, boolean] = ["hello", 1, true];   // 顺序和类型都要对应, 不能多也不能少, 限制的更加严格
const tuple2: [string | number, number, boolean] = ["hello", 1, true];   // 也可以使用联合类型

// 使用场景: 坐标
// const position = [69.33, 291.34];   // 但是这样的话, 无法限制长度和类型
const position: [number, number] = [69.33, 291.34];   // 使用元组类型, 限制长度和类型

// 一个容易混淆的赋值情况
let value = []; // 这里是一个空数组, 不是元组
let tuple3: [] = [];    // 空元组