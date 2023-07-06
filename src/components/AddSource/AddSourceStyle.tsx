import styled from "styled-components";

export const WrapperFormAdd=styled.div.attrs({className:"divadd"})`
  width:100%;
  height: 100%;
  padding-top: 140px;
  .formadd{
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    
    align-items: flex-start;
    justify-content: flex-start;
    width: 800px;
    max-height: 500px;
    overflow-y: auto;
    background-color: wheat;
    margin: auto;
    font-size: 1em;
    padding: 15px;
  }
  
  label{
    font-size: 1em;
    width: 100px;
    text-align: left;
  }

  .cell{
    margin: 2px 2px;
    width: 200px;
  }
  .cell ,date{
    max-width: 200px;
  }
  input[type=text] {
    height: 30px;
    border: none;
    width: 100%;
  }
  
  .selopt{
    width:100%;
    height: 30px;
    border: none;
    margin-top: 2px;
  }
  table{
    font-size: .7em;
    color: #5e1d3d;
  }
  .sel{
    border: none;
    width: 100px;
    height: 30px
  }
  .plus{
    display: none;
  }
  .addbtn{
    margin-right: 10px ;
    
  }
  .commands{
    display: flex;
    align-items: center;
    width:100%;
    height: 30px;
  }
  .addbtn:hover{
    color:darkgreen;
  }
  .commands .unu p{
    color:darkslategray;
    margin-left: 30px;
    height: 30px;
  }
  .doi p{
    color:darkslategray;
    height: 30px;
    
  }
  .commands.doi{
    width: 600px;
  }
  //col1{
  //  width:100px;
  //}
  
  
  .delbtn{
    margin-right: 30px;  
  }
  
  .delbtn:hover{
    color:red;
  }
  .hide{
    display: none;
  }
  
  .show{
    display: block;
  }
  
  //.fields{
  //  display: grid;
  //  height: max-content;
  //  grid-template-columns: repeat(3, 1fr);
  //  grid-row-gap: 2px;
  //  grid-column-gap: 4px;
  //  grid-template-rows: minmax(30px,35px);
  //  
  //}
  
  .flds{
      display: grid;
      height: max-content;
      grid-template-columns: repeat(3, 1fr);
      grid-row-gap: 2px;
      grid-column-gap: 4px;
      grid-template-rows: minmax(30px,35px);
    
    
  }
  #divb{
    display: flex;
    width: 750px;
    flex-direction: row;
    justify-content: space-between;
  }

  .btnd{
    margin-top:3px;
    margin-bottom:3px;
    margin-left: 10px;
    height: 40px;
  }
  #col1,#col2{
    width: 173px;
    text-align: left;
    
  }
  //#col2{
  //  width: 200px;
  //  text-align: left;
  //
  //}
  //  #col3{
  //    text-align: left;
  //    width: 100px;
  //  }
  .btnarea{
    display: flex;
    flex-direction: column;
    width:150px;
  }
  
  
  
  
  
  
  
  
  
  
  
  
`