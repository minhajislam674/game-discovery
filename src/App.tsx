import { Grid, GridItem, HStack } from "@chakra-ui/react";
import GameLibrary from "./components/GameLibrary";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelection from "./components/PlatformSelection";
import { Platform } from "./hooks/usePlatforms";
import SortSelection from "./components/SortSelection";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"header header"
                  "nav main"
                  "footer footer"`,
      }}
      gridTemplateRows={"50px 1fr 30px"}
      gridTemplateColumns={{
        base: "1fr",
      }}
      gap="10"
    >
      <GridItem paddingX="10" area={"header"}>
        <NavBar />
      </GridItem>
      <GridItem paddingX="10" area={"nav"}>
        <GenreList
          selectedGenre={gameQuery.genre}
          onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
        />
      </GridItem>
      <GridItem paddingX="10" area={"main"}>
        <HStack>
          <PlatformSelection
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelection
            selectedOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameLibrary gameQuery={gameQuery} />
      </GridItem>
      <GridItem area={"footer"}></GridItem>
    </Grid>
  );
}

export default App;
