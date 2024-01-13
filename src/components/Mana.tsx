import { Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "./Base";

export const Mana = (props: BoxProps) => {
    const [current, setCurrent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    return (
      <Box {...props} position={'relative'} h='50vw'>
        <BaseButton fontSize='x-small' w='50%' bottom='50%' onClick={() => setCurrent(current + 1 > max ? max : current + 1)}>▲</BaseButton>
        <BaseButton fontSize='x-small' w='50%' top='50%' onClick={() => setCurrent(current - 1 < 0 ? max : current - 1)}>▼</BaseButton>
        <BaseButton fontSize='x-small' w='50%' bottom='50%' left='50%' onClick={() => {setMax(max + 1); setCurrent(current + 1)}}>▲</BaseButton>
        <BaseButton fontSize='x-small' w='50%' top='50%' left='50%' onClick={() => setMax(max - 1 < 0 ? 0 : max - 1)}>▼</BaseButton>
        <BaseText fontSize='xx-large' top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{current} / {max}</BaseText>
      </Box>
    )
}