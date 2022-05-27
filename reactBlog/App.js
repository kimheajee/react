/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post ='강남 우동 맛집';
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집','리액트독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false); // 모달창 상태 표현만 가능 - 모달창이 안보이는 상태
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState(0); 
  let [인풋, 인풋변경] = useState(0);


  
  
  [1,2,3].map(function(a){
   return '12312312'
  })

  // function 함수() {
  //   console.log(1);
  // }

  return (
    <div className="App">
        <div className='black-nav'>
          <h4>ReactBlog</h4>
        </div>

        <button onClick={()=>{  
           let copy = [...글제목];
           copy[0] = '여자 코트추천';
           글제목변경(copy); 
        }}>글수정</button>

          {
          글제목.map(function(a, i){
            return (
              <div className="list" key={i}>
                  <h4 onClick={()=>{ setModal(!modal); setTitle(i)}}> { 글제목[i] } <span onClick={(e)=>{
                    e.stopPropagation();
                    let copy= [...따봉];
                    copy[i] = copy[i] + 1;
                    따봉변경(copy)}}>👍</span>{따봉[i]}</h4>
                  <p>2월 17일 발행</p>
                  <button onClick={()=>{
                    let copy = [...글제목];
                    copy.splice(i, 1);//copy 여기서 원하는 자료 삭제
                    글제목변경(copy)
                  }}>삭제</button>
              </div>
             )
           })
          } 

          <input type="text" onChange={(e)=>{ 
           입력값변경(e.target.value)
           }}/>

            <button onClick={()=>{
              let copy= [...글제목];
              copy.unshift(입력값);  //copy 맨 처음에 유저가 입력한 글 추가
                글제목변경(copy);
            }}>글발행</button>

       
          <button onClick={()=>{ setTitle(0) }}>글제목0</button>
          <button onClick={()=>{ setTitle(1) }}>글제목1</button>
          <button onClick={()=>{ setTitle(2) }}>글제목2</button>
  
      
{/* 
      <div className="list">
          <h4 onClick={()=>{ setModal(!modal)}}> { 글제목[0] } <span>👍</span>0</h4>
          {
            modal == true ? <Modal></Modal> : null
          }
          <p>2월 17일 발행</p>
      </div>

        <div className="list">
            <h4> { 글제목[1] } <span>👍</span>0</h4>
            <p>2월 17일 발행</p>
      </div>

      <div className="list">
            <h4> { 글제목[2] } <span>👍</span>0</h4>
            <p>2월 17일 발행</p>
      </div> */}
   

      { 
          //조건식 ? 참일때 실행할 코드 : 거짓일때 실행할 코드 
          modal == true ? <Modal title={title}글제목변경={글제목변경} color={'orange'} 글제목={글제목} /> : null
          
      }

        
      </div>
      );
    }
     
  
    function Modal(props){
      
     return (
         <>
     
          <div className='modal' style={{background : props.color }}>
            <h4> { props.글제목[props.title] } </h4>
            <p>날짜</p>
            <p>상세내용</p>
            <button >글수정</button>
        </div>
       </>
     )
   }


//옛날 class컴포넌트 문법 
// class Profile extends React.Component {
//   constructor(){
//     super();
//     this.state = { name : 'kim', age :30 }
//   }

//   changeName(){
//     this.setState({name:'Park'})
//   }
//   render(){
//     return (
//       <div>
//         <h3>프로필입니다</h3>
//         <p>저는 {this.state.name}입니다</p>
//         <button onClick={this.changeName.bind(this)}></button>
//       </div>
//     )
//   }
// }
  

export default App;
