import Image from "next/image";
import { Inter } from "next/font/google";
import Title from "@/components/Title"
import SimpsonCharacters from "@/components/SimpsonCharacters"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 return (
  <main 
  className={'flex min-h-screen flex-col items-center'}>
    <Title text={"Simpsons Characters"}/>
    <SimpsonCharacters/>
  </main>
 )
}
