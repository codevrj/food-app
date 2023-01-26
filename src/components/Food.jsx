import React,{useState} from 'react'
import {data} from '../data/data.js'

function Food() {
    // console.log(data)
const [foods, setFoods] = useState(data);


//filter type burgers/pizza....
const filterType = (category)=>{
    setFoods(
        data.filter((item) =>{
            return item.category === category;
        })
    )
}

//filter by price....

const filterPrice = (price)=>{
    setFoods(
        data.filter((item)=>{
            return item.price === price;
        })
    )
}

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
        <h1 className='text-orange-600 font-bold text-4xl text-center '>Top Rated Menu Items..</h1>

        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between '>
            {/* filter type */}
            <div>
                <p className='font-bold text-gray-500'>Filter By</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={()=>filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={()=>filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burger</button>
                    <button onClick={()=>filterType('BBQ')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>BBQ</button>
                    <button onClick={()=>filterType('biriyani')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Biriyani</button>
                </div>
            </div>

            {/* filter price */}
            <div>
                <p className='font-bold text-gray-500'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterPrice('1000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Rs1000</button>
                    <button onClick={()=>filterPrice('2500')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Rs2500</button>
                    <button onClick={()=>filterPrice('3000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Rs3000</button>
                    <button onClick={()=>filterPrice('4000')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Rs4000</button>
                </div>
            </div>

        </div>
    {/* display foods..images... */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((item, index)=>(
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300 cursor-pointer'>
                    <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg'/>
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{item.name}</p>
                        <p><span className='bg-orange-400 text-white p-2 rounded-full'>Rs:{item.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Food