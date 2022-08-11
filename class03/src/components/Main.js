import React, { Component } from 'react';
import data from '../data.json';
import Product from './Product';

export default class Main extends Component {
  render() {
    return (
      <div>
       <h1>Some Products</h1>
       <img src='https://api.time.com/wp-content/uploads/2019/11/gettyimages-459761948.jpg' alt='A banana'/>
    {/* product component goes here */}
    {data.products.map(product => {
        return(
        <Product title={product.title} description={product.description}  img={product.images[0]} key={product.id}/>
        )
    } )}

      </div>
    )
  }
}
