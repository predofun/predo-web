import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Fragment } from "react/jsx-runtime";
import BetPage from "./pages/BetPage";
import { showToast } from "./lib/utils";
import ErrorPage from "./pages/ErrorPage";

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
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/bet/${params.id}`
			);
			if (!response.ok) {
				throw new Error("Failed to fetch bet data");
			}
			const data = await response.json();
			console.log(data);
			return {
				...data,
				img: "/gifs/simpsons.webp",
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

			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
