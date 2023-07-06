import React from 'react'

 const  GitHub=async()=> {
     const response=await fetch('https://api.github.com/users/Ndeta100')

     if(!response.ok) throw new Error('Failed to fetch new data')
    const data=await response.json()
    const { login, id, avatar_url, html_url, name } = data;
    console.log(id);
   return (
    <div>
    <h1>{name}</h1>
    <p>Login: {login}</p>
    <p>ID: {id}</p>
    <img src={avatar_url} alt="Profile Avatar" />
    <a href={html_url}>GitHub Profile</a>
  </div>
   )
}

   export default GitHub

