import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Fragment } from "react/jsx-runtime";
import BetPage from "./pages/BetPage";
import { showToast } from "./lib/utils";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/bets/:id",
		element: <BetPage />,
		loader: async ({ params }) => {
			showToast.loading("Loading bet data...");
			console.log(params);
			// @ts-expect-error this is fine
			const param = window.Telegram.WebApp.initDataUnsafe?.start_param;
			console.log(param);
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/bet/${param}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch bet data");
			}
			console.log(response);
			const data = await response.json();
			console.log(data);
			showToast.success("Bet data loaded successfully!");
			return {
				...data.data,
				img: "/gifs/spongebob.webp",
				username: "Simpson",
			};
		},
		errorElement: <ErrorPage />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);

function App() {
	return (
		<Fragment>
			<img
				src='https://superboard.xyz/_next/static/media/tasks-bg.ff21925f.svg'
				className='fixed h-screen w-screen object-cover'
				alt='Vite logo'
			/>
			<Toaster position='bottom-right' />

			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
