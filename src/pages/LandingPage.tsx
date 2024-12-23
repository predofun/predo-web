import Header from "../components/Header";
import Hero from "../components/Hero";

const LandingPage = () => {
	return (
		<main className='min-h-screen w-[87%] mx-auto relative overflow-hidden'>
			<Header />
			<Hero
				title='Predict. Engage. Win'
				buttonText='Show Me How'
				onButtonClick={() => console.log("Get Started clicked")}
			/>
		</main>
	);
};

export default LandingPage;
