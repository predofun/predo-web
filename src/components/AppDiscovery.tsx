const AppDiscovery = () => {
	const apps = [
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		// Duplicate icons to create seamless loop
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",

		//
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
		"https://superboard.xyz/_next/static/media/2.9381aece.svg",
	];

	return (
		<section className=' bg-[#FFD4D4] flex rounded-[2rem] p-12 my-[2rem] relative overflow-hidden'>
			<div className='max-w-md mb-8'>
				<h2 className='text-4xl font-bold text-[#2D1B69] mb-4 font-montserrat'>
					Discover new apps daily
				</h2>
				<p className='text-[#2D1B69]/80 w-full'>
					Like AppStore but with Web3 ethos, discover new apps across
					blockchains and become early users of protocols
				</p>
				<button className='mt-8 bg-[#2D1B69]/10 text-[#2D1B69] px-8 py-3 rounded-full font-medium hover:bg-[#2D1B69]/20 transition-colors'>
					OPEN APP
				</button>
			</div>

			<div className='relative border border-red-700 w-full overflow-hidden'>
				<div className='grid grid-cols-4 gap-4 animate-scroll'>
					{apps.map((app, index) => (
						<div
							key={index}
							className='flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden bg-white/80 backdrop-blur-sm'>
							<img
								src={app}
								alt={`App ${index + 1}`}
								className='w-full h-full object-cover'
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default AppDiscovery;
