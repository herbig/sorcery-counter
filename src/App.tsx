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
import { useState } from "react";
import { ReactSketchCanvas } from 'react-sketch-canvas';

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
        <ReactSketchCanvas
          style={{ border: '0.07rem solid #353943' }}
          strokeWidth={1}
          canvasColor="#1A202C"
          strokeColor="white" />
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