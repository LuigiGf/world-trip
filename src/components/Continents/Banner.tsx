import { Flex, Container, Text } from "@chakra-ui/react";

interface BannerProps {
  bgImage: string;
  title: string;
}

export function Banner({ bgImage, title }: BannerProps) {
  return (
    <Flex
      h="500"
      w="full"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      bgImage={bgImage}
      alignItems="end"
    >
      <Container maxW="7xl">
        <Text mb="16" fontSize="4xl" fontWeight="semibold" textColor="gray.200">
          {title}
        </Text>
      </Container>
    </Flex>
  );
}
