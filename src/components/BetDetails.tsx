import { showToast } from "@/lib/utils";
import { BetPoll } from "./BetPoll";
import { BetDetailsProps } from "@/pages/BetPage";
import { useEffect, useState } from "react";
import { CreditCard, ScanLine } from "lucide-react";
import { useBetDetails } from "@/hooks/useBetDetails";

const BetDetails = (props: BetDetailsProps) => {
	const { setBetDetails } = useBetDetails();
	const [timeLeft, setTimeLeft] = useState("");
	const [telegramUser] = useState(() => {
		return window.Telegram.WebApp.initDataUnsafe;
	});

	const [isVotedEnded, setIsVotedEnded] = useState(false);

	useEffect(() => {
		const calculateTimeLeft = () => {
			const difference =
				new Date(props.endTime).getTime() - new Date().getTime();

			if (difference <= 0) {
				setIsVotedEnded(true);
				return "Ended";
			}

			const days = Math.floor(difference / (1000 * 60 * 60 * 24));
			const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
			const minutes = Math.floor((difference / 1000 / 60) % 60);
			const seconds = Math.floor((difference / 1000) % 60);

			return `Ends in: ${days}d ${hours}h ${minutes}m ${seconds}s`;
		};

		const timer = setInterval(() => {
			setTimeLeft(calculateTimeLeft());
		}, 1000);

		setTimeLeft(calculateTimeLeft());

		return () => clearInterval(timer);
	}, [props.endTime]);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(location.href);
			showToast.success("Link copied to clipboard!");
		} catch (error) {
			console.error("Failed to copy:", error);
		}
	};

	const handleVote = async (teamIndex: number) => {
		showToast.loading("Submitting your vote...");
		console.log({
			betId: props.betId,
			username: telegramUser?.user?.username,
			votedOption: props.options[teamIndex],
		});
		setTimeout(() => {
			showToast.loading("Processing your vote...");
		}, 5000);
		const response = await fetch(
			`${import.meta.env.VITE_API_URL}/bet/predict`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					betId: props.betId,
					username: telegramUser?.user?.username,
					votedOption: props.options[teamIndex],
				}),
			}
		);

		// bet: Object

		// __v: 0

		// _id: "676fe8a03e59a839bd328c75"

		// betId: "pre-dqzk1"

		// endTime: "2024-12-31T22:59:59.000Z"

		// groupId: "-4703205367"

		// image: "https://res.cloudinary.com/dbuaprzc0/image/upload/v1735006898/predo/aom8sxegzlihtr6obvuk.gif"

		// minAmount: 1

		// options: ["Marcel the Monkey", "Curious George", "Abu"] (3)

		// participants: ["676a714f2157ec329f94cb39", "676af5ec40781457c88b3737"] (2)

		// resolved: false

		// title: "Who is the most famous monkey in the street?"

		// votes: {676a714f2157ec329f94cb39: "Marcel the Monkey", 676af5ec40781457c88b3737: "Marcel the Monkey"}

		if (!response.ok) {
			throw new Error("Failed to submit vote");
		}

		const { data } = await response.json();

		showToast.success("Vote submitted successfully!");
		setBetDetails(data.bet);

		console.log("Vote response:", data.bet);
	};

	return (
		<div className='min-h-screen  text-white p-2 md:p-8 mt-5'>
			<div className='mx-auto max-w-[75rem] pt-[12vh] flex flex-col md:flex-row gap-12'>
				{/* Left side - Image */}
				<div className='w-full md:w-1/2'>
					<div className='h-[20rem] md:h-auto md:aspect-square rounded-2xl overflow-hidden bg-[#1c1c1c] border border-zinc-600 shadow-md'>
						<img
							src={props.image}
							className='w-full h-full object-cover'
							alt={props.title}
						/>
					</div>
				</div>

				{/* Right side - Details */}
				<div className='w-full md:w-1/2 '>
					<div
						className={`flex items-center gap-2  mb-3 ${
							isVotedEnded ? "text-red-500" : "text-yellow-700"
						} `}>
						<svg
							className='w-5 h-5'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
							/>
						</svg>
						<span>{timeLeft}</span>
					</div>

					<h1 className='text-3xl text-gray-300 md:text-4xl font-bold mb-4 font-montserrat letter-title leading-[2.5rem] md:leading-[2.8rem]'>
						{props.title}
					</h1>

					<div className='flex items-center gap-3 mb-6'>
						<div className='flex items-center gap-2'>
							<span className='w-3 h-3 bg-green-400 rounded-full pulse'></span>
							<span className='text-gray-400'>
								Current Participants:
							</span>
							<span className='font-montserrat'>
								{props.participants.length || "0"}
							</span>
						</div>

						<button
							onClick={handleCopy}
							className='ml-auto flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors '>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z'
								/>
							</svg>
							Share
						</button>
					</div>
					<h1 className='3xl'></h1>
					<div className='bg-[#1c1c1c] rounded-2xl p-6 mb-8'>
						<div className='flex justify-between items-center mb-4'>
							<div>
								<div className='text-gray-400 text-sm flex items-center gap-1 mb-2'>
									{" "}
									<CreditCard className='w-5 h-5' /> Bet Amount
								</div>
								<div className='text-2xl font-bold font-montserrat text-gray-300'>
									{props.minAmount} USDC
								</div>
							</div>
							<div>
								<div className='text-gray-400 text-sm flex items-center gap-1 mb-2'>
									{" "}
									<ScanLine className='w-5 h-5' /> Total Pool
								</div>
								<div className='text-2xl font-bold font-montserrat text-gray-300'>
									{Number(props.minAmount) * props.participants.length}
									USDC
								</div>
							</div>
						</div>
						<BetPoll
							userPreviousVote={props.votes[props.userID] || ""}
							teams={props.votes}
							options={props.options}
							onVote={handleVote}
							disabled={
								isVotedEnded || Boolean(props.votes[props.userID])
							}
						/>
					</div>
					{/* <div className='bg-[#1c1c1c] rounded-2xl p-6'>
						<h2 className='text-xl font-bold mb-4'>Details</h2>
						<p className='text-gray-400 mb-6'>{props.description}</p>

						<div className='space-y-4'>
							<div className='flex items-center gap-3 text-gray-400'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
									/>
								</svg>
								<span>{props.date}</span>
							</div>

							<div className='flex items-center gap-3 text-gray-400'>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
								<span>{new (props.endTime)}</span>
							</div>

						
						</div>
					</div> */}
				</div>
			</div>
			{/* <img
				src='https://superboard.xyz/_next/static/media/yellowstar.5687b540.svg'
				alt=''
				className='fixed bottom-0 w-[10rem] -translate-x-1/2 left-0 z-0'
			/> */}
		</div>
	);
};

export default BetDetails;
