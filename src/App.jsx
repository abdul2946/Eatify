import Footer from './components/Footer';
import Navbar from './components/Navbar'
import OfferSection from './components/OfferSection';
import ProductSection from './components/ProductSection';
import SimpleSlider from './components/SimpleSlider'

function App() {
  return (
		<div className="px-10 font-nunito">
			<Navbar />
			<div className="mx-auto my-6">
				<SimpleSlider />
			</div>
			<OfferSection/>
      <div className='my-6'>
        <h3 className='my-3 font-extrabold text-4xl text-center text-orange-500'>Top Rated Menu Items</h3>
      </div>
      <div className='my-8'>
        <ProductSection/>
			</div>
			<Footer/>
		</div>
	);
}

export default App
