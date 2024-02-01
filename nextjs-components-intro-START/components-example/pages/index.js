import Image from "next/image";
import { Inter } from "next/font/google";
import NewConcept from "@/components/NewConcept";

const inter = Inter({ subsets: ["latin"] });

import HomeBackgroundWrapper from "@/components/HomeBackgroundWrapper";

export default function Home() {
  return (
    <HomeBackgroundWrapper>
      A component
      <NewConcept
        idea={" Components should have the same name as the file name."}
      />
      <NewConcept idea={"Attributes in jsx are the props in our staff"} />
    </HomeBackgroundWrapper>
  );
}
