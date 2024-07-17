import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져왔다고 가정, state에 저장할 수도 있다.
  let [글제목, b] = useState('남자 코트 추천'); // a는 state에 보관했던 자료가 출력된다.
  let [logo, setLogo] = useState('ReactBlog')
//b는 state의 변경을 도와주는 함수 > 나중에 배우자
// 위에 let [] = useState()는 destructuring(구조분해할당) 문법이라 한다.
// 여러가지 자료를 하나의 array에 모아두고 싶을 때 []를 사용한다.

// let num = [1, 2];
// let a = num[0];
// let c = num[1]; -> 구조분해할당의 예

// let [a, c] = [1, 2];
// 구조분해할당을 더 쉽게 하는 법
// a = 1, c = 2;

//useState를 써도 array가 남는다 [실제 자료, 함수]
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>{logo}</h4>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>글제목</h4>
        <p>2월 17일 발행</p>
      </div>
      <div>
      <h4>{ 글제목 }</h4>
      </div>
    </div>
  );
}
// 자바스크립트에서 -는 진짜 빼기를 뜻한다.
export default App;
