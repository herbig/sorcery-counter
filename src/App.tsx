import {
  ChakraProvider,
  Grid,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { Elem, Threshold } from "./components/Threshold";
import { Life } from "./components/Life";
import { PStone } from "./components/PStone";
import { Mana } from "./components/Mana";
import { useWakeLock } from 'react-screen-wake-lock';
import { AppBar } from "./components/AppBar";
import { GridTitle } from "./components/GridTitle";
import { FaRecycle } from "react-icons/fa";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const App = () => {

  const { request } = useWakeLock();
  request();

  return (
    <ChakraProvider theme={theme}>
      <AppBar title='Sorcery Counter' buttons={
        [
          {
            icon: FaRecycle,
            onClick: () => {
              window.location.reload();
            },
            ariaLabel: 'Refresh'
          }
        ]
      } />
      <Grid
        templateRows='repeat(10, 0fr)'
        templateColumns='repeat(4, 1fr)'
        h="100vh" 
        w="full" 
        maxW='30rem'
      >
        <GridTitle title='Life Totals' mt='1.25rem' />
        <Life title='You' colSpan={2} />
        <Life title='Me' colSpan={2} />
        <GridTitle title='Threshold' />
        <Threshold colSpan={2} element={Elem.AIR} />
        <Threshold colSpan={2} element={Elem.EARTH} />
        <Threshold colSpan={2} element={Elem.FIRE} />
        <Threshold colSpan={2} element={Elem.WATER} />
        <GridTitle title='Mana Count' />
        <Mana colSpan={3} />
        <PStone colSpan={1} />

      </Grid>
    </ChakraProvider>
  )
}