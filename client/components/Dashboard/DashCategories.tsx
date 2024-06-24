import { ArtistSection } from "./DashHome";
import medium from "@/public/dashboard/medium art.svg";
import ben from "@/public/dashboard/ben.svg";
import Link from "next/link";
import Image from "next/image";
import Button from "@/UI/home/Button";
import { useState, useEffect } from "react";
import locationn from "@/public/dashboard/location.svg";
import { usePathname, useRouter } from "next/navigation";


const SaleItems = [
  {
    caption: "Medium Art",
    src: medium,
    price: "10000",
  },
  {
    caption: "Medium Art",
    src: medium,
    price: "10000",
  },
  {
    caption: "Medium Art",
    src: medium,
    price: "10000",
  },
  {
    caption: "Medium Art",
    src: medium,
    price: "10000",
  },
];

const DashCategories = ({ artworks }: any) => {
  const [cartItem, setCartItem] = useState(artworks);


  const AddToCart = (id: number) => {
    // Check if localStorage is available before using it

    const Cart = localStorage.getItem("cart") || ("" as unknown as string);

    // Clone the existing cartItem array
    const newCartItem = [...cartItem];

    // Add the selected item to the cloned array
    const selectedItem = newCartItem[id];

    // Check if the item is not already in the cart
    if (selectedItem) {
      // Update the 'cart' key in local storage with the new array
      localStorage.setItem(
        "cart",
        JSON.stringify([...JSON.parse(Cart || "[]"), selectedItem])
      );

      // Optionally, you might want to update the state to reflect the change in the UI
      setCartItem([...newCartItem]);
    }
  };



  const category = usePathname().split("/")[2] as unknown as any;


  return (
    <section>
      <h3>{category.toUpperCase()}</h3>
      {artworks.length === 0 && <p>No Artwork Yet......</p>}
      <div className="flex">
        {artworks.map((elem: any, index: number) => (
          <SaleCard
            key={index}
            src={elem.image || medium}
            category={category}
            id={elem.id}
            caption={elem.name}
            price={elem.price}
            artist="ben"
            profile={elem.artist.profileUrl || ben}
            location={"lagos"}
            onClick={() => AddToCart(index)}
          />
        ))}
      </div>
      <ArtistSection />
    </section>
  );
};

export const SaleCard = ({
  id,
  category,
  src,
  caption,
  price,
  onClick,
  profile,
  artist,
  location,
}: any) => {
  const path = usePathname();

  return (
    <div  className="flex flex-col justify-between  mr-[1%] w-[20%] auction-overlay border w-[20%]">
    <Link
      href={`/dashboard/${category}/${id}`}
     
    >
      <div className="rounded-md">
        <Image
          src={src}
          alt={caption}
          className="object-cover h-48 w-96"
          width={200}
          height={200}
        />
      </div>
      </Link>

      <div className=" px-[2%] py-[1%]">
        <figcaption>{caption}</figcaption>
        <div className="flex my-[1%] text-[0.6rem]">
          <div className="flex items-center ">
            <Image
              src={profile}
              alt={"profile-img"}
              className=" w-[20px] mt-[3%] rounded-md mr-[5%]"
              width={200}
              height={200}
            />
            <figcaption>{artist}</figcaption>
          </div>
          <div className="flex items-center">
            <Image
              src={locationn}
              alt={"location-icon"}
              className=" w-[20px] mt-[3%] rounded-md"
            />
            <figcaption>{location}</figcaption>
          </div>
        </div>

        <div className="flex items-center">
          <p className="text-[#27AE60]">
            <span className="text-[#888888] text-[0.6rem]">Price:</span> ₦
            {price}
          </p>
          {path === "/dashboard/cart" ? (
            <Button
              className={"bg-[#EB5757] text-[#fff]"}
              text={"Remove From Cart"}
              onClick={onClick}
            />
          ) : (
            <Button
              className={"bg-[#27AE60] text-[#fff]"}
              text={"Add To Cart"}
              onClick={onClick}
            />
          )}
        </div>
      </div>
      </div>
  );
};

export default DashCategories;
