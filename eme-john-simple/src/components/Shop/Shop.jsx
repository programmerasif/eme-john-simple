import React, { useEffect, useState } from 'react';
import AddToCard from '../../AddToCard/AddToCard';
import Card from '../../Card/Card';
import './Shop.css'

const Shop = () => {
    const [product, setProduct] = useState([])
    const [cart , setCart] = useState([])
    useEffect( () =>{
        fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
        .then( res => res.json())
        .then( data => setProduct(data))
    } ,[])
    const handelAddToCard = (props) =>{
        const newCart = [...cart, props]
        setCart(newCart)
    }
    return (
        <div>
            <div className='shopContainer'>
                <div className="product">
                    {
                        product.map(singleProduct => <Card 
                            sProduct={singleProduct} 
                            key={singleProduct.id}
                            handelAddToCard={handelAddToCard}
                            />)
                    }
                </div>
                <div className="card">
                    <AddToCard  cart={cart}/>
                </div>
            </div>
        </div>
    );
};

export default Shop;