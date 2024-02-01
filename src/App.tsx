import {
  ChakraProvider,
  Flex,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { Elem } from "./components/Threshold";
import { useWakeLock } from 'react-screen-wake-lock';
import { APPBAR_HEIGHT, AppBar } from "./components/AppBar";
import { MdOutlineRefresh, MdSettings } from "react-icons/md";
import { ThresholdRow } from "./components/ThresholdRow";
import { ManaRow } from "./components/ManaRow";
import { LifeRow } from "./components/LifeRow";
import { CustomizeModal, UIConfig } from "./components/CustomizeModal";
import { useEffect, useState } from "react";
import CanvasDraw from "react-canvas-draw";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const App = () => {

  const { request } = useWakeLock();
  request();

  const [showConfig, setShowConfig] = useState<boolean>(false);

  const [uiConfig, setUIConfig] = useState<UIConfig>({
    showLife: true,
    showYourLife: true,
    elems: [Elem.AIR, Elem.EARTH, Elem.FIRE, Elem.WATER],
    showPStone: true
  });

  // a workaround for a this bug, which crashes on first render:
  // https://github.com/embiem/react-canvas-draw/issues/153
  const [canvasHeight, setCanvasHeight] = useState<string>();
  useEffect(() => {    
    setCanvasHeight(`calc(100vh - ${APPBAR_HEIGHT} - 22rem - 2.5rem - ${uiConfig.showLife ? '11rem' : '0rem'})`) 
  }, [uiConfig.showLife]);

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
            },
            {
              icon: MdSettings,
              onClick: () => {
                setShowConfig(true);
              },
              ariaLabel: 'Customize'
            }
          ]
      } 
        maxW='30rem'
      />
      <Flex
        h={`calc(100vh - ${APPBAR_HEIGHT})`}
        w="full" 
        maxW='30rem'
        p='1.25rem'
        flexDir='column'
      >
        {uiConfig.showLife && <LifeRow you={uiConfig.showYourLife} />}
        <ThresholdRow elems={uiConfig.elems} />
        <ManaRow pstone={uiConfig.showPStone} />
        <Flex 
          flexGrow={1}
          border={'0.07rem solid #353943'}>
          <CanvasDraw
            style={{flexGrow: 1}}
            canvasHeight={canvasHeight}
            lazyRadius={0}
            brushColor='white'
            brushRadius={0.5}
            backgroundColor="#1A202C"
            hideGrid={true} />
        </Flex>
      </Flex>
      <CustomizeModal 
        uiConfig={uiConfig} 
        shown={showConfig} 
        onCancelClick={() => {
          setShowConfig(false);
        }} 
        onConfirmClick={(config) => {
          setUIConfig(config);
          setShowConfig(false);
        }}
      />
    </ChakraProvider>
  )
}