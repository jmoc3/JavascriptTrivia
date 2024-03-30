import {Tooltip, Button, Link} from "@nextui-org/react";
import { GoPasskeyFill } from "react-icons/go";

export const Header = () => {
  return (
    <header className="fixed w-full flex justify-end py-8 px-24">
      <div className="righ flex items-center gap-4">
        <Tooltip content="Log In" className="text-lg p-6" placement="left">
          <Button className="bg-transparent h-fit w-fit" as={Link} href="/login"><GoPasskeyFill className="text-6xl"/></Button>
        </Tooltip>
      </div>
    </header>
  )
}