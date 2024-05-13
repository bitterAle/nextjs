import Link from 'next/link';
import React from 'react';

const Prop = ({Propertys}) => {
    return (
        <div className=' p-5  '> 
            <h1 className=' text-5xl capitalize  '>affordable housing for you</h1>
            <p className='p-5'>we got new and affordable houses just for you. along Rongai, Kiserian, Kitengela</p>

            <div className=' w-full  mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 '>
             
             {Propertys.map((property) => (
                <div key={property.id} className=' bg-white rounded-md  p-2'> 
                <img 
                src={property.imageUrl}
                alt='property image'
                className=' max-w-full h-auto object-cover'>
                </img>

                <div className=' p-5 '>
                    <h2 className=' text-3xl text-black'>{property.title}</h2>
                    <div className=' flex justify-between text-black p-5 border-t-2  border-grey-700 border-solid'><strong>Size</strong> <span>{property.size}</span></div>
                    <div className=' flex justify-between text-black p-5 border-t-2  border-grey-700 border-solid'><strong>Location</strong> <span>{property.location}</span> </div>
                    <div className=' flex justify-between text-black p-5 border-t-2  border-grey-700 border-solid'><strong>Price</strong> <span>{property.price}</span></div>
                </div>
                <button className=' bg-blue-700 text-white w-full h-12 rounded-md shadow-sm hover:bg-blue-400'>More Details</button>

                </div>
             ))}
            </div>

            
        </div>
    );
}

export default Prop;
