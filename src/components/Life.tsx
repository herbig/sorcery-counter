import { Alert, AlertIcon, GridItem, GridItemProps, Spacer, Text } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "./Base";

interface Props extends GridItemProps {
    title: string;
}

const MAX_LIFE = 20;

export const Life = (props: Props) => {
  const [amount, setAmount] = useState<number>(MAX_LIFE);

  return (
    <GridItem {...props} position={'relative'} h='9rem'>
      <BaseButton bottom='50%' onClick={() => setAmount(amount + 1 > MAX_LIFE ? 0 : amount + 1)} />
      <BaseButton top='50%' onClick={() => setAmount(amount - 1 < 0 ? MAX_LIFE : amount - 1)} />
      <Text as='b' ms='1.25rem' mt='0.5rem' fontSize='small' pointerEvents='none' position='absolute'>{props.title}</Text>
      <BaseText top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</BaseText>
      {amount === 0 && <Alert status='error' bg='transparent' pointerEvents='none'><Spacer /><AlertIcon /></Alert>}
    </GridItem>
  )
}