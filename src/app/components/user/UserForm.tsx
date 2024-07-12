import { User } from "@/core/model/User";
import TextInput from "../shared/TextInput";

export interface UserFormProps{
  user: Partial<User>
  onChange: (user: Partial<User>) => void
  Save: () => void
  Cancel: () => void
  Delete: () => void
}

export default function UserForm(props: UserFormProps){

  return (
    <div className="flex flex-col gap-5">
      <TextInput 
        label="Name" 
        type="text" 
        value={props.user.name} 
        onChange={
          (e) => props.onChange?.({ ...props.user, name: e.target.value }) 
        }
      />
      <TextInput 
        label="Email" 
        type="email" 
        value={props.user.email} 
        onChange={
          (e) => props.onChange?.({ ...props.user, email: e.target.value })  
        }/>
      <TextInput 
        label="Password"
        type="password"
        value={props.user.password}
        onChange={
          (e) => props.onChange?.({ ...props.user, password: e.target.value }) 
        }
      />
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button className="bg-blue-500 px-4 py-2 rounded-md" onClick={props.Save}>
            Save
          </button>
          <button className="bg-zinc-500 px-4 py-2 rounded-md" onClick={props.Cancel}>
            Cancel
          </button>
        </div>
        <button className="bg-red-500 px-4 py-2 rounded-md" onClick={props.Delete}>
          Delete
        </button>
      </div>

    </div>             
  )

}