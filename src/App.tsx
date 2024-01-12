import {
  ChakraProvider,
  SimpleGrid,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { Elem, Threshold } from "./components/Threshold";
import { Life } from "./components/Life";
import { PStone } from "./components/PStone";
import { Mana } from "./components/Mana";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={theme}>
    <SimpleGrid columns={2} h="100vh" w="full" maxW='30rem' userSelect='none'>
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