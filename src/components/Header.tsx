import { Link } from "react-router";

const Header = () => {
	return (
		<header className='fixed w-[95%] left-1/2 -translate-x-1/2 md:w-[87%] top-[4vh] z-50 px-3 md:px-6 flex justify-between items-center  backdrop-blur-lg shadow-md rounded-[2rem] md:rounded-[3rem] border border-zinc-800 h-[7vh] md:h-[9vh] bg-[#28282cbc]'>
			<Link to='/'>
				<div className='flex items-center'>
					<img
						src='/logo.svg'
						alt='Logo'
						className='h-12 w-12'
					/>
				</div>
			</Link>
			<div className='flex items-center gap-8'>
				<nav className='hidden md:flex gap-8'>
					<a
						target='_blank'
						href='https://github.com/predofun'
						className='text-white hover:text-gray-300'>
						Github
					</a>
					<a
						target='_blank'
						href='https://x.com/predofun'
						className='text-white hover:text-gray-300'>
						Twitter
					</a>
				</nav>
				<a
					target='_blank'
					href='https://t.co/FtP1JAWtEC'
					className='bg-white text-black px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm '>
					Open App
				</a>
			</div>
		</header>
	);
};

export default Header;
