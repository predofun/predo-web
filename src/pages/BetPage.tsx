import { useLoaderData } from "react-router";
import BetDetails from "@/components/BetDetails";
import Header from "../components/Header";

type BetId = `PRE-${string}`;

export interface BetDetailsProps {
	id: string;
	betId: BetId;
	title: string;
	options: [string, string]; // Exactly 2 options
	minAmount: number;
	groupId: string;
	username: string;
	img: string;
	endTime: Date;
	participants: string[]; // Empty array
	votes: Record<string, string>;
	resolved: false;
	__v: number;
}

function BetPage() {
	const data = useLoaderData() as BetDetailsProps;

	// if (!data) {
	// 	return (
	// 		<main className='min-h-screen w-[95%] md:w-[87%] mx-auto relative overflow-hidden'>
	// 			<Header />
	// 			<div className='flex flex-col items-center justify-center h-[50vh]'>
	// 				<h1 className='text-3xl font-bold mb-4 font-montserrat'>404</h1>
	// 				<p className='text-lg font-montserrat'>Page not found</p>
	// 			</div>
	// 		</main>
	// 	);
	// }

	return (
		<main className='min-h-screen w-[95%] md:w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<BetDetails {...data} />
		</main>
	);
}

export default BetPage;
