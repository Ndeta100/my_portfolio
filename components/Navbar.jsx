import Link from "next/link";

const Navbar=()=>{
    return (
        <div>
            <div>
                <Link href={"/"}>
                    Ndeta's Portfolio
                </Link>
            </div>
            <a href="">Resume</a>
        </div>
    )
}

export default Navbar