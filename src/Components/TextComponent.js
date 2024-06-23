import React from 'react';
import withLogger from 'Hoc';
const TextWithHoc= () =>{
  return <div>hello</div>
}
const enhancedComponent = withLogger(TextWithHoc);

export default enhancedComponent;
