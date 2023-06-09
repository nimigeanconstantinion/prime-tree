
// @ts-ignore
import styled from "styled-components";
<script lang="javascript" src="dist/xlsx.full.min.js"></script>

export const WrapperHome=styled.div.attrs({className:"divhome"})`
  width: 100vw;
  
  font-size: 1em;
  display: flex;
  flex-direction: row;
  
  .divL{
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: 5px;
    height: 100vh;
    
    width: 30%;
  }

  .w-full{
    margin-top: 10px;
  }
  
  .divR{
    display: flex;
    flex-direction: column;
    align-items: center;
  //  justify-content: center;
    width: 80vw;
  }
  .divsearch{
    display: flex;
    align-items: center;
    justify-content: center;
    height:10vh;
  }
  
  .divshow{
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    justify-content: space-evenly;
    width:100%;
    height: 90vh;
    padding:10px;
    overflow-y: auto;
    
  }
  
  .p-tree{
    color: brown;
    background: wheat;
    max-height: 90vh;
    overflow-y: auto;
  }
  
  .p-tree-container{
    overflow-y: auto;

  }

  .p-input-icon-left{
    width: 200px;
  }
  .card.flex{
    margin-left: 10px;  
  }

  .icomen{
    margin-right: 10px;
  }

  .p-menu-.p-menuitem-text{
    color:red !important;
  }

  .p-menuitem-icon{
    margin-right: 5px; 
  }

.p-menu-item:hover{
  background-color: #5e1d3d;
}
  .p-menu-list {
    background-color: #5e1d3d;

`
