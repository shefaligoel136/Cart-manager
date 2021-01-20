import React from 'react';

class CartItem extends React.Component{


    constructor(){
        super();
        this.state = {
            price : 999,
            title : 'Phone',
            qty : 1,
            img : ''
        }
        //this.increaseQuantity = this.increaseQuantity.bind(this)
    }

    increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("this",this.state);

        // set state form-1
        // this.setState({
        //     qty: this.state.qty +1
        // });

        //set state form-2
        this.setState((prevState) =>{
            return{
                qty: prevState.qty+1,
            }
        });
    }

    decreaseQuantity = () => {

        const{qty} = this.state;
        if(qty === 0){
            return;
        }

        this.setState((prevState) =>{
            return{
                qty: prevState.qty-1
            }
        });
    }

    delete = () =>{
        this.setState({
            qty: 0
        });
    }

    // to make our class component a react component, we will add a method

    render(){
        const{ price, title ,qty } = this.state;
        return(
            <div className="cart-item">
                <div className="left-block">
                    <img style={ styles.image } />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }} >{title}</div>
                    <div style={{ color:'#777' }} >Rs {price}</div>
                    <div style={{ color:'#777' }} >Oty. {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611064483~hmac=16292115f5cfcec252d4cc1c829d773f" 
                            onClick = {this.increaseQuantity}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611064443~hmac=0eff4dab5b34dfd00b0c33e57ffc09cd" 
                            onClick = {this.decreaseQuantity}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src="https://www.flaticon.com/svg/vstatic/svg/72/72205.svg?token=exp=1611064557~hmac=a544057b2cadb3c9b5d17b7a3e131f52" 
                            onClick = {this.delete}
                        />
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