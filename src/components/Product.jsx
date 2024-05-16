export default function Product({foodItem,price,image}) {
	
	return (
		<div className="rounded-lg overflow-hidden shadow-xl hover:shadow-orange-300 hover:scale-105 transition-all duration-300">
      <img src={image} alt="" className="object-cover w-full h-56" />
      <div className="flex gap-2 justify-between align-middle px-2 py-3 font-semibold">
        <div>
          <p className="font-bold">{foodItem}</p>
        </div>
       <div>
         <span className="px-3 py-1 rounded-full text-xs bg-orange-500 text-white">${price}</span>
       </div>
      </div>
		</div>
	);
}
