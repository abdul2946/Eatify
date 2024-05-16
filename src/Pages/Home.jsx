import React from 'react'
import Navbar from '../components/Navbar';
import SimpleSlider from '../components/SimpleSlider';
import OfferSection from '../components/OfferSection';
import ProductSection from '../components/ProductSection';
import Footer from '../components/Footer';

export default function () {
  return (
		<>
			<Navbar />
			<div className="mx-auto my-6">
				<SimpleSlider />
			</div>
			<OfferSection />
			<div className="my-6">
				<h3 className="my-3 font-extrabold text-4xl text-center text-orange-500">
					Top Rated Menu Items
				</h3>
			</div>
			<div className="my-8">
				<ProductSection />
			</div>
			<Footer />
		</>
	);
}
