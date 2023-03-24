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

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  selectedOrder: string;
}

const SortSelection = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "released",
      label: "Newest Arrivals",
    },
    {
      value: "metacritic",
      label: "Popularity: Low to High",
    },
    {
      value: "-metacritic",
      label: "Popularity: High to Low",
    },
    {
      value: "rating",
      label: "Rating: Low to High",
    },
    {
      value: "-rating",
      label: "Rating: High to Low",
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} max-width="400px">
        <Flex alignItems="center">
          Sort By: {currentSortOrder?.label || "Relevance"}
          <Icon as={ChevronDownIcon} ml={2} />
        </Flex>
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            key={order.value}
            value={order.value}
            onClick={() => onSelectSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelection;
