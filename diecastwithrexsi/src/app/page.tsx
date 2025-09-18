import { Button, HStack } from "@chakra-ui/react";
import { RiMailLine } from "react-icons/ri";

export default function Home() {
  return (
    <HStack>
       <Button colorPalette="teal" variant="solid">
        <RiMailLine /> Email
      </Button>
      <Button>Click me</Button>
    </HStack>
  )
}
