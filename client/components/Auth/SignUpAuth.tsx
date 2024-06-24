import Image from "next/image"
import Link from "next/link"
import google from "@/public/auth/google.svg"
import divider from "@/public/auth/divider.svg"
import Button from "@/UI/home/Button"
import { EmailInput, IFormValues, Input, InputValues, PasswordInput, PhoneInput, Select } from "@/UI/home/Input"
import { RegisterOptions, SubmitHandler, UseFormRegisterReturn, useForm } from "react-hook-form"
import { Register } from "@/pages/lib/auth"


const SignupAuth = () => {
    const { register, handleSubmit } = useForm<InputValues>()
    

  const onSubmit: SubmitHandler<InputValues> = (data) => {
    Register(data)
  }
  
  return (
    
        <main className="text-center py-[5%] px-[5%]">
            <span className="text-[#0000CD]">Artistic Elegance Gallery</span>
            <h3 className="about-text font-[400] my-[2%] text-[1.2rem]">Create a new account </h3>
            <Link href="" className="flex border justify-center items-center rounded-md py-[2%]"><Image src={google} alt="google-icon" className="h-[3vh] w-auto"/><span className="w-auto ml-[3%] text-[#98A2B3] text-[0.8rem]">Sign up with Google</span></Link>
            <div className="flex justify-evenly items-center mt-[3%] px-[5%]">
                <Image src={divider} alt="divider-icon" className="w-[50%]" /><span className="text-[#98A2B3] text-[0.8rem] w-auto px-[2%]">OR</span><Image src={divider} className="w-[50%]" alt="divider-icon" />
            </div>
            <form className="text-left" onSubmit={handleSubmit(onSubmit)}>
                <Input label="First Name" name="firstname" register={register} placeholder="Ayomide"  required /> 
                <Input label="Surname" name="surname" register={register} placeholder="Fatogun" required  /> 
                <EmailInput label="Email" name="email" register={register} placeholder="Ayomidefatogun@gmail.com" required  /> 
                <Select label="Role" name="role" options={["Artist", "User"]} register={register} />
                <PhoneInput label="Phone number" name="phone" register={register} placeholder="+234 7024348991" required  />
                <PasswordInput label="Password" name="password" register={register} placeholder="********" required  />
                <PasswordInput label="Confirm Password" name="confirmPassword" register={register} placeholder="********" required  />
                <div className="flex justify-center">
                <Button className={"bg-[#0000CD] text-[#fff] w-[96%] m"} text={"Register"} />

                </div>
            </form>
            <span className="text-[0.8rem] text-[#98A2B3] my-[2%]"> Already have an account? <Link href={"/login"} className="underline text-[#0000CD]">Sign in here</Link></span>
            
        </main>


     
  )
}

export default SignupAuth