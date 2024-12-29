import LandingPage from "./LandingPage";
import BetPage from "./BetPage";
import { useEffect } from "react";
import { showToast } from "@/lib/utils";
import { BetDetailsProps } from "./BetPage";
import { useBetDetails } from "@/hooks/useBetDetails";

function RootPage() {
	const telegramObject = window.Telegram.WebApp.initDataUnsafe;
	console.log(telegramObject);
	const { betDetails, setBetDetails } = useBetDetails();

	useEffect(() => {
		const getBetDetails = async () => {
			if (!telegramObject.user?.username) {
				throw new Error("User not found");
			}
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/bet/${telegramObject?.start_param}`
			);
			const userResponse = await fetch(
				`${import.meta.env.VITE_API_URL}/bet/user?username=${
					telegramObject?.user?.username
				}`
			);
			if (!response.ok || !userResponse.ok) {
				throw new Error("Failed to fetch bet data");
			}

			let userID = "";
			if (userResponse.ok) {
				const userData = await userResponse.json();
				userID = userData.data._id;
			}

			const { data } = (await response.json()) as { data: BetDetailsProps };
			console.log(data);
			showToast.success("Bet data loaded successfully!");

			setBetDetails({
				...data,
				userID: userID,
				img: "/gifs/spongebob.webp",
				username: telegramObject.user?.username,
			});
		};
		if (telegramObject?.start_param) {
			getBetDetails();
		}
	}, [telegramObject]);

	if (!telegramObject?.start_param) return <LandingPage />;
	if (telegramObject.start_param && betDetails)
		return <BetPage betDetails={betDetails} />;
}
export default RootPage;
