import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
	return (
		<main className='min-h-screen w-[100%] md:w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<Hero />
		</main>
	);
};

export default LandingPage;
