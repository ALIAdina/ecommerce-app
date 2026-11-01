import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const BestSeller = () => {
  const {products}=useContext(ShopContext);
  const[bestseller,setBestSeller]=useState([]);
useEffect(()=>{
    const bestProduct=products.filter((item)=>(item.bestseller));
    setBestSeller(bestProduct.slice(0,5))
    console.log('best selller ',bestProduct);
},[]);


  
    return (
    <div className='my-10'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST '} text2={'Seller'}></Title>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
            Lorem Ipsum is simply dummy text of the printing and typesting industry.
            </p>

        </div>
      {/*  Rendring best seller */}
      <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
        {
            bestseller.map((item,index)=>(
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>
    </div>
  )
}
export default BestSeller;

// const {products}=useContext(ShopContext);
// const[bestseller,setBestSeller]=useState([]);
// useEffect(()=>{
//     const bestProduct=products.filter((item)=>(item.bestseller));
//     setBestSeller(bestProduct.slice(0,5))
// },[]);

// export default Bes

// tSeller










// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const BestSeller = () => {
// //     const {products}= useContext(ShopContext);
// //     const[BestSeller,setBestSeller]=useState([]);
// //     useEffect(()=>{setBestSeller(products.slice(0,10))
// //         ,[]
// //     }
    
// // );
// const {products}=useContext(ShopContext);
// const[latestProducts,setLatestProducts]=useState([]);
// useEffect(()=>{setLatestProducts(products.slice(0,10))},[])
// console.log(products.slice(0,50));

//   return (
//    <div>
//     <div className='text-center py-8 text-3xl'>hello
//     {/* <Title text1={'Best '} text2={'Sellers'}/>
//     <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem Ipsum is simply dummy text of printing and typesyting industry.Lorem Ipsum has been the.</p> */}
// </div>
//          {/* <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
//         {
//             BestSeller.map((item,index)=>(
//                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
//            ))
        
//         }
//     </div>   */}

// <div className='grid grid-cols-2 sm:grid-col-3 md:grid-cols-4 lg:grid-col-5 gap-4 gap-y-6'>
//         {
//             latestProducts.map((item,index)=>(item.bestseller ?
//                 <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
//             :<>linda</>))
//         }
//       </div>
//     </div>
//   )
// }

// export default BestSeller

