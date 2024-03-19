import { Image, Alert, AlertIcon, Box, BoxProps, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "../Base";
import skull from "../../assets/skull.png"

interface Props extends BoxProps {
    title: string;
}

const MAX_LIFE = 20;

export const Life = (props: Props) => {
  const [amount, setAmount] = useState<number>(MAX_LIFE);

  return (
    <Box position={'relative'} h='9.5rem' {...props}>
      <BaseButton bottom='50%' onClick={() => setAmount(amount + 1 > MAX_LIFE ? 0 : amount + 1)} />
      <BaseButton top='50%' onClick={() => setAmount(amount - 1 < 0 ? MAX_LIFE : amount - 1)} />
      <Text as='b' ms='1.25rem' mt='0.5rem' fontSize='small' pointerEvents='none' position='absolute'>{props.title}</Text>
      {amount !== 0 && <BaseText top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</BaseText>}
      {amount === 0 && <Alert status='error' bg='transparent' pointerEvents='none'><Spacer /><AlertIcon /></Alert>}
      {amount === 0 && <Image opacity={'70%'} w='5.5rem' fit='scale-down' top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} pointerEvents='none' position='absolute' src={skull} />}
    </Box>
  )
}