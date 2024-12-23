import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { Fragment } from "react/jsx-runtime";
import BetPage from "./pages/BetPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
	{
		path: "/bet",
		element: <BetPage />,
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
