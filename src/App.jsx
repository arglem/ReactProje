import './index.css'
import Header from './component/Header'
import Product from './component/Product'
import productlist from './productlist.json'
import Basket from './component/Basket'
import {useState,useEffect} from 'react'

function App() {
  const [basket,setBasket] = useState([])

  useEffect(() =>  {

  },[basket])

  return (
    <>
      
      <Header/>
      <div className='productContainer'>
        <div className='productBoxes'>
            {
              productlist.map(product => (
                <Product key={product.id} basket= {basket} setBasket={setBasket} product={product} />
              ))
            }
        </div>

        <Basket/>
      </div>
      
    </>
  )
}

export default App 
