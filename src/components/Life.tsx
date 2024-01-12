import { Button, Text, BoxProps, Box, useColorMode } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props extends BoxProps {
    title: string;
}

const MAX_LIFE = 20;

export const Life = (props: Props) => {
  const [amount, setAmount] = useState<number>(MAX_LIFE);

  // default the app to dark mode TODO get this out of here...
  const { setColorMode } = useColorMode();
  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);
    
  return (
    <Box {...props} position={'relative'} h='50vw'>
      <Button variant='ghost' position={'absolute'} h='50%' w='full' bottom={'50%'} onClick={() => setAmount(amount === MAX_LIFE ? MAX_LIFE : amount + 1)}>▲</Button>
      <Button variant='ghost' position={'absolute'} h='50%' w='full' top='50%' onClick={() => setAmount(amount - 1 < 0 ? 0 : amount - 1)}>▼</Button>
      <Text fontSize='large' position={'absolute'}>{props.title}</Text>
      <Text fontSize='xxx-large' position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</Text>
    </Box>
  )
}