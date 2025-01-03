import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";
import { Fragment } from "react/jsx-runtime";
import ErrorPage from "./pages/ErrorPage";
import { Toaster } from "react-hot-toast";
import RootPage from "./pages/RootPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootPage />,
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
				src='/images/tasks-bg.ff21925f.svg'
				className='fixed h-screen w-screen object-cover'
				alt='Vite logo'
			/>
			<Toaster position='bottom-right' />

			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
