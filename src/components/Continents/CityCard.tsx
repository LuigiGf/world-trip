import { Flex, Img, Text } from "@chakra-ui/react";

export function CityCard() {
  return (
    <Flex flexDirection="column" w={256} height={280} roundedTop="2xl">
      <Img src="/Londre.png" width={256} height={173} />
      <Flex
        border="2px"
        borderTop="none"
        borderColor="yellow.200"
        roundedBottom="md"
        justifyContent="space-between"
        alignItems="center"
        p="6"
      >
        <Flex flexDir="column">
          <Text
            lineHeight="10"
            fontSize="xl"
            fontWeight="semibold"
            textColor="gray.500"
            fontFamily="Barlow"
          >
            Londres
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="lg"
            fontWeight="medium"
            textColor="gray.400"
          >
            Reino Unido
          </Text>
        </Flex>
        <Img src="/ReinoUnido.png" w={30} h={30} />
      </Flex>
    </Flex>
  );
}
