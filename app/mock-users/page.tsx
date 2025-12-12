import { revalidatePath } from     "next/cache";
import {auth,currentUser} from  "@clerk/nextjs/server";

type MockUser = {
  id: number;
  name: string;
 
};

export default async function MockUsers(){

    const authObj = await auth()
    const userObj = await currentUser()

    console.log(
        {
            authObj,
            userObj,
        }
    );
    
    const res = await fetch ("https://693273bde5a9e342d26f306c.mockapi.io/users");
    const users =await res.json();
    
async function addUser(formData:FormData){
    "use server"
    const name = formData.get("name")
    const res = await fetch("https://693273bde5a9e342d26f306c.mockapi.io/users",
        {
            method:"POST",
            headers:
            {
                "Content-Type": "application/json",
               
            },
            body:JSON.stringify({name}),
        }
    );
    const newUser = await res.json();
    revalidatePath("/mock-users")
    console.log(newUser);
}

  async function deleteUser(formData: FormData) {
    "use server";

    const id = formData.get("id");

    await fetch(
      `https://693273bde5a9e342d26f306c.mockapi.io/users/${id}`,
      {
        method: "DELETE",
      }
    );

    revalidatePath("/mock-users");
  }

  return (
   <div className="py-10 px-6 sm:px-10 lg:px-20">
   <form action={addUser} className="mb-6 flex flex-col sm:flex-row gap-4 sm:items-center">
    <input
      type="text"
      name="name"
      required
      placeholder="Enter user name"
      className="border border-gray-300 dark:border-gray-700 rounded-lg p-3 w-full sm:w-64 
                 focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600 focus:outline-none transition" />

    <button
      type="submit"
      className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700 transition font-medium  hover:scale-[1.03]">
      Add User
    </button>
  </form>
  <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
    Users List
  </h1>
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {users.map((user: MockUser) => (
    <li
  key={user.id}
  className="relative bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 
             shadow rounded-lg p-4 text-center font-medium 
             transition transform hover:shadow-lg hover:-translate-y-1
             hover:bg-blue-200 dark:hover:bg-blue-700"
>
   <form action={deleteUser}>
    <input type="hidden" name="id" value={user.id} />

    <button
      type="submit"
      className="absolute top-2 right-2 bg-gray-600 text-white px-2 py-1 
                 rounded-full hover:bg-blue-500 transition text-xs"
    >
      X
    </button>
  </form>

<div className="mt-4">{user.name}</div>
</li>
    ))}
  </ul>
</div>
  );
}
;