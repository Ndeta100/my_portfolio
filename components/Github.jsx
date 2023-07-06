import React from 'react'

 const  GitHub=async()=> {
    //Fetching data from gethub
     const response=await fetch('https://api.github.com/users/Ndeta100')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    const { login, id,company, avatar_url, html_url, name, blog,bio,twitter_username,followers, following, created_at, updated_at, public_repos } = data;
    console.log(id);
   return (
    <div className='flex flex-col items-center'>
    <div className='space-x-4'>
    <img className='w-13 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={avatar_url} alt="Profile Avatar" />
    </div>
    <div>
    <p>Hi, my name is <span>{name}</span> I am a junior sofware developer at <span>{company}</span>, passionate about Software Development and Entrepreneurship. I enjoy working with server side code (Java, Golang, Node.js, Rust), and currently learning frontend (Next.js) at my new job, also a fan of SQL and NoSQL databse. Beside work I love playing football and learning new things </p>
    </div>
    
    <a href={html_url} target='_blank'>GitHub Profile details </a>
    <div>
    <p>GitHub: {login}</p>
    <p>GitHub Id : {id}</p>
    <p>blog: {blog}</p>
    <p>GitHub Bio: {bio}</p>
    <p>Twitter username: {twitter_username}</p>
    <p>Followers: {followers}</p>
    <p>Following: {following}</p>
    <p>Public repos: {public_repos}</p>
    <p>Created At: {created_at}</p>
    <p>Updated At: {updated_at}</p>
   

    </div>
  </div>
   )
}

   export default GitHub

