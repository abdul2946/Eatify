import React from "react";

export default function Navbar() {
	return (
		<nav className="flex justify-between py-8">
      <h1 className="font-extrabold text-3xl">EatiFy</h1>
      <div className="flex gap-3">
        <input type="text" placeholder="Search" className="hidden sm:block bg-gray-200 px-4 py-2 rounded-full focus:outline-orange-500 focus:bg-white"/>
        <button className="bg-orange-500 font-semibold rounded-full px-6 text-white">Login</button>
      </div>
		</nav>
	);
}
