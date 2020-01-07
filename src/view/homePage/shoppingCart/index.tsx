import React, { useEffect } from 'react';
import './indexs.css'
import useStore from '../../../utils/useState'
import { useObserver } from 'mobx-react-lite'
const ShoppCart: React.FC = () => {
  let store = useStore()
  let { ShoppCart } = store;
  useEffect(() => {
    ShoppCart.getShop()
  }, [ShoppCart])
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
      
      {
        ShoppCart.list.map((item, index) => {

        })
      }
      <div className='foot'>
       
      <span>
           已选(0) ￥0 
         </span>
         <span>
           编辑
         </span>
        <button>下单</button>
      </div>
    </div>
  )

  )

}
//       <div className='count'>
//         <div className='list'>
//         <div>

//         </div>
// <div className='lefts'>
// <img src="http://yanxuan.nosdn.127.net/8392725765cdd57fdae3f173877f4bda.png" alt=""/>
// </div>
// <div className='center'>
// <div>星云酥 180克/3颗</div>
// <div></div>
// <div>￥26</div>
// </div>
// <div className='rights'>
// <div>x19</div>
// </div>
//       </div>
//     </div>
//       <div className='foot'>
//       

export default ShoppCart;
