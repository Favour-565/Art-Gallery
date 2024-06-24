import DashLayout from "@/UI/dashboard/DashLayout";
import DashCategories from "@/components/Dashboard/DashCategories";
import { fetchGET } from "@/pages/lib/api";
import { getArtworks, getOrders } from "@/pages/lib/user";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Dashboard = ({ artworks }: any) => {
 

  return (
    <DashLayout>
      <>
     
        <DashCategories artworks={artworks} />
      
      </>
    </DashLayout>
  );
};

export async function getServerSideProps( context:any) {
  
  try {
    const { params, req} = context;


   
    const path = params?.dashpath as string;

    // Fetch artworks from your API
    const artworks =  path ? await getArtworks(path) : await getArtworks('')

    const orders = await fetchGET('orders', '', req.cookies.token)



    // Pass the artworks data to the page via props
    return { props : {artworks, orders: orders.data.orders  } };
  } catch (error) {
    // Handle the error appropriately (logging, showing an error page, etc.)
    console.error('Error fetching artworks:', error);

    // Return an empty array or handle the error in a way that fits your application
    return { props: { artworks: [], orders: [] } };
  }
}

export default Dashboard;

