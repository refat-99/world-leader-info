import React from 'react';
import './Cart.css'

const Cart = (props) => {
  const {addPerson, leader,proparty} = props;

   
    return (
        <div className='cart-container'>
            <h4 className='cart-h4'>CART INFORMATION</h4>
                <h4>Total Person : {addPerson}</h4>
             <h5 className='cart-h5'>Total Proparty : ${proparty} </h5>
             <br></br>
             <p className='cart-h5'><i className="fa-solid fa-user-plus"></i>{leader}</p>
        </div>
    );
};

export default Cart;