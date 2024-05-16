import React from 'react'

export default function OfferComponent({title,subTitle,Image}) {
  return (
		<div className="relative h-56 rounded-lg w-full overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-orange-300">
			<div className="absolute flex flex-col justify-between h-full bg-black/40 w-full p-2 px-4">
        <div>
          <h4 className='font-bold text-white text-2xl'>{title}</h4>
          <p className='text-white font-semibold'>{subTitle}</p>
        </div>
        <div>
          <button className='bg-white px-4 py-1 rounded-full text-sm font-semibold hover:bg-orange-500 hover:text-white mb-4'>Order Now</button>
        </div>
			</div>
			<img
				src={Image}
				alt=""
				className="object-cover h-full w-full"
			/>

		</div>
	);
}
