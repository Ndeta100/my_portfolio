import Link from "next/link";

const Navbar=()=>{
    return (
       <nav className=" fixed top-0 right-0 m-3">
       {/* I will put my logo here at some point */}
        <div className="space-x-4 mt-3">
        <a href="https://github.com/ndeta100"><span className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">GitHub</span></a>
        <a href="https://twitter.com/ndeta__"><span className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Twitter</span></a>
        </div>
        
       </nav>
    )
}

export default Navbar