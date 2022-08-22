import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { AiOutlineClose } from "react-icons/ai";

const SavedShows = () => {
	const [movies, setMovies] = useState([]);
	const { user } = UserAuth();

	const slideLeft = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft - 500;
	};

	const slideRight = () => {
		let slider = document.getElementById("slider");
		slider.scrollLeft = slider.scrollLeft + 500;
	};

	useEffect(() => {
		onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
			setMovies(doc.data()?.savedShows);
		});
	}, [user?.email]);

	const movieRef = doc(db, "users", `${user?.email}`);
	const deleteShow = async (passedID) => {
		try {
			const result = movies.filter((item) => item.id !== passedID);
			await updateDoc(movieRef, {
				savedShows: result,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
			<div className=' relative flex items-center group'>
				<MdChevronLeft
					size={40}
					className='bg-white rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-[40] hidden group-hover:block left-0'
					onClick={slideLeft}
				/>
				<div
					id={"slider"}
					className='ml-4 w-full h-full flex space-x-4 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
					{movies.map((item, id) => (
						<div
							key={id}
							className='relative flex-none group-1 w-[320px] h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'>
							<img
								className='w-[280px] sm:w-full h-full object-cover rounded-md hover:brightness-50'
								src={`https://image.tmdb.org/t/p/w500/${item?.img}`}
								alt={item?.title}
							/>
							<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
								<h2 className='z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-1-hover:block cursor-pointer px-3'>
									{item?.title || item.name || item.orignal_name}
								</h2>
								<p
									onClick={() => deleteShow(item.id)}
									className='absolute text-gray-300 top-4 right-4'>
									<AiOutlineClose />
								</p>
							</div>
						</div>
					))}
				</div>
				<MdChevronRight
					size={40}
					className='bg-white rounded-full absolute opacity-70 hover:opacity-100 cursor-pointer z-[50] hidden group-hover:block right-0'
					onClick={slideRight}
				/>
			</div>
		</>
	);
};

export default SavedShows;
