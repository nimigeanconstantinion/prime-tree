// @ts-ignore
import styled from "styled-components";

export const WrapperCard=styled.div.attrs({className:"divhome"})`
  width: 400px;
  height: 200px;
  position: relative;
  background-color: wheat;
  border: 1px solid darkred;
  margin:10px auto;
  font-size: 1em;
  
  .hiddenid{
    display: none;
  }
  
  
  .cardtitle{
    font-size: 0.8em;
    color:black;
    font-weight: bold;
    position: absolute;
    top:5px;
    left: 5px;
  }
  .cardpret{
    font-size: .8em;
    font-weight: normal;
    color: brown;
    position: absolute;
    left:5px;
    top:50px;
  }
  .cardimg{
    width: 200px;
    height:150px;
    position:absolute;
    top:80px;
    right:-60px; 
  }


`