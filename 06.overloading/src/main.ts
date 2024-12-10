// 함수 오버로딩 

// (1) 함수 오버로딩 후
function add(a: string, b: string): string;
function add(a:number, b:number): number;
function add(a: any, b: any): any {
  return a + b;
}

add("hello", "world");
add(1, 1);


// (2) 함수 오버로딩 하기 전: 매개변수에 직접적으로 유니온타입으로 준 ver
function saySomething(word: string | string[]): string {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join("");
  }
  throw new Error("unable to say saySomething"); 
}

saySomething(['hello', 'world'])


// (2-2) 함수 오버로딩 ver 
function sayAnything(word: string): string
function sayAnything(words: string[]): string
function sayAnything(word: any): any {
  if (typeof word === "string") {
    return word;
  } else if (Array.isArray(word)) {
    return word.join("");
  }
  throw new Error("unable to say sayAnything"); 
}