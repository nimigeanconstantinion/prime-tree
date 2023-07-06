import styled from "styled-components";

export const WrapperPatternd=styled.div.attrs({className:"divpat"})`
  margin: 0px;
  padding: 0px;
  position: relative;
  z-index: 0;
 
  .divd{
    width:70%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    background-color: wheat;
  }
  
  .infopat{
    position:absolute;
    top:100px;
    left: 100px;
    padding: 5px;
    border-radius: 8px;
    background-color: rgba(255,255,192,0.7);
    z-index:10;
  }
  
  .title{
    background-color: dodgerblue;
    color: white;
    font-weight: bolder;
  }
  
  .bbtn{
    width:200px;
    margin:10px
    
  }
  
  label{
    font-size: 1em;
    width: 100px;
    text-align: left;
    margin-left: 10%;
  }
  
  
  input[type=text] {
    height: 30px;
    border: none;
    width: 80%;
    margin: 5px auto;
  }

`
