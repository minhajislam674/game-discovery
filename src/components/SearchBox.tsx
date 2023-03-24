import { CloseIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Button,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import { useRef, useState } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBox = ({ onSearch }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleReset = () => {
    setInputValue("");
    if (inputValue) {
      onSearch("");
    }
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (inputValue) {
          onSearch(inputValue);
        }
      }}
    >
      <HStack>
        <InputGroup size="md">
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            variant="filled"
            placeholder="Search for games"
            width="100%"
            marginRight={2}
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
          />
          <InputRightElement>
            {inputValue && (
              <Button
                variant="link"
                size="sm"
                mr={1}
                onClick={handleReset}
                aria-label="Clear search"
              >
                <CloseIcon />
              </Button>
            )}
          </InputRightElement>
        </InputGroup>
        <Button type="submit" variant="solid">
          Search
        </Button>
      </HStack>
    </form>
  );
};

export default SearchBox;
