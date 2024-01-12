import { Button, Text, BoxProps, Box } from "@chakra-ui/react";
import { useState } from "react";

interface Props extends BoxProps {
    title: string;
}

const MAX_LIFE = 20;

export const Life = (props: Props) => {
  const [amount, setAmount] = useState<number>(MAX_LIFE);

  return (
    <Box {...props} position={'relative'} h='40vw'>
      <Button variant='ghost' position={'absolute'} h='50%' w='full' bottom={'50%'} onClick={() => setAmount(amount === MAX_LIFE ? MAX_LIFE : amount + 1)}>▲</Button>
      <Button variant='ghost' position={'absolute'} h='50%' w='full' top='50%' onClick={() => setAmount(amount - 1 < 0 ? 0 : amount - 1)}>▼</Button>
      <Text pointerEvents='none' fontSize='large' position={'absolute'}>{props.title}</Text>
      <Text pointerEvents='none' fontSize='xxx-large' position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</Text>
    </Box>
  )
}