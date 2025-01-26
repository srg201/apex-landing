import React, { ReactNode } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ContactForm } from './contact-form';


interface Props {
    children: ReactNode;
}


const ContactDialog = ({children}: Props) => {
  return (
    <Dialog>
  <DialogTrigger asChild>{children}</DialogTrigger>
          <DialogContent>
              <DialogTitle></DialogTitle>
    <ContactForm />
  </DialogContent>
</Dialog>

  )
}

export default ContactDialog