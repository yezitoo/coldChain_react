import React from 'react';
import './Button.css';

class Button extends React.Component{
   render(){
      return (
        <div>
           <button id='query'>查询</button>
           <button id='reset'>重置</button>
           <button id='add'>新增</button>
        </div>
      )
   }
}

export default Button
