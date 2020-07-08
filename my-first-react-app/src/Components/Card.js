import React from 'react';
import styled from 'styled-components';


const Box = styled.div`
align-items:center;
color:black;
max-width: 50%;
height: auto;
padding: 3%;
background-color: pink;
border-radius: 50px;
box-sizing: border-box;
margin: 10px 0;
display: flex;
flex-direction: column;
margin: 10%;
`
const Img = styled.img`
width: 15rem;
height: auto;
`
export default function Card(props){
    return(
        <Box>
            <Img src = {props.userImg}/>
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <a href = "https://github.com/Barbora-Dejlova">{props.profile}</a>
            <h4>Followers {props.followers}</h4>
            
        </Box>
  )
}