import React from 'react';
import './Select.css';

class Select extends React.Component{
   render(){
      return (
         <div className='flexChild'>
           <span className='inputSelectSpan'>{this.props.selectLabel}</span>
           <select id={this.props.selectId}>
              {
                this.props.option.map((value,index)=>{
                    return <option key={value.toString()}>{value}</option>
                })
              }
           </select>
         </div>
      )
   }
}
export default Select
