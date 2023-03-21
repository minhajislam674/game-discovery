import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import GameLibrary from "./components/GameLibrary";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem pl="2" area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem pl="2" area={"aside"}>
          Aside
        </GridItem>
      </Show>
      <GridItem pl="2" area={"main"}>
        <GameLibrary />
      </GridItem>
    </Grid>
  );
}

export default App;
