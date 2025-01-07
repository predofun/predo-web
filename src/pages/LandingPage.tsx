import Footer from "@/components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
	return (
		<main className='min-h-screen w-[100%] md:w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<Hero />
			<Footer className='md:hidden relative bottom-[8.5vh]' />
		</main>
	);
};

export default LandingPage;
