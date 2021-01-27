import React from 'react';
import CartItem from'./CartItem';

const Cart = (props) =>{
        const {products} = props;
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
                        onIncreaseQuantity = {props.onIncreaseQuantity}
                        onDecreaseQuantity = {props.onDecreaseQuantity}
                        onDelete = {props.onDelete}
                    />
                })}

            </div>
               
        )

    }

export default Cart;    