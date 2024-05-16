import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<nav className="flex justify-between py-8">
			<Link
				to={"/"}
				className="font-extrabold text-3xl hover:scale-105 active:scale-95 hover:text-orange-500 transition-all duration-300"
			>
				EatiFy
			</Link>
			<div className="flex gap-3">
				<input
					type="text"
					placeholder="Search"
					className="hidden sm:block hover:bg-gray-100 bg-gray-200 px-4 py-2 rounded-full focus:outline-orange-500 focus:bg-white transition-all duration-300 text-sm text-gray-600"
				/>
				<button className="bg-orange-500 font-bold rounded-full px-6 text-white hover:scale-105 active:scale-95 transition-all duration-300 hover:bg-orange-400">
					Login
				</button>
			</div>
		</nav>
	);
}
