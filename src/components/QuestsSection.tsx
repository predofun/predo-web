import QuestCard from "./QuestCard";

const QuestsSection = () => {
	const quests = [
		{
			image: "https://superboard.xyz/_next/static/media/quest3img.3283c230.svg",
			title: "Guardians of web3",
			nftCount: 1,
			xpPoints: 100,
		},
		{
			image: "https://superboard.xyz/_next/static/media/quest3img.3283c230.svg",
			title: "Journey to web3",
			nftCount: 1,
			xpPoints: 100,
		},
		{
			image: "https://superboard.xyz/_next/static/media/quest3img.3283c230.svg",
			title: "eartbeat of web3",
			nftCount: 1,
			xpPoints: 100,
		},
	];

	return (
		<section className='bg-[#E2D3FF]/10 rounded-[2rem] p-12 backdrop-blur-sm border border-zinc-800 my-[2rem]'>
			<div className='max-w-md'>
				<h2 className='text-4xl font-bold text-[#E2D3FF] mb-4 font-montserrat'>
					Go onchain with Quests
				</h2>
				<p className='text-zinc-400 mb-8'>
					The easiest way for users to discover new opportunities in Web3
				</p>
				<button className='bg-[#E2D3FF]/20 text-[#E2D3FF] px-8 py-3 rounded-full font-medium hover:bg-[#E2D3FF]/30 transition-colors mb-12'>
					OPEN APP
				</button>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
				{quests.map((quest, index) => (
					<QuestCard
						key={index}
						{...quest}
					/>
				))}
			</div>
		</section>
	);
};

export default QuestsSection;
