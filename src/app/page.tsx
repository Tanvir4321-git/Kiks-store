import Banner from "@/Component/Home/Banner";
import Category from "@/Component/Home/Category";
import NewDrops from "@/Component/Home/NewDrops";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Banner></Banner>
   <NewDrops></NewDrops>
   <Category></Category>
   </>
  );
}
