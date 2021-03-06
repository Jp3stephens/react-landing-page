import React from 'react';
import ReactDOM from 'react-dom';

import Header from './neighborhoods/Header.js';
import Footer from './neighborhoods/Footer.js';

class Demo extends React.Component{
  render(){
    return(
      <div className="demo">
        <Header title="Chat Bot Demo" subtitle="Watch how it works." messages={true}/>
        <Footer/>
      </div>
    )
  }
}

export default Demo;
