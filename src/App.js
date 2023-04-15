import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Account from "./pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";
import Error_404 from "./pages/Error_404";

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
					<Route path='*' element={<Error_404 />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
