import {
  ChakraProvider,
  Flex,
  ThemeConfig,
  extendTheme,
} from "@chakra-ui/react"
import { useWakeLock } from 'react-screen-wake-lock';
import { APPBAR_HEIGHT, AppBar } from "./components/AppBar";
import { MdOutlineRefresh, MdSettings } from "react-icons/md";
import { ThresholdRow } from "./components/rows/ThresholdRow";
import { ManaRow } from "./components/rows/ManaRow";
import { LifeRow } from "./components/rows/LifeRow";
import { CustomizeModal, UIConfig } from "./components/CustomizeModal";
import { useEffect, useState } from "react";
import { DiceRow } from "./components/rows/DiceRow";
import { getStoredConfig, setStoredConfig } from "./storage";

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

export const App = () => {

  const { request } = useWakeLock();
  useEffect(() => {
    request();
  }, [request]);

  const [showConfig, setShowConfig] = useState<boolean>(false);

  // a simple way to refresh components via the refresh button
  const [resetCount, setResetCount] = useState<number>(0);

  const [uiConfig, setUIConfig] = useState<UIConfig>(getStoredConfig());

  const refresh = () => {
    setResetCount(current => current + 1);
  };

  return (
    <ChakraProvider theme={theme}>
      <AppBar 
        title='Sorcery Counter' 
        buttons={
          [
            {
              icon: MdOutlineRefresh,
              onClick: () => {
                refresh();
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
        ps='1.25rem'
        pe='1.25rem'
        pb='1.25rem'
        flexDir='column'
        key={resetCount}
      >
        {uiConfig.showDice && <DiceRow />}
        {uiConfig.showLife && <LifeRow you={uiConfig.showYourLife} />}
        {uiConfig.oppElems.length > 0 && <ThresholdRow title='Opponent ↑' elems={uiConfig.oppElems} />}
        {uiConfig.elems.length > 0 && <ThresholdRow title={uiConfig.oppElems.length > 0 ? 'Me ↓' : ''} elems={uiConfig.elems} />}
        <ManaRow pstone={uiConfig.showPStone} />
      </Flex>
      <CustomizeModal 
        uiConfig={uiConfig} 
        shown={showConfig} 
        onCancelClick={() => {
          setShowConfig(false);
        }} 
        onConfirmClick={(config) => {
          setUIConfig(config);
          setStoredConfig(config);
          setShowConfig(false);
        }}
      />
    </ChakraProvider>
  )
}