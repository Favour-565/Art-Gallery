import { ReactElement } from "react";

interface AuthCardProps {
    children: ReactElement;
}

const AuthBg = ({ children }: AuthCardProps) => {
  return (
    <main className="authbg">{children}</main>
  )
}

export default AuthBg