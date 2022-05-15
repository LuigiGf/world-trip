import { Img } from "@chakra-ui/react";
import { Cup } from "../../public/Icons";
import Benefit from "../components/Benefit";
import Header from "../components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <Img alt="Banner" src="Banner.png" objectFit="cover" w="full" />
      <Benefit title="Vida Noturna" svg={<Cup />} />
    </>
  );
}
