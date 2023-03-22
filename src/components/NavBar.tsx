import { Stack, HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="15px">
      <Image src={logo} boxSize="60px"></Image>
      <Text fontSize="22" fontWeight="bold">
        {" "}
        GamesHub
      </Text>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
