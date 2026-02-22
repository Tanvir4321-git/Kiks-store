import Banner from "@/Component/Home/Banner";
import Category from "@/Component/Home/Category";
import NewDrops from "@/Component/Home/NewDrops";
import Review from "@/Component/Home/Review";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Banner></Banner>
   <NewDrops></NewDrops>
   <Category></Category>
   <Review></Review>
  
   </>
  );
}
