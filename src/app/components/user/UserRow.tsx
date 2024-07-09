import { User } from "@/core/model/User"
import Image from "next/image"

export interface RowUserProps {
  User: User
}

export default function UserRow(props: RowUserProps){
  return (
    <div className="flex bg-zinc-900 items-center gap-5 p-4 rounded-md">
      <Image
        src="https://picsum.photos/80"
        width={80}
        height={80}
        className="rounded-full"
        alt="Avatar"
      />
      <div className="flex flex-col">
        <span className="text-xl font-black">{props.User.name}</span>
        <span className="text-sm text-zinc-400">{props.User.email}</span>
      </div>
    </div>
  )
}