import React from "react";

export default function Product({product,basket,setBasket}){

    const basketProduct =basket.find (item => item.id === product.id)

    function addBasket(){
        const addFind = basket.find(item => item.id === product.id)
        if(addFind)
        {
            addFind.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id),{
                id: product.id,
                name: product.name,
                img: product.img,
                amount: addFind.amount
            }])
        }
        else
        {
            setBasket([...basket,{
                id: product.id,
                name: product.name,
                img: product.img,
                amount: 1
            }])
        }
    } 

    function removeBasket(){
        const removeFind = basket.find(item => item.id === product.id)
        removeFind.amount -= 1
        if(removeFind.amount === 0)
        {
          setBasket([...basket.filter(item => item.id !== product.id)])  
        }
        else
        {
            setBasket([...basket.filter(item => item.id !== product.id),
            {
                id: product.id,
                name: product.name,
                img: product.img,
                amont: removeFind.amount
            }])
            
        }
    } 

    return(
        <div>
            <div className="product">
                <div className="countProduct">
                    
                <button onClick={addBasket} >+</button> <b> {basketProduct && basketProduct.amount || 0 } </b> <button onClick={removeBasket}>-</button> 

                </div>
                <img src={product.img} />

                <div className="productsInfo">
                    <p> {product.name} </p>
                    <p> {product.price} </p>
                </div>
            </div>
        </div>
    )
};