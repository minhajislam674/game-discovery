import {
  HStack,
  Switch,
  Text,
  useColorMode,
  IconButton,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />;

  return (
    <HStack justifyContent="center" alignItems="center">
      <IconButton
        aria-label="Toggle dark or light mode"
        onClick={toggleColorMode}
        icon={icon}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
