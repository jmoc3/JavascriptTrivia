import { Modal, ModalContent, ModalHeader, ModalBody, Input, Link, ModalFooter, Button } from "@nextui-org/react"
import axios from "axios"
import { useState } from "react"
import { inputHandler } from "@/services/inputHandler"

export const SignUpModal = ({isOpen, onOpenChange}:{isOpen:boolean, onOpenChange:()=>void}) => {

  const [formData, setFormData] = useState<Record<string,string>>({})

  const handleSubmit:React.MouseEventHandler<HTMLButtonElement> = async(e) => {
    
    if (formData.password!=formData.confirmPassword) return alert('The passwords has to be the same')
    
    axios.post('/api/auth/register',
    { name:formData.name,
      email:formData.email,
      password:formData.password }).catch((err):void=>{
        console.log(err.toJson(),'arroz printeamo algo cabron')
      })

    
    
  }

  return(
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="w-fit p-10">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl">Create a new account</ModalHeader>
            <form autoComplete="off">
              <ModalBody className="gap-4">
                <Input isRequired type="name" name="name" label="Name" className="max-w-xs" variant="underlined" value={formData.name} onChange={(e)=>inputHandler(e,formData,setFormData)}/>
                <Input isRequired type="email" name="email" label="Email" className="max-w-xs" variant="underlined" value={formData.email} onChange={(e)=>inputHandler(e,formData,setFormData)}/>
                <Input isRequired type="password" name="password" label="Password" className="max-w-xs" variant="faded" value={formData.password} onChange={(e)=>inputHandler(e,formData,setFormData)}/>
                <Input isRequired type="confirmPassword" name="confirmPassword" label="Confirm Password" className="max-w-xs" variant="faded" value={formData.confirmPassword} onChange={(e)=>inputHandler(e,formData,setFormData)}/>
              </ModalBody>
              <ModalFooter className="gap-4">
                <Link color="danger" onPress={onClose} className="text-xs cursor-pointer">
                  Already have an account?
                </Link>
                <Button color="primary" onClick={handleSubmit}>
                  Sign Up
                </Button>
              </ModalFooter>
            </form>

          </>
        )}
      </ModalContent>
    </Modal>

  )
}