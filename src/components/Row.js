import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchURL);
			setMovies(request.data.results);
			return request;
		}
		fetchData();
	}, [fetchURL]);

	const slideLeft = () => {
		let slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		let slider = document.getElementById("slider" + rowID);
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	return (
		<div className=' p-5 '>
			<h2 className='text-2xl font-medium md:text-4xl md:mb-5 text-white'>
				{title}
			</h2>
			<div className='relative flex items-center group'>
				<MdChevronLeft
					onClick={() => slideLeft()}
					size={40}
					className='left-0 text-black group-hover:block hidden bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-30'
				/>

				<div
					id={"slider" + rowID}
					className='relative flex space-x-5 py-5 overflow-y-hidden overflow-x-scroll scroll-smooth scrollbar-hide sm:pl-4'>
					{movies?.map((item, id) => (
						<Movie key={id} item={item} />
					))}
				</div>

				<MdChevronRight
					onClick={() => slideRight()}
					size={40}
					className='right-0 text-black group-hover:block hidden bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-30'
				/>
			</div>
		</div>
	);
};

export default Row;
