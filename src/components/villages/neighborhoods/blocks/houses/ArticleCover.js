import React from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-grid-system';
import articlecoverimg from '../../../../../images/articlecover.png';

class ArticleCover extends React.Component{
  render(){
    return(
      <Col lg={6}>
      <img className = "article-cover" src={articlecoverimg}/>
      </Col>
    )
  }
}

export default ArticleCover; 
