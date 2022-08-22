import React from "react";

const Footer = () => {
	return (
		<div className='h-[80px] bg-gradient-to-t from-gray-700 to-transparent gap-4 flex align-center justify-center w-full mx-auto text-white text-xs'>
			<p className='my-auto'>Created by Squashim</p>

			<p className='my-auto'>
				Powered by: <a href='https://www.themoviedb.org/'>The Movie Database</a>
			</p>
		</div>
	);
};

export default Footer;
