import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const Movie = ({ item }) => {
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
					title: item.title || item.name || item.orignal_name,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert("Please log in to save a movie!");
		}
	};

	return (
		<div className='relative flex-none group-1 w-[320px] h-48 hover:scale-110 duration-200 transition transform ease-out cursor-pointer hover:z-20'>
			<img
				src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
				alt={item?.name}
				className=' w-[280px] sm:w-full h-full object-cover rounded-md hover:brightness-50'
			/>
			<div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-100 opacity-0 text-white'>
				<h2 className='z-50 absolute bottom-5 text-center w-full text-white text-lg font-medium hidden group-1-hover:block cursor-pointer px-3'>
					{item?.title || item.name || item.orignal_name}
				</h2>
				<p onClick={saveShow}>
					{like ? (
						<FaHeart className='absolute top-4 left-4 text-gray-300 cursor-pointer' />
					) : (
						<FaRegHeart className='absolute top-4 left-4 text-gray-300 cursor-pointer' />
					)}
				</p>
			</div>
		</div>
	);
};

export default Movie;
