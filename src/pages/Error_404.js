import { Link } from "react-router-dom";

const Error_404 = () => {
	return (
		<main className='bg-[url("./assets/bg-404.jpg")] bg-cover bg-center bg-no-repeat w-full h-screen'>
			<header className='h-[68px] bg-black px-11 fixed flex w-full items-center'>
				<Link to='/'>
					<img
						src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
						alt='Image from freepnglogos.com'
						className='w-[93px] aspect-auto'
					/>
				</Link>
			</header>
			<div>{/* content */}</div>
		</main>
	);
};
export default Error_404;
