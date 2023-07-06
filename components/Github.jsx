import React from 'react'

 const  GitHub=async()=> {
     const response=await fetch('https://api.github.com/users/Ndeta100')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    const { login, id, avatar_url, html_url, name } = data;
    console.log(id);
   return (
    <div className='flex flex-col items-center'>
    <div className=''>
    <img className='w-13 h-12 rounded-full ring-2 ring-gray-300 dark:ring-gray-500' src={avatar_url} alt="Profile Avatar" />
    </div>
    <h1>{name}</h1>
    <p>Login: {login}</p>
    <p>ID: {id}</p>
    <a href={html_url} target='_blank'>GitHub Profile</a>
  </div>
   )
}

   export default GitHub

