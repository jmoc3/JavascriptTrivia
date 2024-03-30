'use client'

import { Card, Input, Button, Divider, Link, useDisclosure } from "@nextui-org/react";
import { GoogleLog } from "@/assets/GoogleLogo";
import { SignUpModal } from "@/components/login/SignUpModal";
import { GoMoveToStart } from "react-icons/go";
import { signIn } from "next-auth/react";

const LogIn = () => {

  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  return(
    <div className="screen flex items-center justify-center w-full h-screen">
      <Card className="w-fit px-12 py-12 space-y-12 items-center">
        <form action="" className="flex h-full gap-8 ">
          <div className="leftLogin flex flex-col justify-between">
          <legend className="text-xl">Log In</legend>
            <Button isIconOnly color="success" aria-label="home" variant="flat" as={Link} href="/">
              <GoMoveToStart className=" text-xl "/>
            </Button>    
          </div>
          <Divider orientation="vertical" className="h-[12rem]"/>
          <div className="inputs flex flex-col gap-6 items-end">

            <Input isRequired type="email" label="Email" className="max-w-xs"/>
            <Input isRequired type="password" label="Password" className="max-w-xs"/>
            <div className="actionsButton space-x-4">
              <Link className="text-sm cursor-pointer" color="secondary" onPress={onOpen}>Sign Up</Link>
              <Button color="success" variant="flat" >Go</Button>
              <SignUpModal isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
          </div>
        </form>
        <Divider />

        <Button startContent={<GoogleLog />} className="bg-white gap-[1rem] py-[1.8rem] w-3/4" onClick={()=>signIn()}>
          <span className="text-black">Sign With Google</span>
        </Button>
      </Card>
    </div>
  )
}

export default LogIn