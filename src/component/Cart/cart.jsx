import React from 'react';

const Cart = ({selectblogdata,remaning, totalcredit}) => {
   console.log(remaning);
    return (
        <div className='p-4 '>
           
           <h1 className='text-[17px] text-purple-500 font-bold text-left'>Credit Hour Remaining : {remaning}Hr</h1>
           <div className='bg-[#787878] w-full h-[2px] my-5'></div>
           <h1 className='text-2xl font-bold  text-purple-500 text-left'>Course Name</h1>
           <div >
         {selectblogdata.map((blog) =>(
             
        <h1 key={blog.id} className='text-base font-medium my-3 text-left'>{blog.title}</h1>
             
            
      
         ) )}
     </div>
             <div className='bg-[#787878] w-full h-[2px] my-5'></div>
            <h1 className='text-lg text-purple-500 font-bold text-left'>Total Credit Hour : {totalcredit}Hr</h1>
        </div>
    );
};

export default Cart;