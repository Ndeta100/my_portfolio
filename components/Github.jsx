import React from 'react'

 const  GitHub=async()=> {
    //Fetching data from gethub
     const response=await fetch('https://api.github.com/users/Ndeta100')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    const { login, id,company, avatar_url, html_url, name, blog,bio,twitter_username,followers, following, created_at, updated_at, public_repos } = data;
    //Formating dates in Javascript
    let create_at_format = created_at.toString().slice(0, 10);
    let updated_at_format=updated_at.toString().slice(0,10)
    console.log(id);
    //Logging for testing
    console.log(create_at_format, "format");
   return (
    <div className='flex flex-col items-center mt-11'>
    <div className='space-x-4'>
    <img className='w-13 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-8' src={avatar_url} alt="Profile Avatar" />
    </div>
    <div>
    <p className='mt-4'>Hello!, my name is <span>{name}</span> I am a junior software developer at <span>{company}</span>, passionate about Software Development and Entrepreneurship. I enjoy working with server side code (Java, Golang, Node.js, Rust), and currently learning frontend (Next.js) at my new job, also a fan of SQL and NoSQL databse. Beside work I love playing football and learning new things </p>
    </div>
    
    <a href={html_url} target='_blank' className='mt-4'>GitHub Profile details </a>
    <div className='grid grid-cols-2 gap-4 mt-4'>
    <p>GitHub: {login}</p>
    <p>GitHub Id : {id}</p>
    <p>blog: {blog}</p>
    <p>GitHub Bio: {bio}</p>
    <p>Twitter username: {twitter_username}</p>
    <p>Followers: {followers}</p>
    <p>Following: {following}</p>
    <p>Public repos: {public_repos}</p>
    <p>Created At: {create_at_format}</p>
    <p>Updated At: {updated_at_format}</p>
    </div>
  </div>
   )
}

   export default GitHub

