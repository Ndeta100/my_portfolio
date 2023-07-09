const Portfolio=async()=>{

    //Fetching data from gethub
     const response=await fetch('https://api.github.com/users/Ndeta100/repos')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    console.log(data[0].id);
    return(
        <div>
      <h1 className='flex flex-col items-center mt-11'>My Portfolio</h1>
      {data.map((item) => (
        <div className="grid grid-cols-2 gap-2 mt-4 border rounded-lg shadow" key={item.id}>
          <h2 className='my-4 mr-4'>Project name: {item.name}</h2>
          <p className='my-4 mr-4'>Project description: {item.description}</p>
          <p className='my-4 mr-4'>Programming Langusge used: {item.language}</p>
          <p className='my-4 mr-4'>Creation date: {item.created_at.toString().slice(0,10)}</p>
          <p className='my-4 mr-4'>Last Update: {item.updated_at.toString().slice(0,10)}</p>
        </div>
      ))}
    </div>
    )
}

export default Portfolio