import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Flex,
  Icon,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Platform } from "../hooks/usePlatforms";

import usePlatforms from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelection = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { platforms, error } = usePlatforms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} max-width="400px">
        <Flex alignItems="center">
          {selectedPlatform?.name || "Select Platform"}
          <Icon as={ChevronDownIcon} ml={2} />
        </Flex>
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectPlatform(platform)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelection;
