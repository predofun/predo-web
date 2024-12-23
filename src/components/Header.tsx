const Header = () => {
	return (
		<header className='fixed w-[87%] top-[4vh] z-50 px-6 flex justify-between items-center  backdrop-blur-md shadow-md rounded-[3rem] border border-zinc-800 h-[9vh]'>
			<div className='flex items-center'>
				<img
					src='/logo.svg'
					alt='Logo'
					className='h-12 w-12'
				/>
			</div>
			<div className='flex items-center gap-8'>
				<nav className='hidden md:flex gap-8'>
					<a
						href='#'
						className='text-white hover:text-gray-300'>
						Github
					</a>
					<a
						href='#'
						className='text-white hover:text-gray-300'>
						Twitter
					</a>
				</nav>
				<button className='bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors'>
					Open App
				</button>
			</div>
		</header>
	);
};

export default Header;
