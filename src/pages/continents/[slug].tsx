import { Flex, Text, Container } from "@chakra-ui/react";
import { Banner } from "../../components/Continents";
import Header from "../../components/Header";

export default function Continent() {
  return (
    <>
      <Header isContinent={true} />
      <Banner title="Europa" bgImage="/londres.png" />
    </>
  );
}
