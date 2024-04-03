'use client'

import {Tooltip, Link} from "@nextui-org/react";
import { GoPasskeyFill } from "react-icons/go";
import { useSession, signOut } from "next-auth/react";
import {Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import { useQuestionStore } from "@/store/questions";

export const Header = () => {
  const {questions} = useQuestionStore()
  const {data:session} = useSession()

  return (
    <header className="fixed w-full flex justify-end py-8 px-24">
      <div className="righ flex items-center gap-4">
        
      
        {session ? (
          <Dropdown placement="bottom-end" className="mt-4" >
          <DropdownTrigger>
            <Avatar
              isBordered
              color="secondary"
              name={session.user?.name || 'Juanch@'}
              size="md"
              src={session.user!.image || "https://cdn.icon-icons.com/icons2/2468/PNG/512/user_icon_149329.png"}
              className="p-2"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat" className="p-4" >
            <DropdownItem key="profile" className="h-14 gap-2" isDisabled={true} textValue='userData'	>
              <p className="text-sm font-semibold">{session.user!.name || 'Juanch@'}</p>
              <p className="text-xs ">{session.user!.email!}</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" className="text-center" onClick={()=>signOut({callbackUrl:'/'})}>
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        )
        : questions.length!=0 ? (
          <Tooltip content="Log In" className="text-lg p-6" placement="left">
            <Button className="bg-transparent h-fit w-fit" as={Link} href="/login"><GoPasskeyFill className="text-6xl"/></Button>
          </Tooltip> ) : <></> }
        
      </div>
    </header>
  )
}