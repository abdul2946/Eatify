import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 800,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};
	return (
		<Slider {...settings} className="rounded-xl overflow-hidden">
			<div className="relative max-h-[30rem] rounded-xl overflow-hidden">
				<div className="absolute h-full flex flex-col justify-center bg-black/40 w-full p-6">
					<h1 className="text-6xl font-bold text-white">
						The <span className="text-orange-600">Best</span>
					</h1>
					<h1 className="text-6xl font-bold text-white">
						<span className="text-orange-600">Foods</span> Delivered
					</h1>
				</div>
				<img
					src="https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					alt=""
					className="object-cover w-full"
				/>
			</div>

			<div className="relative max-h-[30rem] rounded-xl overflow-hidden">
				<div className="absolute h-full flex flex-col justify-center bg-black/40 w-full p-6">
					<h1 className="text-6xl font-bold text-white">
						The <span className="text-orange-600">Best</span>
					</h1>
					<h1 className="text-6xl font-bold text-white">
						<span className="text-orange-600">Foods</span> Delivered
					</h1>
				</div>
				<img
					src="https://images.unsplash.com/photo-1516685018646-549198525c1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					className="object-cover w-full"
				/>
			</div>
			
			<div className="relative max-h-[30rem] rounded-xl overflow-hidden">
				<div className="absolute h-full flex flex-col justify-center bg-black/40 w-full p-6">
					<h1 className="text-6xl font-bold text-white">
						The <span className="text-orange-600">Best</span>
					</h1>
					<h1 className="text-6xl font-bold text-white">
						<span className="text-orange-600">Foods</span> Delivered
					</h1>
				</div>
				<img
					src="https://images.unsplash.com/photo-1503767849114-976b67568b02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
					alt=""
					className="object-cover w-full"
				/>
			</div>
		</Slider>
	);
}
