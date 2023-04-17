import { Link } from "react-router-dom";

const Error_404 = () => {
	return (
		<main className='overflow-hidden flex flex-col bg-[url("./assets/bg-404.jpg")] bg-cover bg-center bg-no-repeat w-full h-screen'>
			<header className='h-[68px] bg-black px-11 fixed flex w-full items-center'>
				<Link to='/'>
					<img
						src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt='Image from freepnglogos.com'
						className='w-[93px] aspect-auto'
					/>
				</Link>
			</header>
			<div className='mt-[68px] flex flex-1 max-h-[25%]'></div>
			<div className='mx-2 w-full flex flex-col text-center flex-grow-[2] flex-0 max-h-[25%] relative'>
				<h1 className='font-bold text-[6vw] xl:text-[4rem] text-white mb-[2vw] drop-shadow-md'>
					Nie ta strona?
				</h1>
				<div className='flex flex-1 flex-col mx-auto pb-[2vw] w-[50vw]'>
					<p className='text-[2rem] font-light text-white mt-0 drop-shadow-md mb-[1.5vw]'>
						Sorry, we can't find that page. You'll find loads to explore on the
						home page.
					</p>
					<button className='flex justify-center  mx-auto text-center bg-white text-black px-[2.4rem] rounded-md text-[1rem] py-[0.3rem] font-bold'>
						Netflix Home
					</button>
					<div className='mt-[1.5vw] flex flex-1 justify-center items-end text-center'>
						<span className='border-l-red-600 border-l-2 text-[1.8rem] px-[1vw] text-white drop-shadow-md'>
							Error Code <strong>NSES-404</strong>
						</span>
					</div>
				</div>
			</div>
			<div className='flex flex-1 max-h-[25%]'></div>
		</main>
	);
};
export default Error_404;
