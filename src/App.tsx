import {
  ChakraProvider,
  SimpleGrid,
  theme,
} from "@chakra-ui/react"
import { Elem, Threshold } from "./components/Threshold";
import { Life } from "./components/Life";
import { PStone } from "./components/PStone";
import { Mana } from "./components/Mana";

export const App = () => (
  <ChakraProvider theme={theme}>
    <SimpleGrid columns={2} minH="100vh">
      <Life title='Me' />
      <Life title = 'You' />
      <Threshold element={Elem.AIR} />
      <Threshold element={Elem.EARTH} />
      <Threshold element={Elem.FIRE} />
      <Threshold element={Elem.WATER} />
      <Mana />
      <PStone />
    </SimpleGrid>
  </ChakraProvider>
)