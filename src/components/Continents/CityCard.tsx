import { Flex, Img, Text } from "@chakra-ui/react";

interface CityCardProps {
  city: string;
  country: string;
  countryImage: string;
  countryFlag: string;
}

export function CityCard({
  city,
  country,
  countryFlag,
  countryImage,
}: CityCardProps) {
  return (
    <Flex
      key={city}
      flexDirection="column"
      w={256}
      height={280}
      roundedTop="2xl"
    >
      <Img src={countryImage} width={256} height={173} />
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
            {city}
          </Text>
          <Text
            fontFamily="Barlow"
            fontSize="lg"
            fontWeight="medium"
            textColor="gray.400"
          >
            {country}
          </Text>
        </Flex>
        <Img src={countryFlag} w={30} h={30} />
      </Flex>
    </Flex>
  );
}
