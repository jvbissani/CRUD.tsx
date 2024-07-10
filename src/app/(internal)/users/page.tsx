'use client'
import Page from "@/app/components/template/Page";
import UserList from "@/app/components/user/UsersList";
import { IconPlus, IconUser } from "@tabler/icons-react";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import usersData from "@/app/data/constants/users";
import { useState } from "react";
import { User } from "@/core/model/User";
import Backend from "@/backend";

export default function PageFunction() {
  const [userList, setUserList] = useState<User[]>(usersData);
  const [selectedUser, setSelectedUser] = useState<Partial<User> | null>(null);

  function Save() {
    if (!selectedUser) return;
    Backend.users.saveUser(selectedUser);
    setUserList(prevList =>
      prevList.map(user => (user.id === selectedUser.id ? selectedUser as User : user))
    );
    setSelectedUser(null);
  }

  return (
    <Page className="flex flex-col gap-10">
      <Title icon={IconUser} title='Users' subTitle='User Register' />
      <div className="flex justify-end">
        <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" 
        onClick={() => setSelectedUser({})}
        >
          <IconPlus />
          <span>New User</span>
        </button>
      </div>
      {selectedUser ? (
        <UserForm 
          user={selectedUser || {}}
          onChange={setSelectedUser}
          Save={Save}
          Cancel={() => setSelectedUser(null)}
        />
      ) : (
        <UserList users={userList} onClick={user => setSelectedUser(user)} />
      )}
    </Page>
  );
}