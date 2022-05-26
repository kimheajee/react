import styled from 'styled-components'
import { useState } from 'react';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const About=(props)=>{
let{day} = useParams();
const [score,setScore]=useState(0);

const Clicked=(event)=>{
    let circleid=event.target.id;
    setScore(circleid);
}
    return (
            <>
               <Grade>
                   <h3><Span>{day}요일</Span>평점 남기기</h3>
                   <OneWrap>
                        <One id='1' score={score} onClick={Clicked}></One>
                        <One id='2' score={score} onClick={Clicked}></One>
                        <One id='3' score={score} onClick={Clicked}></One>
                        <One id='4' score={score} onClick={Clicked}></One>
                        <One id='5' score={score} onClick={Clicked}></One>
                   </OneWrap>
                   <Link to={`/`}><Ptag>평점 남기기</Ptag></Link>
               </Grade>
            </>
        
    ) 
}


const Grade=styled.div`
   border: 1px solid #000;
    border-radius: 5px;
    max-width: 372px;
    padding: 36px 0 37% 0;
    margin: 45px auto;
`;
const Span=styled.div`
    border-radius: 8px;
    background: orange;
    padding: 6px;
    color: #ffff;
    width: 100%;
    display: inline;
`;

const One=styled.div`
    width: 30px;
    height: 30px;
    border-radius: 30px;
    margin: 5px;
    background-color: rgb(221, 221, 221);
    &:nth-child(1){
        background-color: ${props=>(props.score>=1 ? '#ff0':'#ddd')};
    }
    &:nth-child(2){
        background-color: ${props=>(props.score>=2 ? '#ff0':'#ddd')};
    }
    &:nth-child(3){
        background-color: ${props=>(props.score>=3 ? '#ff0':'#ddd')};
    }
    &:nth-child(4){
        background-color: ${props=>(props.score>=4 ? '#ff0':'#ddd')};
    }
    &:nth-child(5){
        background-color: ${props=>(props.score>=5 ? '#ff0':'#ddd')};
    }

`;
const OneWrap=styled.div`
display:flex;
justify-content: center;
`;

const Ptag=styled.div`
border: 1px solid skyblue!important;
width: 149px;
margin: 38px auto;
padding: 29px 0px;
border-radius: 5px;
color: #000;
text-decoration-line: none;
/* text-decoration: none!important; */
display: inline-block;
background-color: skyblue;
font-size: 15px;
color: #fff;
font-weight: 800;

`;




export default About;