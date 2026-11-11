import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Collection = () => {
    const {products}=useContext(ShopContext);
    const [showFilter,setShowFilter]=useState(false);
    const [filterProduct,setFilterProduct]=useState([]);
    const[categoryy,setCategoryy]=useState([]);
    const[subCategory,setSubCategory]=useState([]);
    const[sortType,setSortType]=useState("relevant");

    
        const toggleCategory = (e) => {
            if (categoryy.includes(e.target.value)) {
              setCategoryy(prev => prev.filter(item => item !== e.target.value));
                
            } else {
              setCategoryy(prev => [...prev, e.target.value]);
              
            }
          };
          const toggleSubCategory = (e) => {
            if (subCategory.includes(e.target.value)) {
                setSubCategory(prev => prev.filter(item => item !== e.target.value));
                
            } else {
                setSubCategory(prev => [...prev, e.target.value]);
              
            }
          };
          const applyFilter =() =>{
            let productsCopy= products.slice();
            // if(category.length > 0){
            //    // productsCopy => 
            //         productsCopy(item=> category.includes(item.category));//category(item.category) )
            //     //productsCopy=productsCopy(item=>category(item.category));
            //     //productsCopy = productsCopy(item => category(item.category))
            // }
            if (categoryy.length > 0) {
                productsCopy = productsCopy.filter(item => 
                  categoryy.includes(item.category)
            
                  //item.category == category.
                );
              }
               if (subCategory.length > 0) {
                productsCopy = productsCopy.filter(item =>
                  subCategory.includes(item.subCategory)
            
                  //item.category == category.
                );
              }
            
            setFilterProduct(productsCopy);
          }
    
          const sortProduct = ()=> {
            let fpCopy = filterProduct.slice();
            switch(sortType)
            {
              case 'low-hight':
                setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)));
                break;
              case 'hight-low':
                setFilterProduct(fpCopy.sort((a,b)=>(b.price - a.price)));
                break;
              default:
                  applyFilter();
                  break;
            }

          }

          useEffect(() => {
            console.log("Catégories sélectionnées :", categoryy,"sub ct",subCategory);
            applyFilter();
            console.log("product sélectionnées :", filterProduct.slice());
           
          }, [categoryy,subCategory]);

        
    useEffect(()=>{setFilterProduct(products)},[]);

    useEffect(() => {
      console.log("Nouvelle liste de produits :", filterProduct);
    }, [filterProduct]);
    useEffect(()=>{sortProduct()},[sortType])
  return (
    
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
     {/** filter options */}
        <div className='min-w-60'>
            <p className='my-2 text-xl flex items-center cursor-pointer gap-2' onClick={()=>{setShowFilter(!showFilter)}}>FILTERS

            <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90':''}`} src={assets.dropdown_icon} />
            
            </p>
        
        {/* category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Men'} onChange={toggleCategory} /> Men
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Women'} onChange={toggleCategory} /> Women
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Kids'}onChange={toggleCategory} /> Kids
                </p>
            </div>
        </div>
        {/* Subcategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '':'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-medium'>Type</p>
            <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Topwear'} onChange={toggleSubCategory} /> Topwear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Bottomwear'} onChange={toggleSubCategory} /> Bottomwear
                </p>
                <p className='flex gap-2'>
                    <input type="checkbox" className="w-3" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
                </p>
            </div>
        </div>
        </div>
    
        {/* Right side  */}
        <div className='flex-1'>   
            <div className='flex justify-between text-base sm:text-2xl mb-4'>
                <Title text1={'ALL  '} text2={'COLLECTIONS'}/>
                {/* Product sort */}
                <select onChange={(e)=>{setSortType(e.target.value)}} className='border-2 border-gray-300 text-sm px-2'>
                    <option value="relevant">Sort by: relavent</option>
                    <option value="low-hight">Sort by: Low to Hight</option>
                    <option value="hight-low">Sort by: High to low</option>
                </select>
            
            </div>
            {/* map products */}
            <div className='grid grid-cols-2 md:grid-cols-4  lg:grid-cols-4 gap-4 gap-y-6'>
                {
                filterProduct.map((item,index)=>(<ProductItem key={index} name={item.name} image={item.image} price={item.price}/>)

                )
                }
            </div>
        </div>

    
    </div>
  )
}

export default Collection
