import React from 'react';
import './Input.css';

class Input extends React.Component{
   render(){
      return (
         <div className='flexChild'>
            <span className='inputSelectSpan'>{this.props.inputLabel}</span>
            <input type="text" id={this.props.inputId}/>
         </div>
      )
   }
}

export default Input
