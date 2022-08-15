import React from "react";

const Signup = () => {
	return (
		<>
			<div className='w-full h-screen'>
				<img
					className='hidden sm:block absolute w-full h-full object-cover'
					src='https://assets.nflxext.com/ffe/siteui/vlv3/a1543997-c1fd-4946-92d3-b0a3648b92c7/d2f5b7b4-b60f-44ac-af0c-e674b4cc5917/PL-pl-20220808-popsignuptwoweeks-perspective_alpha_website_small.jpg'
					alt='/'
				/>
				<div className=' bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
				<div className='fixed w-full px-4 py-24 z-50'>
					<div className='max-w-[450px] h-[600px] mx-auto bg-black/70 text-white'>
						<div className='max-w-[320px] mx-auto py-16'>
							<h1 className='text-4xl font-bold'>Sign Up</h1>
							<form className='w-full flex flex-col py-4 '>
								<input
									className='p-3 my-2 bg-gray-700 rounded'
									type='email'
									placeholder='Email'
									autoComplete='email'
								/>
								<input
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
							</form>
						</div>
					</div>
				</div>
			</div>
			;
		</>
	);
};

export default Signup;
