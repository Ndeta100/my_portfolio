const Portfolio=async()=>{

    //Fetching data from gethub
     const response=await fetch('https://api.github.com/users/Ndeta100/repos')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    console.log(data[0].id);
}

export default Portfolio