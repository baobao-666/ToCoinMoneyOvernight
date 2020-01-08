import React, { useEffect } from 'react';
import './indexs.scss'
import useStore from '../../../utils/useState'
import { useObserver } from 'mobx-react-lite'
import Special from '../special/index';
const ShoppCart: React.FC = () => {
  let store = useStore()
  let { ShoppCart } = store;
  useEffect(() => {
    ShoppCart.getShop();
   
  }, [ShoppCart]);
  
  return useObserver(() => (
    <div className='cart-wrap'>
      <div className='header'>
        <p>
          <i></i>
          <span>30天无忧退货</span>
        </p>
        <p>
          <i></i>
          <span>48小时快速退款</span>
        </p>
        <p>
          <i></i>
          <span>满88元免邮费</span>
        </p>
      </div>
    

        <div className='count' >
        {
          ShoppCart.list.map((item, index) => {
            return <div className='list' key={index}>
              <div className='ck'>
              <input type="checkbox" name="" id=""/>
              </div>
               <div className='lefts'>
                 <img src={item.list_pic_url} alt=""/>
               </div>
               <div className='center' key={index}>
          <div>{item.goods_name}</div>
                  <div></div>
          <div>￥{item.retail_price}</div>

               </div>
               <div className='rights'>
              x{item.number}
               </div>
             </div>
         })
      }
        </div>
        <div className='foot'>
          
            <div className='ck'>
                <input type="checkbox" name="" id=""/>
                
            </div>
            <span>
                  已选() 
                </span>
                <span>
                  ￥
                </span>
                <button>下单</button>
             
              
            
          
      
      </div>
      
      
      
    </div>
  )

  )

}


export default ShoppCart;
