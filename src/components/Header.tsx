import { Container, Flex, Img } from "@chakra-ui/react";

interface HeaderProps {
  isContinent?: boolean;
}

export default function Header({ isContinent = false }) {
  return (
    <Container maxW="7xl" mx="auto">
      <Flex justify="center" my="7">
        <Img
          objectFit="contain"
          width={187}
          height={45}
          src="/Logo.png"
          alt="Logo"
        />
      </Flex>
    </Container>
  );
}
