import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route
						path='/account'
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<Navbar />
								<Home />
							</ProtectedRoute>
						}
					/>
					<Route
						path='*'
						element={
							//Future 404 error component
							<div>
								<h2>404 - Page not found</h2>
							</div>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
