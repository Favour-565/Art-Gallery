import Image from "next/image";
import Link from "next/link";
import google from "@/public/auth/google.svg";
import divider from "@/public/auth/divider.svg";
import Button from "@/UI/home/Button";
import {
  EmailInput,
  IFormValues,
  Input,
  InputValues,
  PasswordInput,
  PhoneInput,
  Select,
} from "@/UI/home/Input";
import {
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  useForm,
} from "react-hook-form";
import { Login } from "@/pages/lib/auth";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { Modal, Success } from "@/UI/modal/modal";
import { fetchPOST } from "@/pages/lib/api";

const LoginAuth = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<InputValues>();
  const dispatch = useDispatch()
  const loading = useSelector((state:any) => state.user.loading)
  console.log({loading})

  const onSubmit: SubmitHandler<InputValues> = async(data:any) => {
    // Login(data, dispatch)

    const response = await fetch('/api/auth',  {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    if(response.status === 200){
      window.location.href = '/dashboard'
    }
  };

  return (
    <>
  
     <main
      className="text-center py-[5%] px-[5%]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <span className="text-[#0000CD]">Artistic Elegance Gallery</span>
      <h3 className="about-text font-[400] my-[2%] text-[1.2rem]">
        Welcome Back{" "}
      </h3>
      <Link
        href=""
        className="flex border justify-center items-center rounded-md py-[2%]"
      >
        <Image src={google} alt="google-icon" className="h-[3vh] w-auto" />
        <span className="w-auto ml-[3%] text-[#98A2B3] text-[0.8rem]">
          Sign In with Google
        </span>
      </Link>
      <div className="flex justify-evenly items-center mt-[3%] px-[5%]">
        <Image src={divider} alt="divider-icon" className="w-[50%]" />
        <span className="text-[#98A2B3] text-[0.8rem] w-auto px-[2%]">OR</span>
        <Image src={divider} className="w-[50%]" alt="divider-icon" />
      </div>
      <form className="text-left">
        <EmailInput
          label="Email"
          name="email"
          register={register}
          placeholder="Ayomidefatogun@gmail.com"
          required
        />
        <PasswordInput
          label="Password"
          name="password"
          register={register}
          placeholder="********"
          required
        />
        <Link
          href={"/forgot-password"}
          className=" text-[#1570EF] text-[0.8rem]"
        >
          Forgot Password
        </Link>
        <div className="flex justify-center">
          <Button
            className={"bg-[#0000CD] text-[#fff] w-[100%] "}
            text={loading? "loading...":"Login"}
          />
        </div>
      </form>
      <span className="text-[0.8rem] text-[#98A2B3] my-[2%]">
        {" "}
        Don’t have an account ?{" "}
        <Link href={"/signup"} className="underline text-[#0000CD]">
          Signup
        </Link>
      </span>
    </main>
    </>
   
  );
};

export default LoginAuth;
