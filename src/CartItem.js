import React from 'react';

const CartItem = (props) => {



    // increaseQuantity = () => {
        // this.state.qty += 1;
        // console.log("this",this.state);

        // set state form-1
        // this.setState({
        //     qty: this.state.qty +1
        // });

        //set state form-2
    //     this.setState((prevState) =>{
    //         return{
    //             qty: prevState.qty+1,
    //         }
    //     });
    // }

    // decreaseQuantity = () => {

    //     const{qty} = this.state;
    //     if(qty === 0){
    //         return;
    //     }

    //     this.setState((prevState) =>{
    //         return{
    //             qty: prevState.qty-1
    //         }
    //     });
    // }

    // delete = () =>{
    //     this.setState({
    //         qty: 0
    //     });
    // }

    // testing(){
    //     const promise = new Promise((resolve,reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         this.setState({
    //             qty: this.state.qty + 10
    //         });
    //         this.setState({
    //             qty: this.state.qty + 10
    //         });
    //         this.setState({
    //             qty: this.state.qty + 10
    //         });
    //         console.log('state',this.state);
    //     })
    // }

    // to make our class component a react component, we will add a method

    
        
        const{ price, title ,qty } = props.product;
        const{product, onIncreaseQuantity, onDecreaseQuantity, onDelete} = props;
        return(
            <div className="cart-item">
               
                <div className="left-block">
                    <img style={ styles.image } src = {product.img} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }} >{title}</div>
                    <div style={{ color:'#777' }} >Rs {price}</div>
                    <div style={{ color:'#777' }} >Oty. {qty}</div>
                    <div className="cart-item-actions">
                        <img 
                            alt="increase" 
                            className="action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1611767700~hmac=71bc4d8238aa3c3462c02dcda9871451"
                            onClick = {() => onIncreaseQuantity(product)}
                        />

                        <img 
                            alt="decrease" 
                            className="action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1611767773~hmac=11da138b18c23e6db3d1a021c0bcc8aa"
                            onClick = {() => onDecreaseQuantity(product)}
                        />
                        <img 
                            alt="delete" 
                            className="action-icons" 
                            src = "https://www.flaticon.com/svg/vstatic/svg/72/72447.svg?token=exp=1611767810~hmac=0c25f9368d83b86cb09b7dae7b8c1d39"
                            onClick = {() => onDelete(product.id)}
                        />
                    </div>
                </div>
            </div>
        );
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