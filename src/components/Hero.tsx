interface HeroProps {
	title: string;
	buttonText: string;
	onButtonClick?: () => void;
}

const Hero = ({ title, buttonText, onButtonClick }: HeroProps) => {
	return (
		<section className='h-screen relative z-10 flex-col justify-center text-center px-4 w-full'>
			<div className='h-[79%] top-[16vh] border-zinc-800 border rounded-[2rem] relative w-full flex flex-col justify-center items-center pb-14 overflow-hidden shadow-md'>
				<h1 className='text-6xl satoshi md:text-7xl font-bold text-white mb-6 '>
					{title.split("\n").map((line, index) => (
						<>
							{index > 0 && <br />}
							{line}
						</>
					))}
				</h1>
				<p className='text-6xl md:text-2xl font-bold text-white opacity-85 mb-6 font-montserrat satoshi'>
					Turn group banter into friendly wagers
				</p>
				<button
					onClick={onButtonClick}
					className='bg-[#E2D3FF] text-black px-8 py-3 rounded-full  font-medium hover:bg-[#d1bbff] transition-colors text-sm relative block'>
					{buttonText}
					<img
						src='https://superboard.xyz/_next/static/media/ehanger.ec901674.svg'
						alt='ehanger'
						className='absolute top-[81%]  left-1/2 w-[3rem] tilt-animation'
					/>
				</button>
				<img
					src='https://superboard.xyz/_next/static/media/waves.5f429969.svg'
					alt=''
					className='absolute bottom-0 left-0 w-full floating-animation'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/cloudcat.0c2f9bc5.svg'
					alt=''
					className='absolute top-4 left-5 w-9rem] floating-animation'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/surfer.3d260d36.svg'
					alt=''
					className='absolute left-[25%] bottom-[7%] w-[13rem] floating-animation'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/sushicloud.f7103fa0.svg'
					alt='sushi cloud'
					className='absolute right-[4rem] bottom-[7rem] w-[7rem] floating-animation'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/cloudcat2.3ff8e0af.svg'
					alt='cat hands up'
					className='absolute left-[4rem] top-[40%] -translate-y-1/2 w-[9rem] floating-animation'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/abstergocoin.e859169f.svg'
					alt='abstergocoin'
					className='absolute right-[4rem] top-[4rem] w-[6rem] floating-animation'
				/>
				<img
					src='	https://superboard.xyz/_next/static/media/landing_rainbow.f61781fa.svg'
					alt='laning_raingbow'
					className='absolute right-0 -top-[10%] w-[80%] -z-10'
				/>
			</div>
		</section>
	);
};

export default Hero;
