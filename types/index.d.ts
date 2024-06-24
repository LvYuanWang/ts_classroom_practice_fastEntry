declare let str: string;
declare let nullType: any;
declare let anyType: any;
declare const b = "hello";
declare const c: null;
declare let d: 'world';
declare let v1: string | number | boolean | undefined;
declare let v2: "男" | "女";
declare let v3: "up" | "down" | "left" | "right";
declare const arr1: number[];
declare const arr2: Array<string>;
declare const arr3: boolean[];
declare const arr4: any[];
declare const arr5: (string | number)[];
declare const arr6: Array<number | boolean>;
declare const arr7: string[] | number[];
declare const arr8: Array<number> | Array<boolean>;
declare const tuple1: [string, number, boolean];
declare const tuple2: [string | number, number, boolean];
declare const position: [number, number];
declare let value: any[];
declare let tuple3: [];
declare function add(a: number, b: number): number;
declare const r: number;
declare function sum1(a: number, b: number, c?: number): void;
declare function sum2(a: number, b: number, c?: number): void;
declare const fn: (a: number, b: number, ...rest: string[]) => void;
declare function identity<T>(arg: T): T;
declare let output1: string;
declare const output2 = "myString";
declare let output3: number;
declare function getTuple1<T>(a: T, b: T): [T, T];
declare const as1: [string, string];
declare function getTuple2<T, U>(a: T, b: U): [T, U];
declare const as2: [string, number];
declare const as3: [boolean, string];
declare function myNumbersFilter(arr: number[], callback: (item: number, index?: number) => boolean): number[];
declare const filterArr: number[];
declare function myFilter<T>(arr: T[], callback: (item: T, index?: number) => boolean): T[];
declare const filterArr2: string[];
declare const selfName = "xiaoBai";
declare const obj: {
    name: "xiaobai";
    age: 20;
    sex: "男" | "女";
};
declare const objArr: {
    name: string;
    age: 20;
}[];
declare function getInfo(user: {
    name: string;
    age: number;
}): {
    name: string;
    age: number;
}[];
type ID = string | number;
type Age = number;
type User = {
    id: ID;
    name: string;
    age: Age;
};
declare const user: User;
interface Point {
    x: number;
    y: number;
}
interface Person {
    id: ID;
    name: string;
    age: Age;
    point: Point;
    sex: "男" | "女";
}
declare const obj1: Person;
declare function getUser(user: User): void;
declare const persons: Person[];
type InfoFn = (id: number, name?: string) => string;
interface Book {
    id: number;
    name: string;
    price?: number;
    show(id: number): void;
    filter?: (id: number) => void;
    info?: InfoFn;
    author?: User;
}
declare const book: Book;
type A = {
    id: number;
    name: string;
};
type B = {
    age: number;
    gender: "男" | "女";
};
type C = A & B;
type D = A | B;
type E = string | number | boolean;
type F = object & null & undefined;
declare const obj2: C;
declare const obj3: D;
declare let someValue: any;
declare let strLength1: number;
declare let strLength2: number;
declare let maybeString: string | undefined;
declare let defineString: string;
declare function getRandom(length?: number): string | undefined;
declare let s: string | undefined;
type Box = {
    id: number;
    name: string;
};
declare function getBox(): Box | undefined;
declare function createProduction(box: Box): void;
type Address = {
    city: string;
    street?: string;
};
type Student = {
    name?: string;
    address?: Address;
};
declare const student: Student;
declare let city: string | undefined;
