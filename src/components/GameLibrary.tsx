import { SimpleGrid, Text, VStack, Box } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";
interface Props {
  gameQuery: GameQuery;
}

const GameLibrary = ({ gameQuery }: Props) => {
  const { games, error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  return (
    <>
      {error && <Text>{error}</Text>}

      <VStack>
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
          padding="10px"
          spacing={5}
        >
          {isLoading &&
            skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
          {games.length === 0 && !isLoading && (
            <Box textAlign="center" p={4} m={4}>
              <Text>No games found for your search</Text>
            </Box>
          )}
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </SimpleGrid>
      </VStack>
    </>
  );
};

export default GameLibrary;
