import users from "@/app/data/constants/users";
import UserRow from "./UserRow";
import { User } from "@/core/model/User";

export default function UserList() {
  return (
      <div className="flex flex-col gap-4">
        {users.map((users: User)=> {
          return <UserRow key={users.id!} User={users} />
        })}
      </div>
  )
}