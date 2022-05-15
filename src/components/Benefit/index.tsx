import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Beach, Cup } from "../../../public/Icons";

interface BenefitsProps {
  title: string;
  svg: ReactNode;
}

export default function Benefit({ svg, title }: BenefitsProps) {
  return (
    <Flex maxW="max" flexDir="column" alignItems="center">
      {svg}
      <Text mt="6" fontSize="2xl" fontWeight="semibold" color="gray.500">
        {title}
      </Text>
    </Flex>
  );
}
