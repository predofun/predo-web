const Hero = () => {
	return (
		<section className='h-screen relative z-10 flex-col justify-center text-center px-4 w-full'>
			<div className='h-[72%] md:h-[79%] top-[15vh] md:top-[16vh] border-zinc-700 border rounded-[2rem] relative w-full flex flex-col justify-center items-center pb-14 overflow-hidden shadow-2xl'>
				<h1 className=' text-[2.2rem]  md:text-6xl satoshi font-black text-[#E2D3FF] mb-6 leading-[3rem]'>
					Engage. Predict.
					<br className='block md:hidden ' /> Win
				</h1>
				<p className=' hidden md:block text-xl md:text-xl text-white opacity-85 mb-6 font-montserrat satoshi'>
					Turn group banter into friendly wagers
				</p>
				<a
					href='https://t.co/FtP1JAWtEC'
					className='bg-[#E2D3FF] text-black px-8 py-3 rounded-full  font-medium hover:bg-[#d1bbff] transition-colors text-sm relative block'>
					Show Me How
					<img
						src='https://superboard.xyz/_next/static/media/ehanger.ec901674.svg'
						alt='ehanger'
						className='absolute top-[81%]  left-1/2 w-[3rem] tilt-animation'
					/>
				</a>
				<img
					src='https://superboard.xyz/_next/static/media/waves.5f429969.svg'
					alt=''
					className='absolute bottom-0 left-0 h-[9rem] md:h-auto md:w-full floating-animation-slow floating-delay-2'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/cloudcat.0c2f9bc5.svg'
					alt=''
					className='absolute top-4 left-5 w-[5rem] md:w-[9rem] floating-animation-medium floating-delay-1'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/surfer.3d260d36.svg'
					alt=''
					className='absolute left-[25%] bottom-[7%] w-[7rem] md:w-[13rem] floating-animation-fast floating-delay-3'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/man.d86c7b8d.svg'
					alt=''
					className='absolute left-[50%] top-[5%] w-[3rem] md:w-[8rem] floating-animation-medium floating-delay-4'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/sushicloud.f7103fa0.svg'
					alt='sushi cloud'
					className='absolute -right-3 md:right-[4rem] bottom-[30%] md:bottom-[7rem] w-[4rem] md:w-[7rem] floating-animation-medium floating-delay-4'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/cloudcat2.3ff8e0af.svg'
					alt='cat hands up'
					className='absolute left-[0rem] md:left-[4rem] top-[40%] -translate-y-1/2 w-[6rem] md:w-[9rem] floating-animation-slow floating-delay-1'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/abstergocoin.e859169f.svg'
					alt='abstergocoin'
					className='absolute right-[4rem] top-[4rem] w-[4rem] md:w-[6rem] floating-animation-fast floating-delay-2'
				/>
				<img
					src='https://superboard.xyz/_next/static/media/landing_rainbow.f61781fa.svg'
					alt='laning_raingbow'
					className='absolute right-0 top-0
					 md:-top-[10%] w-[130%] md:w-[80%] -z-10'
				/>
			</div>
		</section>
	);
};

export default Hero;
