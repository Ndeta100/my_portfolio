import Link from "next/link";

const Navbar=()=>{
    return (
       <nav className=" fixed top-0 right-0 m-3">
       {/* I will put my logo here at some point */}
        <div className="space-x-4">
        <a href="https://github.com/ndeta100">GitHub</a>
        <a href="https://twitter.com/ndeta__">Twitter</a>
        </div>
        
       </nav>
    )
}

export default Navbar