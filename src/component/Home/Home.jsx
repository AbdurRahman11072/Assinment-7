import React, { useEffect, useState } from 'react';
import Cart from '../Cart/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [blogdata,setblogdata] = useState([]);
    const [selectblogdata,setselectblogdata] = useState([]);
    const [remaning,setremaning] = useState([20]);
    const [totalcredit,settotalcredti] =useState([0]);

    useEffect(() =>{
        fetch('/fakedata.json')
        .then(res =>res.json())
        .then(data =>setblogdata(data))
    },[]);

    const handlecart = (blog) =>{
        const isExist = selectblogdata.find((blogs) => blogs.id==blog.id);
        let count= blog.credit;
        
        if(isExist)
        {
            toast("YOu are already Enrolled in this course!");
        }
        else{
            selectblogdata.forEach((item) =>{
                count= count+item.credit;
                
            })
            const remaningCredit= 20-count;
            if(count > 20){
                toast("20 Hour Credit has been reachede!");
                
            }
            else{
                settotalcredti(count)
                setselectblogdata([...selectblogdata,blog])
            }

            if(remaningCredit<0)
            {
                
            }
            else{
                setremaning(remaningCredit)
            }
              
               

            
        }
    }
  
    return (
  <div className='block md:flex gap-5'>
    
    <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 '>
         {blogdata.map((blog) =>(
             <div key={blog.id} className=' w-[300px]  p-4 text-left bg-white rounded-md shadow-black'>
             <img className='w-full' src={blog.cover} alt=""  />
        <h1 className='text-lg font-bold my-3'>{blog.title}</h1>
             <p>{blog.description}</p>
             <div className='flex justify-between my-3'>
                 <p>Price:{blog.price}</p>
                 <p>cradit:{blog.credit}Hr</p>
             </div>
             <button
             onClick={() =>handlecart(blog)}
             className='w-full h-10 bg-blue-500 text-xl text-white font-medium rounded-md'>select</button>
         </div>
         ) )}
    </div>

    <div className=' w-[300px] bg-white rounded-md ml-5'> <Cart selectblogdata={selectblogdata}  totalcredit={totalcredit} remaning={remaning}></Cart> </div>

    <ToastContainer />
  </div>     
  
    );
};

export default Home;