import { useEffect, useState } from "react";
import Product from "./Product";

export default function ProductSection() {
	const [data, setData] = useState([]);
  const [foods, setFoods] = useState([]);
  const [category, setCategory] = useState("all");

	useEffect(() => {
		fetch("http://localhost:3000/foods")
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setFoods(data);
				setData(data);
			})
			.catch((err) => console.log(err));
  }, []);
  
  const filterItem = async (category) => {
		const updateItem = await foods.filter((elem) => {
			return elem.category === category;
		});
		setData(updateItem);
	};

	return (
		<div>
			<div className="mb-6">
				<h4 className="text-2xl my-3 font-extrabold">Filter Items</h4>
				<div className="grid grid-cols-3 sm:flex gap-3 font-bold">
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "all"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							setData(foods);
							setCategory("all");
						}}
					>
						All
					</button>
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "burger"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							filterItem("Burger");
							setCategory("burger");
						}}
					>
						Burger
					</button>
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "noodles"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							filterItem("Noodles");
							setCategory("noodles");
						}}
					>
						Noodles
					</button>
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "biriyani"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							filterItem("Biriyani");
							setCategory("biriyani");
						}}
					>
						Biriyani
					</button>
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "pizza"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							filterItem("Pizza");
							setCategory("pizza");
						}}
					>
						Pizza
					</button>
					<button
						className={`rounded-full border-2 border-orange-500 px-3 py-1 ${
							category === "sandwich"
								? "bg-orange-500 text-white"
								: "text-orange-500"
						}`}
						onClick={() => {
							filterItem("Sandwich");
							setCategory("sandwich");
						}}
					>
						Sandwich
					</button>
				</div>
			</div>
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6">
				{data?.map((res) => {
					return (
						<Product
							key={res.id}
							foodItem={res.foodItem}
							price={res.price}
							image={res.image}
						/>
					);
				})}
			</div>
		</div>
	);
}
