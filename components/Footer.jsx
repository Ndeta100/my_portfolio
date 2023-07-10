

const Footer =()=>{
    return(
        <>
        <div>
            <p className="flex flex-col items-center bg-green-100
             text-1xl text-center
            
             fixed
             inset-x-0
             bottom-0
             p-4
             text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200  focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium ">
            © {new Date().getFullYear()} Ndeta's Portfolio 
            </p>
        </div>
        </>
    )
}

export default Footer