import React from 'react';
import './addToCard.css'

const AddToCard = ({cart}) => {
    console.log(cart);
    let total = 0
    let totalSheping = 0
    for (const product of cart) {
        total = total + product.price
        totalSheping = totalSheping + product.shipping
    }
    const taxt = total*7/100
    const grandTotal = total + totalSheping + taxt
    return (
        <div className='cartContainer'>
            <div className='cart'>
            <div>Add to Card</div>
            <p>Selected Item :{cart.length}</p>
            <p>Total Price :{total}</p>
            <p>Total Shipping Charge : {totalSheping}</p>
            <p>Tax :${taxt.toFixed(2)}</p>
            <h3>Grand Total : {grandTotal.toFixed(2)}</h3>
            <button className='primaryBtn clrBtn'>Clear Cart</button>
            <button className='primaryBtn reviewBtn'>Review Order</button>
            </div>
        </div>
    );
};

export default AddToCard;