import React from 'react';
import './Text.css';

class Text extends React.Component{
    render(){
       return(
          <div className={this.props.til.name}>
             {this.props.til.tet}
          </div>
       )
    }
}

export default Text
