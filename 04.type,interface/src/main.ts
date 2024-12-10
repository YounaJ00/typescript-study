// interface vs type alias

// 1. interface 
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
}

const bear1: Bear = {
  name: 'honey bear',
  honey: true
}


// 2. type alias
// type Animal = {
//   name: string;
// }

// type Bear = Animal & {
//   honey: boolean;
// }

// const bear1: Bear = {
//   name: 'honey bear',
//   honey: true
// }