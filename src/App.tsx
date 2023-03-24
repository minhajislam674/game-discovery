import { Grid, GridItem, Flex, Show } from "@chakra-ui/react";
import GameLibrary from "./components/GameLibrary";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelection from "./components/PlatformSelection";
import { Platform } from "./hooks/usePlatforms";
import SortSelection from "./components/SortSelection";
import SearchBox from "./components/SearchBox";
import "./App.css";
import DynamicHeader from "./components/DynamicHeader";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      // Add the responsive props below
      templateColumns={{ base: "1fr", lg: "250px 1fr" }}
      templateRows={{ base: "auto", lg: "1fr" }}
      gap={{ base: 1, lg: 1 }}
      px={{ base: 1, lg: 1 }}
    >
      <GridItem paddingX="10" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem
          paddingX="10"
          area={"aside"}
          display={["none", "none", "block"]}
        >
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem paddingX="5" area={"main"}>
        <DynamicHeader gameQuery={gameQuery} />
        <Flex
          marginY={{ base: 2, sm: 5 }}
          marginLeft={{ base: 2, md: 2 }}
          gridGap={5}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap={{ sm: "wrap" }}
          justifyContent={{ md: "start" }}
        >
          <SearchBox
            onSearch={(searchText) =>
              setGameQuery({ ...gameQuery, searchText })
            }
          />
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
        </Flex>
        <GameLibrary gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
