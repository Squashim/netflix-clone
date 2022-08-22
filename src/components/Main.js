import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";

const Main = () => {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.requestTopRated);
			setMovie(
				request.data.results[
					Math.floor(Math.random() * request.data.results.length - 1)
				]
			);
			return request;
		}
		fetchData();
	}, []);

	const truncateString = (str, num) => {
		if (str?.length > num) {
			return str.slice(0, num) + "...";
		} else return str;
	};

	return (
		<div className='w-full h-[550px] text-white'>
			<div className='w-full h-full'>
				<div className='absolute w-full h-[550px] bg-gradient-to-b from-transparent to-black'></div>
				<img
					className='w-full h-full object-cover'
					src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
					alt={movie?.title}
				/>
				<div className='absolute w-full top-[20%] p-4 md:p-8'>
					<h1 className='text-3xl md:text-5xl font-bold pb-5'>
						{movie?.title || movie?.name || movie?.original_name}
					</h1>
					<div className='my-6'>
						<button className='py-2 cursor-pointer text-white outline-none border-none font-bold rounded-md px-[2rem] sm:mr-4 mr-1 bg-gray-700 transition-all duration-500 hover:bg-gray-300 hover:text-black'>
							Play
						</button>
						<button className='py-2 cursor-pointer text-white outline-none border-none font-bold rounded-md px-[2rem] sm:mr-4 bg-gray-700 transition-all duration-500 hover:bg-gray-300 hover:text-black'>
							Watch Later
						</button>
					</div>
					<p className='text-gray-400 text-sm'>
						Released: {movie?.release_date}
					</p>
					<p className='max-w-[90%] sm:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200'>
						{truncateString(movie?.overview, 150)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default Main;
