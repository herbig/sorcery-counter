import { BoxProps, Box } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "./Base";

interface Props extends BoxProps {
    title: string;
}

const MAX_LIFE = 20;

export const Life = (props: Props) => {
  const [amount, setAmount] = useState<number>(MAX_LIFE);

  return (
    <Box {...props} position={'relative'} h='40vw'>
      <BaseButton bottom='50%' onClick={() => setAmount(amount === MAX_LIFE ? MAX_LIFE : amount + 1)}>▲</BaseButton>
      <BaseButton top='50%' onClick={() => setAmount(amount - 1 < 0 ? 0 : amount - 1)}>▼</BaseButton>
      <BaseText ms='0.8rem' mt='0.5rem' fontSize='large'>{props.title}</BaseText>
      <BaseText top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</BaseText>
    </Box>
  )
}