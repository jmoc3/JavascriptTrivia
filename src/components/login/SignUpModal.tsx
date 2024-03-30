import { Modal, ModalContent, ModalHeader, ModalBody, Input, Link, ModalFooter, Button } from "@nextui-org/react"

export const SignUpModal = ({isOpen, onOpenChange}:{isOpen:boolean, onOpenChange:()=>void}) => {
  return(
    <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
      <ModalContent className="w-fit p-10">
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 text-xl">Create a new account</ModalHeader>
            <ModalBody className="gap-4">
              <Input isRequired type="Name" label="Name" className="max-w-xs" variant="underlined"/>
              <Input isRequired type="email" label="Email" className="max-w-xs" variant="underlined"/>
              <Input isRequired type="password" label="Password" className="max-w-xs" variant="faded"/>
              <Input isRequired type="confirmPassword" label="Confirm Password" className="max-w-xs" variant="faded"/>
            </ModalBody>
            <ModalFooter className="gap-4">
              <Link color="danger" onPress={onClose} className="text-xs cursor-pointer">
                Already have an account?
              </Link>
              <Button color="primary" onPress={onClose}>
                Sign Up
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>

  )
}