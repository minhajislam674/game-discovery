import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const DynamicHeader = ({ gameQuery }: Props) => {
  // games
  //RPG
  // XBOX
  // RPG XBOX Games

  const header = `
  ${gameQuery.genre?.name || ""} 
  ${gameQuery.platform?.name || ""} Games`;

  return <Heading marginLeft={{ base: 2, md: 2 }}>{header}</Heading>;
};

export default DynamicHeader;
