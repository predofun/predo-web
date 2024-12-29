"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { showToast } from "@/lib/utils";

interface BetPollProps {
	userPreviousVote: string;
	teams: Record<string, string>;
	options: string[];
	onVote?: (teamIndex: number) => Promise<void>;
	disabled?: boolean;
}

export const BetPoll = ({
	userPreviousVote,
	teams,
	options,
	onVote,
	disabled,
}: BetPollProps) => {
	const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
	const [isHovering, setIsHovering] = useState<number | null>(null);
	const [loading, setLoading] = useState(false);

	// Calculate total votes
	const totalVotes = Object.keys(teams).length;

	// Calculate votes for each option
	const optionVotes = options.map((option) => {
		const votesForOption = Object.values(teams).filter(
			(vote) => vote === option
		).length;
		const percentage =
			totalVotes === 0 ? 0 : Math.round((votesForOption / totalVotes) * 100);
		return {
			option,
			percentage,
		};
	});

	useEffect(() => {
		if (userPreviousVote) {
			const index = options.findIndex(
				(option) => option === userPreviousVote
			);
			if (index !== -1) {
				setSelectedTeam(index);
			}
		}
	}, [userPreviousVote]);

	const handleClick = async (index: number) => {
		if (loading || disabled) return;
		try {
			setLoading(true);
			setSelectedTeam(index);
			await onVote?.(index);
		} catch (error) {
			setSelectedTeam(null);
			showToast.error(
				error instanceof Error ? error.message : "Failed to submit vote"
			);
			console.error("Error voting:", error);
		} finally {
			setLoading(false);
		}
	};
	return (
		<div className='space-y-3'>
			{optionVotes.map((vote, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
					className='relative bg-[#222222] rounded-lg  cursor-pointer'
					onMouseEnter={() => setIsHovering(index)}
					onMouseLeave={() => setIsHovering(null)}
					onClick={() => handleClick(index)}>
					<div
						className={`h-16  rounded-xl overflow-hidden cursor-pointer transition-transform flex items-center justify-between px-4 duration-200 gap-2 relative  z-10${
							isHovering === index ? "transform scale-[1.02]" : ""
						}`}>
						{selectedTeam !== index && (
							<div className=' left-3  w-6 h-6 .bg-white border border-zinc-400 rounded-full flex items-center justify-center z-10'>
								{/* <svg
									className='w-4 h-4 text-black block'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M5 13l4 4L19 7'
									/>
								</svg> */}
							</div>
						)}
						{selectedTeam === index && (
							<div className=' left-3  w-6 h-6  bg-white rounded-full z-10 flex items-center justify-center'>
								<svg
									className='w-4 h-4 text-black block'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M5 13l4 4L19 7'
									/>
								</svg>
							</div>
						)}
						<div className='flex justify-between items-center mr-auto z-10 '>
							<span
								className={`font-medium transition-colors duration-200 ${
									selectedTeam === index
										? "text-white"
										: "text-gray-500"
								}`}>
								{vote.option}
							</span>
						</div>
						<span className='text-gray-500 z-10'>{vote.percentage}%</span>
						<motion.div
							className={`h-fulli inset-0 transition-colors duration-300 absolute -z-1 rounded-[.9rem] ${
								selectedTeam === index
									? "bg-[#4A4A4A]"
									: isHovering === index
									? "bg-[#3F3F3F]"
									: "bg-[#3B3B3B]"
							}`}
							initial={{ width: 0 }}
							animate={{ width: `${vote.percentage}%` }}
							transition={{ duration: 1, ease: "easeOut" }}
						/>
					</div>
				</motion.div>
			))}
		</div>
	);
};
