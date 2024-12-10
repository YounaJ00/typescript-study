"use strict";
// Boolean
let boolean;
let falseBoolean = false;
// Number
let number;
let integer = 6;
let float = 1.2345;
// String
let string;
let firstName = 'Doe';
// Array
// 한가지 타입만 가지는 배열
let names1 = ['John', 'Kim'];
let names2 = ['John', 'Kim'];
let names3 = [3, 19];
let names4 = [7, 19];
// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1 = ['John', 1, 2];
let array2 = ['Kim', 3];
// 여러 타입을 한번에 any 
let someArray = ['John', 1, [], {}, false];
// Interface, Type
// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray = ['A', 'B'];
let numberArray = [1, 2];
// Tuple -> 갯수도 맞춰야 함 - 고정된 크기
let tuple1;
tuple1 = ['a', 1];
let users;
users = [[1, 'John'], [10, 'Doe']];
// tuple 은 추가적인 값 삽입이 안되지만 push 로 밀어넣기
let tuple2;
tuple2 = ['b', 7];
tuple2.push(2);
console.log(tuple2);
tuple2.push('Jen');
tuple2.push(100);
console.log(tuple2);
// any
let any = 'd135';
any = 1;
any = [];
// unknown -> 모든 값의 타입을 허용하지만(boolean 빼고) 명시적인 타입 검사를 거쳐야만 안전하게 사용할 수 있다
let unknown = false;
// 이런식으로 boolean을 강제적으로 사용할 수는 있다
let string1 = unknown;
// object
let obj = {};
let arr = [];
// tsconfig.json 파일에 compilerOptions에 "strick": true 없애면 사용가능 
// let nul: object = null;
let date = new Date();
const obj1 = {
    id: 1,
    title: 'title',
    description: 'description'
};
// Union -> 하나 이상의 타입을 가질 수 있는 자료형을 정의하는 방법
let union;
union = 'hi';
union = 1536;
// function
let func1;
func1 = function (x, y) {
    return x * y;
};
let func2;
func2 = function () {
    console.log('hi');
};
// undefined -> void 에만 가능하다
// never -> return 값을 절대 내보내지 않는 값에 가능
function throwError() {
    throw new Error('error');
}
function keepProcessing() {
    while (true) {
        console.log('hi');
    }
}
