import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Github from "@/components/Github";
import Portfolio from "@/components/Portfolio";


export default function Home() {
	return (
		<>
		<div className="container px-10 md:px-20 lg:px-40 mx-auto">
			<Navbar  />
			<Github/>
			<Footer />
		</div>
		</>
	);
}


