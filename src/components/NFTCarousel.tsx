import { useState, useEffect } from "react";

interface CarouselItem {
	image: string;
	title: string;
	description: string;
}

const NFTCarousel = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const items: CarouselItem[] = [
		{
			image: "https://superboard.xyz/_next/static/media/nftstar.2b65567e.svg",
			title: "Earn digital assets, SUPR points and NFCDs",
			description:
				"We like rewards, innit? each quest is rewarding with experience points, mastering onchain skills and getting hands on those cool NFCDs!",
		},
		{
			image: "https://superboard.xyz/_next/static/media/coingame.1fd1d840.svg",
			title: "Another NFT Collection",
			description: "Discover more amazing NFTs and rewards in our collection!",
		},
	];

	useEffect(() => {
		const interval = setInterval(() => {
			setIsTransitioning(true);
			setTimeout(() => {
				setActiveIndex((current) => (current + 1) % items.length);
				setIsTransitioning(false);
			}, 300);
		}, 5000);

		return () => clearInterval(interval);
	}, [items.length]);

	const handleSlideChange = (index: number) => {
		if (index !== activeIndex) {
			setIsTransitioning(true);
			setTimeout(() => {
				setActiveIndex(index);
				setIsTransitioning(false);
			}, 300);
		}
	};

	return (
		<section className='bg-[#2D1B69] rounded-[2rem] p-12 my-[2rem] relative overflow-hidden'>
			<div className='flex flex-col md:flex-row items-center gap-8'>
				<div className='w-full md:w-1/2'>
					<div className="relative">
						<img
							src={items[activeIndex].image}
							alt='NFT'
							className={`w-full max-w-md mx-auto transition-opacity duration-300 ${
								isTransitioning ? "opacity-0" : "opacity-100"
							}`}
						/>
					</div>
					<div className='flex justify-center gap-4 mt-8'>
						{items.map((_, index) => (
							<button
								key={index}
								onClick={() => handleSlideChange(index)}
								className={`h-1 w-16 rounded-full transition-all duration-300 ${
									index === activeIndex ? "bg-white" : "bg-white/30"
								}`}
							/>
						))}
					</div>
				</div>
				<div className='w-full md:w-1/2'>
					<div className='bg-[#E2D3FF] rounded-[2rem] p-8'>
						<h2 className={`text-4xl font-bold text-[#2D1B69] mb-4 font-montserrat transition-opacity duration-300 ${
							isTransitioning ? "opacity-0" : "opacity-100"
						}`}>
							{items[activeIndex].title}
						</h2>
						<p className={`text-[#2D1B69]/80 transition-opacity duration-300 ${
							isTransitioning ? "opacity-0" : "opacity-100"
						}`}>
							{items[activeIndex].description}
						</p>
					</div>
				</div>
			</div>
			<div className='absolute top-4 left-4'>
				<span className='text-white/20 text-6xl'>✦</span>
			</div>
			<div className='absolute bottom-4 right-4'>
				<span className='text-white/20 text-6xl'>✦</span>
			</div>
		</section>
	);
};

export default NFTCarousel;
