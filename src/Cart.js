import React from 'react';
import CartItem from'./CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            products: [
               {
                id : 1,
                price : 999,
                title : 'Phone',
                qty : 1,
                img : ''
               },
               {
                id : 2,
                price : 99,
                title : 'watch',
                qty : 10,
                img : ''
               },
               {
                id : 3,
                price : 5000,
                title : 'carvan',
                qty : 1,
                img : ''
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

    render(){
        const {products} = this.state;
        return(
            <div className="cart">
            
                {products.map((product)=>{
                    return <CartItem 
                        product = {product} 
                        key={product.id}
                        // func = {() => console.log("itemsss")} 
                        // isloggedin = {false}
                        // jsx = {<h1>Test</h1>}
                        //comp = {<CartItem/>}
                        onIncreaseQuantity = {this.handleIncreaseQuantity}
                        onDecreaseQuantity = {this.handleDecreaseQuantity}
                        onDelete = {this.handleDeleteProduct}
                    />
                })}

            </div>
        )
    }
}

export default Cart;    