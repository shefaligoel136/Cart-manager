import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state = {
        products: [
           {
            id : 1,
            price : 1000,
            title : 'Phone',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
           },
           {
            id : 2,
            price : 100,
            title : 'watch',
            qty : 10,
            img : 'https://images.unsplash.com/photo-1461141346587-763ab02bced9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1248&q=80'
           },
           {
            id : 3,
            price : 500,
            title : 'Earphones',
            qty : 1,
            img : 'https://images.unsplash.com/photo-1505236273191-1dce886b01e9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80'
           }

        ]
    }
    //this.increaseQuantity = this.increaseQuantity.bind(this)
    //this.testing();
}


handleIncreaseQuantity = (product) =>{
    console.log("inc the quantity of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    products[index].qty +=1 ;

    this.setState({
        products 
    })
}

handleDecreaseQuantity = (product) =>{
    console.log("dec the quantity of ", product);
    const { products } = this.state;
    const index = products.indexOf(product);
    if(products[index].qty >0 ){
        products[index].qty -=1 ;
    }

    this.setState({
        products 
    })
}

handleDeleteProduct = (id) =>{
    
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id); // this will return me the array which will not have the id which has been passed
    this.setState({
        products : items
    })

}

getCartCount = () =>{
  const { products } = this.state;
  let count = 0;

  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartPrice = () =>{
  const { products } = this.state;
  let price = 0;

  products.forEach((product) =>{
    price = price + (product.qty*product.price)
  })

  return price;
}

  render() {

    const {products} = this.state;

    return (
      <div className="App">
        < Navbar 
          count = {this.getCartCount()}
        />
        < Cart 
          products = {products} 
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDelete = {this.handleDeleteProduct}
        />
        <div style={{fontSize:20 , padding:10}}>
           TOTAL: {this.getCartPrice()}
        </div>
      </div>
    );
  }
}

export default App;
