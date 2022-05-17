import { Flex, Text, Container } from "@chakra-ui/react";
import { useMemo } from "react";
import { Banner } from "../../components/Continents";
import Header from "../../components/Header";

interface itemProps {
  number: number;
  description: string;
}

export default function Continent() {
  const items: itemProps[] = useMemo(
    () => [
      {
        number: 50,
        description: "países",
      },
      {
        number: 60,
        description: "línguas",
      },
      {
        number: 27,
        description: "cidades +100",
      },
    ],
    []
  );
  return (
    <>
      <Header isContinent={true} />
      <Banner title="Europa" bgImage="/londres.png" />
      <Container maxW="7xl" my="20" display="flex">
        <Text
          textAlign="justify"
          maxW="2xl"
          textColor="gray.500"
          fontSize="2xl"
          mr="20"
        >
          A Europa é, por convenção, um dos seis continentes do mundo.
          Compreendendo a península ocidental da Eurásia, a Europa geralmente
          divide-se da Ásia a leste pela divisória de águas dos montes Urais, o
          rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
        <Flex alignItems="center" justifyContent="space-between" w="full">
          {items.map(({ number, description }: itemProps) => (
            <Flex
              key={description}
              direction="column"
              alignItems="center"
              justifyItems="center"
              lineHeight="10"
            >
              <Text textColor="yellow.400" fontSize="5xl" fontWeight="semibold">
                {number}
              </Text>
              <Text textColor="gray.500" fontSize="2xl" fontWeight="semibold">
                {description}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Container>
    </>
  );
}
