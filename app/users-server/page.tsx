type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
};

export default async function UsersServer(){
    await new Promise((resolve) => setTimeout(resolve,2000));
    const res = await fetch ("https://jsonplaceholder.typicode.com/users");
    const users =await res.json();
    
    
  return (
    <div>
      <h1>Users List</h1>
      <ul className="space-y-4 p-4">
        {users.map((user:User) => (
          <li 
          key={user.id}
          className ="bg-white shadow-md rounded-lg text-gray-700">
            {user.name} ({user.email}) 
            </li>
        ))}
      </ul>
    </div>
  );
}
;