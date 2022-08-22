import React from "react";
import { FaLeaf } from "react-icons/fa";
import Main from "../components/Main";
import Row from "../components/Row";
import requests from "../Requests";

const Home = () => {
	return (
		<div>
			<Main />
			<Row
				rowID='1'
				title='NETFLIX ORIGINALS'
				fetchURL={requests.requestNetflix}
			/>
			<Row rowID='2' title='Trending' fetchURL={requests.requestTrending} />
			<Row rowID='3' title='Top Rated' fetchURL={requests.requestTopRated} />
			<Row rowID='4' title='Action Movies' fetchURL={requests.requestAction} />
			<Row rowID='5' title='Comedy Movies' fetchURL={requests.requestComedy} />
			<Row rowID='5' title='Horror Movies' fetchURL={requests.requestHorror} />
			<Row
				rowID='5'
				title='Romance Movies'
				fetchURL={requests.requestRomance}
			/>
			<Row
				rowID='5'
				title='Documentaries Movies'
				fetchURL={requests.requestDocumentaries}
			/>
		</div>
	);
};

export default Home;
