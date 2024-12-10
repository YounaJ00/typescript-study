// Boolean
let boolean: boolean
let falseBoolean: boolean = false;

// Number
let number: number
let integer: number = 6
let float: number = 1.2345

// String
let string: string
let firstName: string = 'Doe';

// Array
// 한가지 타입만 가지는 배열
let names1: string[] = ['John','Kim'];
let names2: Array<string> = ['John', 'Kim'];
let names3: Array<number> = [3,19];
let names4: number[] = [7,19]

// 여러 타입을 가지는 배열(유니언 타입 사용)
let array1: (string | number)[] = ['John', 1, 2];
let array2: Array<string | number> = ['Kim', 3];

// 여러 타입을 한번에 any 
let someArray: any[] = ['John', 1, [], {}, false]

// Interface, Type

// 읽기 전용 배열 생성(readonly, ReadonlyArray)
let stringArray: readonly string[] = ['A', 'B'];
let numberArray: ReadonlyArray<number> = [1,2];

// Tuple -> 갯수도 맞춰야 함 - 고정된 크기
let tuple1: [string, number];
tuple1 = ['a', 1];

let users: [number, string][]
users = [[1,'John'], [10, 'Doe']];

// tuple 은 추가적인 값 삽입이 안되지만 push 로 밀어넣기
let tuple2: [string, number]
tuple2 = ['b', 7]
tuple2.push(2);
console.log(tuple2)

tuple2.push('Jen');
tuple2.push(100);
console.log(tuple2)

// any
let any: any = 'd135'
any = 1;
any = [];

// unknown -> 모든 값의 타입을 허용하지만(boolean 빼고) 명시적인 타입 검사를 거쳐야만 안전하게 사용할 수 있다
let unknown: unknown = false;
// 이런식으로 boolean을 강제적으로 사용할 수는 있다
let string1: boolean = unknown as boolean; 

// object
let obj: object = {};
let arr: object = [];
// tsconfig.json 파일에 compilerOptions에 "strick": true 없애면 사용가능 
// let nul: object = null;
let date: object = new Date();

const obj1: {id: number, title: string, description: string} = {
  id: 1,
  title: 'title',
  description: 'description'
}

// Union -> 하나 이상의 타입을 가질 수 있는 자료형을 정의하는 방법
let union: (string | number)
union = 'hi';
union = 1536;

// function
let func1: (arg1: number, arg2: number) => number;
func1 = function(x, y) {
  return x * y
}

let func2: () => void;
func2 = function () {
  console.log('hi');
}

// undefined -> void 에만 가능하다

// never -> return 값을 절대 내보내지 않는 값에 가능
function throwError(): never {
  throw new Error('error');
}

function keepProcessing(): never {
  while(true) {
    console.log('hi');
  }
}