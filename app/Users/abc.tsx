import React from 'react'


interface user{
  id:number;
  name:string;
}

const UsersPage =async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})

  const users:user[] = await res.json();
  console.log(res);
  return (
    <div>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UsersPage;