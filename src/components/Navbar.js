import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Navbar = () => {
	const [show, handleShow] = useState(false);
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else handleShow(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	});

	const handleLogout = async () => {
		try {
			await logOut();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			className={
				show
					? "flex items-center justify-between p-4 z-[100] fixed w-full bg-black transition-all duration-300 ease-in"
					: "flex items-center justify-between p-4 z-[100] fixed w-full transition-all duration-300 ease-out"
			}>
			<Link to='/'>
				<img
					src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
					alt='Image from freepnglogos.com'
					className='w-[100px] sm:w-[150px]  object-contain'
				/>
			</Link>
			{user?.email ? (
				<div>
					<Link to='/account'>
						<button className='text-white pr-4 text-sm sm:text-base cursor-pointer'>
							Account
						</button>
					</Link>
					<button
						onClick={handleLogout}
						className='bg-red-600 sm:px-6 text-sm sm:text-base px-4 py-2 rounded cursor-pointer text-white'>
						Logout
					</button>
				</div>
			) : (
				<div>
					<Link to='/login'>
						<button className='text-white text-sm sm:text-base sm:text-normal pr-4 cursor-pointer'>
							Sign In
						</button>
					</Link>
					<Link to='/signup'>
						<button className='bg-red-600 text-sm sm:text-base sm:px-6 px-4 py-2 rounded cursor-pointer text-white'>
							Sign Up
						</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Navbar;
