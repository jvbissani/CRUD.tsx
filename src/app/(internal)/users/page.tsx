'use client'
import Page from "@/app/components/template/Page";
import UserList from "@/app/components/user/UsersList";
import { IconPlus, IconUser } from "@tabler/icons-react";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import useUsers from "@/app/data/hooks/useUsers";

export default function PageFunction() {
  const {
    userList,
    selectedUser,
    Save,
    Delete,
    alterUser
  } = useUsers()

  return (
    <Page className="flex flex-col gap-10">
      <Title icon={IconUser} title='Users' subTitle='User Register' />
      
      {selectedUser ? (
        <UserForm 
          user={selectedUser || {}}
          onChange={alterUser}
          Save={Save}
          Cancel={() => alterUser(null)}
          Delete={Delete}
        />
      ) : (
          <>
          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-md" 
              onClick={() => alterUser({})}
              >
              <IconPlus />
              <span>New User</span>
            </button>
          </div>
          <UserList users={userList} onClick={user => alterUser(user)} />
          </>
      )}
    </Page>
  );
}
