import React from 'react';

class CartItem extends React.Component{

    // to make our class component a react component, we will add a method

    render(){
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }} >Phone</div>
                    <div style={{ color:'#777' }} >Rs. 99</div>
                    <div style={{ color:'#777' }} >Oty. 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image:{
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;