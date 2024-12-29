import BetDetails from "@/components/BetDetails";
import Header from "../components/Header";

type BetId = `pre-${string}`;

export interface BetDetailsProps {
	id: string;
	betId: BetId;
	title: string;
	options: string[];
	minAmount: number;
	groupId: string;
	username: string;
	img: string;
	userID: string;
	image: string;
	endTime: Date;
	participants: string[]; // Empty array
	votes: Record<string, string>;
	resolved: boolean;
	__v: number;
}

function BetPage({ betDetails }: { betDetails: BetDetailsProps }) {
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
			<BetDetails {...betDetails} />
		</main>
	);
}

export default BetPage;
