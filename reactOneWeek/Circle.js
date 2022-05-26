import styled from 'styled-components'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Wrap=(props)=>{
  return(
        <Array>
            <Strong>{props.day}요일</Strong>
            <Circle score={props.yeah}/>
            <Circle score={props.yeah}/>
            <Circle score={props.yeah}/>
            <Circle score={props.yeah}/>
            <Circle score={props.yeah} />
           <Link to={`/detail/${props.day}`}><Arrow></Arrow></Link>
       </Array>
    )
}

const Circle=styled.div`
  width:30px;
  height:30px;
  border-radius:30px;
  margin:5px;
  background-color:rgb(255, 235, 59);
  &:nth-child(2){
    background-color: ${props=>(props.score>=1 ? '#ff0':'#ddd')}
}
&:nth-child(3){
    background-color: ${props=>(props.score>=2 ? '#ff0':'#ddd')}
}
&:nth-child(4){
    background-color: ${props=>(props.score>=3 ? '#ff0':'#ddd')}
}
&:nth-child(5){
    background-color: ${props=>(props.score>=4 ? '#ff0':'#ddd')}
}
&:nth-child(6){
    background-color: ${props=>(props.score>=5 ? '#ff0':'#ddd')}
}
  `;

  const Array =styled.div`
    display:flex;
  `;
  const Strong=styled.div`
    display:flex;
    align-items: center;
  `;
  const Arrow=styled.div`
  appearance: none;
  background-color: transparent;
  border-color: transparent purple;
  width: 0px;
  height: 0px;
  border-top-width: 1rem;
  border-top-style: solid;
  border-bottom-width: 1rem;
  border-bottom-style: solid;
  border-left-width: 1.6rem;
  border-left-style: solid;
  color: rgb(255, 255, 255);
  cursor: pointer;
  border-radius: 0;
  margin:5px;
  `;



export default Wrap;
