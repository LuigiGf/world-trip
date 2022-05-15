import { Container, Flex, Img } from "@chakra-ui/react";

export default function Header() {
  return (
    <Container maxW="7xl" mx="auto">
      <Flex justify="center" my="7">
        <Img
          objectFit="contain"
          width={187}
          height={45}
          src="./Logo.png"
          alt="Logo"
        />
      </Flex>
    </Container>
  );
}
