import Image from 'next/image'
import success from '@/public/modal/success.svg'
import error from '@/public/modal/error.svg'
import Button from '../home/Button'
import classes from './modal.module.css'


export const Modal = ({ isOpen, children }:any) => {
  // if (!isOpen) return null;

  return(
    isOpen && <div className={`${classes.modalOverlay}`}>

        {children}

    </div>
  )
};


export const Success = ({isError,header, message}:{[key:string]:boolean | string}) => {
  return (
 <main className='bg-[#fff] w-[30%] text-center flex flex-col items-center px-[5%] h-[30vh] rounded-md py-[3%] '>
        <Image src={isError?error:success} alt='success' className='w-[50px] mx-auto' width={200} height={200}/>
        <h3 className='text-[#0000CD]'>{isError ?'ERROR!': 'SUCCESS!'}</h3>
        <p className='my-[1%]'>{header} </p>
        <p className='text-[0.6rem] my-[1%]'>{message}</p>

        <Button className={'bg-[#0000CD] text-[#fff]'} text={'Next'} />

    </main>
  )
}

