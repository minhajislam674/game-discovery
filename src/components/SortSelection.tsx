import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
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
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        Sort By: {currentSortOrder?.label || "Relevance"}
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
