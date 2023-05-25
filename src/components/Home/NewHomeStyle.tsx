import styled from "styled-components";


export const WrapperNewHome=styled.div.attrs({className:"divhome"})`
  padding: 0px;
  
  margin:0px;
  display: flex;
  flex-direction: row;
  
  .div_l{
    height: 100vH;
    width: 30%;
    background-color: #b1b3f8;
    
  }

  .p-tree{
    color: #043231 ;
    background: #B1FAF9;
    max-height: 90vh;
    overflow-y: auto;
    margin: 20px 5px;
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

  .p-menuitem-text{
    color:red;
  }

  .p-menuitem-icon{
    margin-right: 10px;
  }

  
  .div_r{
    height:100vh;s
    background-color: #64748b;
    width: 70%;
    
    
  }

  .ant-menu-item-selected {
    background-color: #B039CC !important;
  }


.delb{
  color: red;
}
  .ant-dropdown-trigger,.drop{
    border: 2px solid red;   
  }
 


`