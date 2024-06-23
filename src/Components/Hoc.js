import React from 'react';

const withLogger = (Component) => {
  return function WrapperComponent(props){
    useEffect(()=>{},[])

    return <Component {...props}/>
  }
}
