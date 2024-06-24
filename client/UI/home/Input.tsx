
import React, { useState } from "react"
import { Path,  UseFormRegister, useForm } from "react-hook-form"
import classes from '@/UI/auth/AuthModal.module.css'

export interface IFormValues {
  firstname: string,
  surname:string,
  email:string,
  age: number,
  phone:string,
  password:string,
  confirmPassword:string,
  address?:string,
  state?:string,
  zipCode?:number,
  role:string
}


interface IPasswordValues {
  password: string,
  confirmPassword:string,
}

interface ILoginValues{
  email:string,
  password:string,
}

export type InputValues = IFormValues | IPasswordValues | ILoginValues




type InputProps = {
  label: string,
  name: Path<IFormValues>
  register: UseFormRegister<InputValues>
  required: boolean,
  placeholder:string,
  type?:string,
  readonly?:boolean,
  defaultValue?:string,
}


type SelectProps = {
  label: string,
  name: Path<IFormValues>
  register: UseFormRegister<InputValues>
  required?: boolean,
  options:string[],
}





const InputDiv = ({ label, register, required , placeholder, name,  type, readonly, defaultValue}: InputProps) => {
  const [error,setError] = useState(false)
    return (
        <div className={classes.inputDiv}>
        <label className="text-[0.8rem] font-[400] text-[#101828]">{label}</label><br />
        <input {...register(name, { required })} type={type} className={`border justify-center rounded-md py-[1%] pl-[3%] text-[0.8rem] ${classes.inputStyle}`} placeholder={placeholder} readOnly={readonly} defaultValue={defaultValue}  onBlur={() => setError(true)}/>
        {error  && <span className="text-[red] text-[0.7rem]">This {name} is required</span>}
      </div>
    )
}

// The following component is an example of your existing Input Component
export const Input = ({ label, register, required , placeholder, name,  }: InputProps) => (
  <InputDiv label={label} register={register} placeholder={placeholder} name={name}  required/>
)

export const EmailInput = ({ label, register, required ,readonly, placeholder, name, defaultValue}: InputProps) => (
    <InputDiv label={label} register={register} placeholder={placeholder} name={name}  type="email" readonly={readonly} defaultValue={defaultValue} required  />
  )

export const PhoneInput = ({ label, register, required , placeholder, name}: InputProps) => (
    <InputDiv label={label} register={register} placeholder={placeholder} name={name}  type="tel" required/>
  )

export const PasswordInput = ({ label, register, required , placeholder, name}: InputProps) => (
    <InputDiv label={label} register={register} placeholder={placeholder} name={name}  type="password" required/>
  )

// you can use React.forwardRef to pass the ref too
export const Select = (({ label, register,  name, options}: SelectProps) => (
  <div className={classes.inputDiv}>
    <label className="text-[0.8rem] font-[400] text-[#101828]">{label}</label> 
    <select  {...register(name)} className={`border justify-center rounded-md py-[1%] pl-[3%] text-[0.8rem] ${classes.inputStyle}`}>
      {options.map((item:string) =>(
          <option value={item}  >{item}</option>
      ))}

      </select>
  </div>
))

