import React from 'react';
import './Img.css';
import logo from './logo.jpg';

class Img extends React.Component{
    render(){
       return (
          <div className={this.props.name}>
             <img src={logo}/>
          </div>
       )
    }
}

export default Img
