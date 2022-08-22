import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item, isLargeRow }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	const { user } = UserAuth();

	const movieID = doc(db, "users", `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("Please log in to save a movie!");
		}
	};

	return (
		<div
			className={`${
				isLargeRow
					? "flex-none h-auto py-6"
					: "flex-none group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20"
			}`}>
			<img
				src={`https://image.tmdb.org/t/p/original/${
					isLargeRow ? item.poster_path : item.backdrop_path
				}`}
				alt={item?.name}
				className={
					isLargeRow
						? "h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg"
						: "absolute w-full h-full object-cover rounded-md hover:brightness-50 z-0"
				}
			/>
			<h2
				className={`${
					isLargeRow
						? "hidden"
						: "z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-hover:block cursor-pointer px-3"
				}`}>
				{item?.title || item.name || item.orignal_name}
			</h2>
		</div>

		// <div className='hover:z-20 group w-80 h-48 hover:scale-110 duration-200 transition transform ease-out inline-block cursor-pointer relative p-2'>
		// 	<img
		// 		className='h-48 md:w-48 md:h-72 object-contain cursor-pointer hover:scale-110 transition transform duration-150 ease-out rounded-lg'
		// 		src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
		// 		alt={item?.title}
		// 	/>
		// 	<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
		// 		<p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
		// 			{item?.title}
		// 		</p>
		// 		<p onClick={saveShow}>
		// 			{like ? (
		// 				<FaHeart className='absolute top-4 left-4 text-gray-300' />
		// 			) : (
		// 				<FaRegHeart className='absolute top-4 left-4 text-gray-300' />
		// 			)}
		// 		</p>
		// 	</div>
		// </div>
	);
};

export default Movie;
