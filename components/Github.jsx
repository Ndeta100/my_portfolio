import React from 'react'

 const  GitHub=async()=> {
    //Fetching data from gethub
     const response=await fetch('https://api.github.com/users/Ndeta100')
     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    //Destructing fields from api fetch
    const { login, id,company, avatar_url, html_url, name, blog,bio,twitter_username,followers, following, created_at, updated_at, public_repos } = data;
    //Formating dates in Javascript
    let create_at_format = created_at.toString().slice(0, 10);
    let updated_at_format=updated_at.toString().slice(0,10)
    console.log(id);
    //Logging for testing
    console.log(create_at_format, "format");
    //Rendering content to the browser
   return (
    <div className='flex flex-col items-center mt-11'>
    <div className='space-x-4'>
    <img className='w-13 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500 mt-8' src={avatar_url} alt="Profile Avatar" />
    </div>
    <div className='  mt-6 border rounded-lg shadow'>
    <p className='mt-4 mx-4 my-4'>Hello!, my name is <span>{name}</span> I am a junior software developer at <span>{company}</span>, passionate about Software Development and Entrepreneurship. I enjoy working with server side code (Java, Golang, Node.js, Rust), and currently learning frontend (Next.js) at my new job, also a fan of SQL and NoSQL databse. Beside work I love playing football and learning new things </p>
    </div>
    <a href={html_url} target='_blank' className='mt-4'>GitHub Profile details </a>
    <div className='grid grid-cols-2 gap-2 mt-4 border rounded-lg shadow '>
    <p className='mx-6 my-4'>GitHub: {login}</p>
    <p className='my-4 mr-4'>GitHub Bio: {bio}</p>
    <p className='mx-6 my-4'>Twitter username: {twitter_username}</p>
    <p className='my-4 '>GitHub Followers: {followers}</p>
    <p className='mx-6 my-4'> GitHub Followings: {following}</p>
    <p className='my-4'>Public Repositories: <span className='animate-ping text-green-500 duration-500'> {public_repos}</span></p>
    <p className='mx-6 my-4'>Created At: {create_at_format}</p>
    <p className=' my-4'>Updated At: {updated_at_format}</p>
    </div>
  </div>
   )
}
   export default GitHub

