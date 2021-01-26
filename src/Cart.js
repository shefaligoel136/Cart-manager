import React from 'react';
import CartItem from'./CartItem';

class Cart extends React.Component{

    constructor(){
        super();
        this.state = {
            product: [
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

    render(){
        const {product} = this.state;
        return(
            <div className="cart">
            
                {product.map((product)=>{
                    return <CartItem 
                        product = {product} 
                        key={product.id}
                        // func = {() => console.log("itemsss")} 
                        // isloggedin = {false}
                        // jsx = {<h1>Test</h1>}
                        //comp = {<CartItem/>}
                    />
                })}

            </div>
        )
    }
}

export default Cart;    