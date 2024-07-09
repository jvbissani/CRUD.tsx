'use client'
import Page from "@/app/components/template/Page";
import UserList from "@/app/components/user/UsersList";
import { IconUser } from "@tabler/icons-react";
import Title from "@/app/components/template/Title";
import UserForm from "@/app/components/user/UserForm";
import users from "@/app/data/constants/users";
import { useState } from "react";
import { User } from "@/core/model/User";

export default function PageFunction() {
  const [user, setUser] = useState<User>(users[0])
  return (
    <Page className="flex flex-col gap-10">
      <Title icon={IconUser} title='Users' subTitle='User Register'/>
      {/* <UserList/> */}
      <UserForm user={user} onChange={setUser}/>
    </Page>
  )
}