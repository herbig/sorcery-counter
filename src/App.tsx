import {
  Box,
  ChakraProvider,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { Elem } from "./components/Threshold";
import { useWakeLock } from 'react-screen-wake-lock';
import { APPBAR_HEIGHT, AppBar } from "./components/AppBar";
import { MdOutlineRefresh } from "react-icons/md";
import { ThresholdRow } from "./components/ThresholdRow";
import { ManaRow } from "./components/ManaRow";
import { LifeRow } from "./components/LifeRow";

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
      <AppBar 
        title='Sorcery Counter' 
        buttons={
          [
            {
              icon: MdOutlineRefresh,
              onClick: () => {
                window.location.reload();
              },
              ariaLabel: 'Refresh'
            }
          ]
      } 
        maxW='30rem'
      />
      <Box
        h={`calc(100vh - ${APPBAR_HEIGHT})`}
        w="full" 
        maxW='30rem'
        p='1.25rem'
      >
        <LifeRow you={true} />
        <ThresholdRow elems={[Elem.AIR, Elem.EARTH, Elem.FIRE, Elem.WATER]} />
        <ManaRow pstone={true} />
      </Box>
    </ChakraProvider>
  )
}