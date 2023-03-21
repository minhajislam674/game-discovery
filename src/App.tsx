import { Button, ButtonGroup } from "@chakra-ui/react";
import { Grid, GridItem, Show, Box } from "@chakra-ui/react";
import GameLibrary from "./components/GameLibrary";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Grid
      templateRows={{ base: "auto 1fr", lg: "auto" }}
      templateColumns={{ base: "1fr", lg: "auto 1fr" }}
      templateAreas={{
        base: `"header" "main"`,
        lg: `"header aside" "main aside"`,
      }}
      minHeight="100vh"
    >
      <GridItem gridArea="header">
        <NavBar />
      </GridItem>
      <GridItem gridArea="main">
        <GameLibrary />
      </GridItem>
      <Box display={{ base: "none", lg: "block" }} gridArea="aside">
        Aside
      </Box>
    </Grid>
  );
}

export default App;
