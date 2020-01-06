import React from 'react';
import './index.css'

const ClassFiy: React.FC = () => {
  return (
    <div className="classfiy-wrap">

      <input type="text" placeholder='搜索商品，共239款好物' />
      <div className='count'>
        <div className='left'>
          <p>1</p>
          
        </div>
        <div className='right'>
          <div>2</div>
          
        </div>
      </div>

    </div>
  );
}

export default ClassFiy;
