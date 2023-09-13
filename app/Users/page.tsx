import React from 'react'


interface user{
  id:number;
  name:string;
  email:string;
}

const UsersPage =async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache:"no-store"})

  const users:user[] = await res.json();
  console.log(res);
  return (
    <div>
      <h1>Users</h1>
      <table className='table table-border'>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
          </tr>
        </thead>
        <tbody>

        {users.map(user => (
<tr key={user.id}>
  <th>{user.name}</th>
  <th>{user.email}</th>
</tr>
        ))}
        </tbody>
        
      </table>
    </div>
  );
}

export default UsersPage;