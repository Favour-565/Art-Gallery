import Link from "next/link"
import Button from "@/UI/home/Button"
import { EmailInput, IFormValues, Input, InputValues, PasswordInput, PhoneInput, Select } from "@/UI/home/Input"
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form"


const ForgotAuth = () => {
    const { register, handleSubmit } = useForm<InputValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }
  
  return (
    
        <main className="text-center py-[5%] px-[5%]">
            <span className="text-[#0000CD]">Artistic Elegance Gallery</span>
            <h3 className="about-text font-[400] my-[2%] text-[1rem]">Reset Your Password</h3>
            <p className="text-[#98A2B3] text-[0.6rem]">Enter your email below and we’ll send you instructions on how to reset your password.</p>
        
            <form className="text-left" >
                <EmailInput label="Email" name="email" register={register} placeholder="Ayomidefatogun@gmail.com" required  /> 
                <div className="flex justify-center">
                <Button className={"bg-[#0000CD] text-[#fff] w-[100%] text-[0.8rem] "} text={"Send reset instructions"} />
                </div>
            </form>
            <span className="text-[0.8rem] text-[#98A2B3] my-[2%] text-[0.8rem]"> Go back to <Link href={"/login"} className="underline text-[#0000CD]">Sign In</Link></span>
            
        </main>
  )
}

export default ForgotAuth