import Button from "@/UI/home/Button"
import { EmailInput, IFormValues, Input, InputValues, PasswordInput, PhoneInput, Select } from "@/UI/home/Input"
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form"


const ResetAuth = () => {
    const { register, handleSubmit } = useForm<InputValues>()

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data))
  }
  
  return (
    
        <main className="text-center py-[5%] px-[5%]">
            <span className="text-[#0000CD]">Artistic Elegance Gallery</span>
            <h3 className="about-text font-[400] my-[2%] text-[1rem]">Reset Your Password</h3>
           
            <form className="text-left" >
                <PasswordInput label="Password" name="password" register={register} placeholder="********" required  />
                <PasswordInput label="Confirm Password" name="confirmPassword" register={register} placeholder="********" required  />
                <div className="flex justify-center">
                <Button className={"bg-[#0000CD] text-[#fff] w-[100%] text-[0.8rem] "} text={"Reset Password"} />
                </div>
            </form>
         
            
        </main>
  )
}

export default ResetAuth