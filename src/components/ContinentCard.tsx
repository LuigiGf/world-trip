import { Flex, Text } from "@chakra-ui/react";

interface ContinentCardProps {
  title: string;
  description: string;
  bgImage: string;
}

export default function ContinentCard({
  title,
  description,
  bgImage,
}: ContinentCardProps) {
  return (
    <>
      <Flex
        objectFit="cover"
        w="full"
        bgImage={bgImage}
        justifyItems="center"
        alignItems="center"
        flexDirection="column"
        py="40"
      >
        <Text textColor="gray.200" fontSize="5xl" fontWeight="bold">
          {title}
        </Text>
        <Text mt="4" textColor="gray.300" fontSize="2xl" fontWeight="bold">
          {description}
        </Text>
      </Flex>
    </>
  );
}
