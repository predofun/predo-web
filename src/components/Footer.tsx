import { cn } from "@/lib/utils";

function Footer({ className }: { className: string }) {
	return (
		<footer
			className={cn(
				" flex items-center justify-center gap-8 z-40",
				className
			)}>
			<a
				target='_blank'
				href='https://t.me/PredoPortal'
				className='text-white hover:text-gray-300 text-sm'>
				Telegram
			</a>
			<a
				target='_blank'
				href='https://github.com/predofun'
				className='text-white hover:text-gray-300 text-sm'>
				Github
			</a>
			<a
				target='_blank'
				href='https://x.com/predofun'
				className='text-white hover:text-gray-300 text-sm'>
				Twitter
			</a>
		</footer>
	);
}
export default Footer;
