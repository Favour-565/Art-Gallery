import Button from '@/UI/home/Button';
import { InputValues, PasswordInput } from '@/UI/home/Input'
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';



const DashPassword = () => {
    const { register, handleSubmit } = useForm<InputValues>();

  const onSubmit: SubmitHandler<InputValues> = (data) => {

      console.log('data',data)
    
   
  };
  return (
 
    <form className='w-[40%] my-[1%] ml-[3%]' onSubmit={handleSubmit(onSubmit)}>
        <h3>Reset Password</h3>
        <PasswordInput label="Old Password" name="password" register={register} placeholder="********" required  />
        <PasswordInput label="New Password" name="password" register={register} placeholder="********" required  />
        <PasswordInput label="Confirm New Password" name="confirmPassword" register={register} placeholder="********" required  />
        <Button className={'bg-[#0000CD] text-[#FFFFFF]'} text={'Save Changes'} />
    </form>
   
  )
}

export default DashPassword