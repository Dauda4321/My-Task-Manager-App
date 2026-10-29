import { Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav nav" "right main left"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "1fr 1fr 1fr",
      }}
    >
      <GridItem area="nav" backgroundColor={"#940eed"}>
        NAVBAR
      </GridItem>
      <GridItem area="right" backgroundColor={"#ebdfdf"} hideBelow="lg">
        TO DO
      </GridItem>
      <GridItem area="main" backgroundColor={"#a8a0a0"}>
        IN PROGRESS
      </GridItem>
      <GridItem area="left" backgroundColor={"#80bfa6"}>
        DONE
      </GridItem>
    </Grid>
  );
}

export default App;
