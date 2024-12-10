// 호출 시그니처 vs 인덱스 시그니처

// 1. 호출 시그니처: 재사용을 위해 따로 뺀 interface
interface gerLikeNumber {
  (like: number) : number;
}

interface Post {
  id: number;
  title: string;
  gerLikeNumber: gerLikeNumber;
}

const post1 : Post = {
  id: 1,
  title: 'post 1',
  gerLikeNumber(like: number) {
    return like
  }
}

post1.gerLikeNumber(3);


// 2. 인덱스 시그니처

// <1> 객체 인덱스 시그니처
interface Post2 {
  [key: string]: unknown;
  id: number;
  title: string;
}

const post2: Post2 = {
  id: 1,
  title: 'post 2'
}

post2['description'] = 'description1';
post2['pages'] = 300;


// <2> 배열 인덱스 시그니처

interface Names {
  [item: number]: string; 
  // userNames[0] === 'John' 이므로
}

const userNames = ['John', 'Kim', 'Park']

