import Navbar from "@/components/Navbar";
import Footer from "../components/Footer";
import Github from "@/components/Github";

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
