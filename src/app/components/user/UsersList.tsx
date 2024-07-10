import { User } from "@/core/model/User";
import UserRow from "./UserRow";

export interface UserListProps {
  users: User[];
  onClick?: (user: User) => void;
}

export default function UserList(props: UserListProps) {
  return (
    <div className="flex flex-col gap-4">
      {props.users.map((user: User) => (
        <UserRow key={user.id!} User={user} onClick={props.onClick} />
      ))}
    </div>
  );
}
