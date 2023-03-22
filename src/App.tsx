import { Grid, GridItem } from "@chakra-ui/react";
import GameLibrary from "./components/GameLibrary";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
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
          selectedGenre={selectedGenre}
          onSelectGenre={(genre) => setSelectedGenre(genre)}
        />
      </GridItem>
      <GridItem paddingX="10" area={"main"}>
        <GameLibrary selectedGenre={selectedGenre} />
      </GridItem>
      <GridItem area={"footer"}></GridItem>
    </Grid>
  );
}

export default App;
