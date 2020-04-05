import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Col, Row} from 'react-grid-system';
import LaptopImg from '../../../../../images/Laptop.jpeg';

class Laptop extends React.Component{
  render(){
    return(
      <Col lg={6}>
      <img className="laptop" src={LaptopImg}/>
      </Col>
    )
  }
}


export default Laptop;
