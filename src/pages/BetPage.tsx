import BetDetails from "@/components/BetDetails";
import Header from "../components/Header";

function BetPage() {
	const betDetails = {
		name: "Super Bowl",
		description: "Watch the big game with friends",
		date: "February 12",
		time: "5:00 PM",
		location: "Our House",
		betAmount: 10,
		img: "/images/pattern.jpg",
	};
	console.log(window);
	return (
		<main className='min-h-screen w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<BetDetails {...betDetails} />
		</main>
	);
}
export default BetPage;
