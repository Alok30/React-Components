import React from 'react';

class TextBox extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<div>
      {this.props.name}
      </div>)
  }
};
export default TextBox;
