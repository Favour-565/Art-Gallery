import DashLayout from '@/UI/dashboard/DashLayout';
import DashSingleCategory from '@/components/Dashboard/DashSingleCategory';
import { getArtworks, getOrders, getSingleArtwork } from '@/pages/lib/user';
import { useRouter } from 'next/router';
import { Suspense, useEffect } from 'react';

const subpath = ({artwork}:any) => {

  return (
    <DashLayout>
      <Suspense fallback={<p>Loading.....</p>}>
        <DashSingleCategory artwork={artwork} />
      </Suspense>
    </DashLayout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await getArtworks('')

 
  // Get the paths we want to pre-render based on posts
  const paths = res.map((post:any) => ({
    params: { dashpath: post.category, subpath: post.id },
  }))
 
  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This also gets called at build time
export async function getStaticProps({ params }:any) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const artwork = await getSingleArtwork(params.subpath)

  console.log({artwork})
  // const post = await res.json()
 
  // Pass post data to the page via props
  return { props: { artwork } }
}


export default subpath;
