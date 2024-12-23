interface QuestCardProps {
	image: string;
	title: string;
	nftCount: number;
	xpPoints: number;
}

const QuestCard = ({ image, title, nftCount, xpPoints }: QuestCardProps) => {
	return (
		<div className="bg-zinc-900 rounded-3xl overflow-hidden">
			<img src={image} alt={title} className="w-full aspect-square object-cover" />
			<div className="p-4">
				<h3 className="text-white text-lg font-medium mb-3">{title}</h3>
				<div className="flex items-center gap-3">
					<div className="flex items-center gap-1">
						<span className="text-blue-400">💎</span>
						<span className="text-white text-sm">{nftCount} NFT</span>
					</div>
					<div className="flex items-center gap-1">
						<span className="text-yellow-400">⭐</span>
						<span className="text-white text-sm">{xpPoints} XP</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuestCard;
