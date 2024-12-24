"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface BetPollProps {
	teams: Record<string, string>;
	options: string[];
	onVote?: (teamIndex: number) => void;
}

export const BetPoll = ({ teams, options, onVote }: BetPollProps) => {
	const [selectedTeam, setSelectedTeam] = useState<number | null>(null);
	const [isHovering, setIsHovering] = useState<number | null>(null);

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

	const handleClick = (index: number) => {
		setSelectedTeam(index);
		onVote?.(index);
	};
	return (
		<div className='space-y-3'>
			{optionVotes.map((vote, index) => (
				<motion.div
					key={index}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: index * 0.1 }}
					className='relative bg-[#222222] rounded-lg p-4 cursor-pointer'
					onMouseEnter={() => setIsHovering(index)}
					onMouseLeave={() => setIsHovering(null)}
					onClick={() => handleClick(index)}>
					<div className='flex justify-between items-center mb-1'>
						<span
							className={`font-medium transition-colors duration-200 ${
								selectedTeam === index ? "text-white" : "text-gray-300"
							}`}>
							{vote.option}
						</span>
						<span className='text-gray-400'>{vote.percentage}%</span>
					</div>
					<div
						className={`h-12 bg-[#2A2A2A] rounded-xl overflow-hidden cursor-pointer transition-transform  duration-200 relative ${
							isHovering === index ? "transform scale-[1.02]" : ""
						}`}>
						<motion.div
							className={`h-full transition-colors duration-300 ${
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
						{selectedTeam === index && (
							<div className='absolute right-2 top-1/2 translate-y-[-50%] w-6 h-6 bg-white rounded-full flex items-center justify-center'>
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
					</div>
				</motion.div>
			))}
		</div>
	);
};
