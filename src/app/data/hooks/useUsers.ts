import Backend from "@/backend";
import { User } from "@/core/model/User";
import { useEffect, useState } from "react";

export default function useUsers() {

    const [userList, setUserList] = useState<User[]>([]);
    const [selectedUser, setSelectedUser] = useState<Partial<User> | null>(null);
  
    useEffect(() => {
      Backend.users.getAll().then(setUserList);
    }, []);
  
    async function Save() {
      if (!selectedUser) return;
      await Backend.users.saveUser(selectedUser);
      const users = await Backend.users.getAll();
      setUserList(users);
      setSelectedUser(null);
    }
  
    async function Delete() {
      if (!selectedUser || !selectedUser.id) return;
      await Backend.users.delete(selectedUser.id);
      const users = await Backend.users.getAll();
      setUserList(users);
      setSelectedUser(null);
    }

    return { 
      userList,
      selectedUser,
      Save,
      Delete,
      Cancel: () => setSelectedUser(null),
      alterUser: (selectedUser: Partial<User> | null) => setSelectedUser(selectedUser)
     }

}