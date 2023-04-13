import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { user, signUp } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await signUp(email, password);
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className='w-full h-screen absolute sm:bg-cover sm:bg-[url("https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/d2f5b7b4-b60f-44ac-af0c-e674b4cc5917/PL-pl-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg")] bg-none'>
				<div className='w-full ml-[3%] h-[45px] xs:h-[75px] md:h-[90px] flex items-center'>
					<img
						src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt='Image from freepnglogos.com'
						className='pt-2 xs:pt-0 w-[74px] xs:w-[167px] aspect-auto'
					/>
				</div>
				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-4xl font-bold'>Sign Up</h1>
							<form
								onSubmit={handleSubmit}
								className='w-full flex flex-col py-4 '>
								<input
									onChange={(e) => setEmail(e.target.value)}
									className='p-3 my-2 bg-gray-700 rounded'
									type='email'
									placeholder='Email'
									autoComplete='email'
								/>
								<input
									onChange={(e) => setPassword(e.target.value)}
									className='p-3 my-2 bg-gray-700 rounded'
									type='password'
									placeholder='Password'
									autoComplete='current-password'
								/>
								<button className='bg-red-600 py-3 my-6 rounded font-bold'>
									Sign Up
								</button>
								<div className='flex justify-between items-center text-sm text-gray-600'>
									<p>
										<input className='mr-2' type='checkbox' />
										Remember me
									</p>
									<p>Need help?</p>
								</div>
								<p className='py-8'>
									<span className='text-gray-600'>
										Already subscribed to Netflix?
									</span>
									<Link to='/login'>Sign In</Link>
								</p>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
