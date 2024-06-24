import AuthBg from "@/UI/auth/AuthBg"
import AuthModal from "@/UI/auth/AuthModal"
import { Modal, Success } from "@/UI/modal/modal"
import ForgotAuth from "@/components/Auth/ForgotPassword"
import LoginAuth from "@/components/Auth/LoginAuth"
import ResetAuth from "@/components/Auth/ResetPassword"
import SignupAuth from "@/components/Auth/SignUpAuth"
import { useRouter } from 'next/router'
import { useSelector } from "react-redux"


const signup = () => {

  const router = useRouter()

  const path = router.query.auth
  const error = useSelector((state:any) => state.user.error)

  
  return (
    <>
      <Modal isOpen={error.length > 0}>
        <Success isError={true} header={'Message'} message={error} />
      </Modal>
      <AuthBg>

          
      <AuthModal>
        <>
          {path === "signup" && <SignupAuth /> }
          {path === "login" && <LoginAuth /> }
          {path === "forgot-password" && <ForgotAuth />}
          {path === "reset-password" && <ResetAuth />}
        </>
        
      </AuthModal>
      </AuthBg>
    </>
  
    
  )
}

export default signup
