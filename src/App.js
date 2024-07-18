import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; // 서버에서 가져왔다고 가정, state에 저장할 수도 있다.
  let [logo, setLogo] = useState('ReactBlog');
  //let [글제목1, b] = useState('남자 코트 추천'); // a는 state에 보관했던 자료가 출력된다.
  //let [글제목2, a] = useState('강남 우동맛집');
  //let [글제목3, c] = useState('파이썬독학');
  let publishDate = '2월 17일 발행';
  let [글제목, 제목변경] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
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

/*function 함수(){
  console.log(1);
}  항상 onClick 안에는 함수가 들어가야 한다. */

let [따봉, 따봉변경] = useState(0);
let [modal, setModal] = useState(false); // set+a로 짓는 것이 관례
  return (
    <div className="App">
      <div className='black-nav'>
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={ () =>{ 따봉변경(따봉 + 1) } }>👍</span> { 따봉 } </h4> 
        {/* onClick을 eventHandler라 한다. 
        state를 변경할 때는  state변경함수(새로 대체될 state) */}
        <p>{publishDate}</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>{ publishDate }</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {setModal(!modal)}}>{ 글제목[2] }</h4>
        <p>{ publishDate }</p>
      </div>
      <button onClick={() => { 
        // 제목변경(['여자코트 추천', '강남 우동맛집', '파이썬독학'])
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        제목변경(copy);
        // ...(점 3개) => spread operator라고 하는 문법, object나 array data type 왼쪽에 붙일 수 있으며, 괄호를 벗기라는 의미이다. 
        // 이후 다시 []를 씌웠으므로 주소가 재지정된다.

      }}>남녀변경</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        제목변경(copy);
      }}>가나다순정렬</button>

      {
        //조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        // 1 == 2? '맞음' : '아님'
        modal == true ? <Modal/> : null
      }

    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}
// 자바스크립트에서 -는 진짜 빼기를 뜻한다.
// state는 언제 쓰나? -> 자동으로 html에 반영되게 하고 싶으면
export default App;
