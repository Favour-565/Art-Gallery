import { ReactElement } from "react";
import classes from './AuthModal.module.css'

interface AuthModalProps {
    children: ReactElement;
}


const AuthModal = ({children}:AuthModalProps) => {

  return (
    <div className={`${classes.authmodal} relative z-[2] rounded-md`}>{children}</div>
  )
}

export default AuthModal