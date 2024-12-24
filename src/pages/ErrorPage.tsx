import { useRouteError } from "react-router";
import Header from "@/components/Header";
import { Link } from "react-router";

export default function ErrorPage() {
	const error = useRouteError() as { statusText?: string; message?: string };

	return (
		<main className='min-h-screen w-[95%] md:w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<div className='flex flex-col items-center justify-center h-[50vh]  mt-[4rem]'>
				<h1 className='text-3xl font-bold mb-4 font-montserrat text-[#E2D3FF]'>
					Oops!
				</h1>
				<p className='text-lg font-montserrat text-white mb-2'>
					{error?.statusText || error?.message || "Something went wrong"}
				</p>
				<Link
					to='/'
					className='mt-4 px-6 py-2 bg-[#E2D3FF] text-black rounded-lg hover:bg-opacity-90 transition-all duration-200'>
					Go Home
				</Link>
			</div>
		</main>
	);
}
