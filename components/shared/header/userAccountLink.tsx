import React from 'react'
import { UserAccount } from './userAccount'
import { RiExternalLinkFill} from "react-icons/ri"
export const UserAccountLink = () => {
  return (
    <div className='flex items-center pr-0 justify-between w-full p-2 cursor-pointer '>
    <UserAccount/>
    <p className='opacity-70 text-primary py-2 px-1 hover:text-blue-800 hover:bg-muted'><RiExternalLinkFill/></p>
    </div>
  )
}
