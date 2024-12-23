type BetDetailsProps = {
	name: string;
	description: string;
	date: string;
	time: string;
	location: string;
	betAmount: number;
	img: string;
};

function BetDetails(props: BetDetailsProps) {
	return (
		<div className='h-[7xhs%] top-[16vh] border-zinc-800 border rounded-[2rem] relative w-full flex justify-center items-center pb-14 overflow-hidden shadow-md gap-[3rem]'>
			<div>
				<img
					src={props.img}
					className='w-[100vh]'
					alt=''
				/>
			</div>
			<div>
				<h1>{props.name}</h1>
				<p>{props.description}</p>
				<p>{props.date}</p>
				<p>{props.time}</p>
				<p>{props.location}</p>
				<p>{props.betAmount}</p>
				<button>Join</button>
			</div>
		</div>
	);
}
export default BetDetails;
