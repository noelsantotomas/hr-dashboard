import Image from "next/image";
import { Inter } from "next/font/google";
import { HomePageContent } from "@/components/Home";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <HomePageContent />
    </>
  );
}
