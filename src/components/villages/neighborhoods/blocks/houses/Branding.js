import React from 'react';
import ReactDOM from 'react-dom';
import ikeapic from '../../../../../images/ikea.png';
import {Link} from 'react-router-dom';

class Branding extends React.Component{
  render(){
    return(
      <div>
        <Link to ="/">
        <img className="branding" src={ikeapic}/>
        </Link>
      </div>
    )
  }
}

export default Branding;
