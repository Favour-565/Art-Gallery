import Button from "@/UI/home/Button";
import {
  EmailInput,
  IFormValues,
  Input,
  InputValues,
  PasswordInput,
  PhoneInput,
} from "@/UI/home/Input";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import prof from "@/public/dashboard/pro-avatar.svg";
import Image from "next/image";
import camera from "@/public/dashboard/camera.svg"
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails, uploadImage } from "@/pages/lib/user";
import { UpdateProfile } from "@/pages/lib/auth";

const SettingsForm = () => {
  const { register, handleSubmit, formState: { errors }} = useForm<InputValues>();
  const [change, setChange] = useState(false)

  const user = useSelector((state:any) => state.user.user)
  const loading = useSelector((state:any) => state.user.loading)
  const dispatch = useDispatch()

  useEffect(() => {
    getUserDetails(dispatch)
  }, [])


  const onSubmit: SubmitHandler<InputValues> = (data) => {
      UpdateProfile(data, dispatch)
  };

  //image update
  const [img, setImg] = useState("");
  const [formData, setFormData] = useState<any>({
    image: ''
  });

  const handleChange = (e: any) => {
   console.log(e.target.name, e.target.files[0])
    setFormData({
      ...formData,
      [e.target.name]: e.target.files[0],
    });
  
      setImg(URL.createObjectURL(e.target.files[0]));
     
  };

  const handleImageSubmit =  (e: any) => {
    e.preventDefault();
    console.log(formData)
    uploadImage(formData)
    // dispatch(createEvent(formData));
  };

  const fileInputRef = useRef<any>(null);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <main className="text-center flex w-[70%] ml-[3%]" >
      <form className="text-left w-[50%]" onSubmit={handleSubmit(onSubmit)} >
        <h3>Edit your profile</h3>
        <Input
          label="Surname"
          name="surname"
          register={register}
          placeholder={!change ? user?.firstname : 'your surname'}
          required
        />
        <Input
          label="First Name"
          name="firstname"
          register={register}
          placeholder={!change ? user?.surname: 'your firstname'}
          required
        />
        <EmailInput
          label="Email"
          name="email"
          register={register}
          placeholder={user?.email}
          required
          readonly={true}
          defaultValue={user?.email}
        />
        <PhoneInput
          label="Phone number"
          name="phone"
          register={register}
          placeholder={!change ? user?.phone : 'your phone number'}
          required
        />
        <Input
          label="Address"
          name="address"
          register={register}
          placeholder={!change ? user?.address : 'your address'}
          required
        />
        <Input
          label="`State`"
          name="state"
          register={register}
          placeholder={!change ? user?.state : 'your state' }
          required
        />
        <Input
          label="Zip Code"
          name="zipCode"
          register={register}
          placeholder={!change ? user?.zipCode : 'zipcode'}
          required
        />
        <div className="flex justify-center">
          {change ? <Button
            className={"bg-[#0000CD] text-[#fff] w-[96%] "}
            text={loading? "Loading.....":"Save Changes"}
          /> : <Button
            className={"bg-[#0000CD] text-[#fff] w-[96%] "}
            text={"Make Changes"}
            onClick={ () => setChange(!change) }
          />}
        </div>
      </form>
      <section className="w-[30%] flex flex-col ml-[7%] mt-[5%]">
      
        <Image src={img || user?.profileUrl || prof} alt="profile" className="w-[200px] mx-[auto]"  width={200} height={200}/>
        <input
              type="file"
              name="image"
              onChange={handleChange}
              className="hidden"
              ref={fileInputRef}
            />
        <button className={`border rounded-md my-[2%] py-[2%] w-[70%] flex text-[0.8rem] justify-center mx-[auto] `} onClick={formData.image ==='' ?handleButtonClick : handleImageSubmit}><Image src={camera} alt="camera" className="h-[2vh] w-[auto]" />{formData.image ==='' ?'Change Avatar' : 'Upload Avatar'} </button>
        <p className="text-[#EB5757] text-[0.6rem]">Delete Avatar</p>
      </section>
    </main>
  );
};

export default SettingsForm;
