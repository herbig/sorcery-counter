import { Center, GridItem, GridItemProps } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "./Base";

export const Mana = (props: GridItemProps) => {
    const [current, setCurrent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    return (
      <GridItem {...props} position={'relative'} h='9rem'>
        <BaseButton w='50%' bottom='50%' onClick={() => setCurrent(current + 1)} />
        <BaseButton w='50%' top='50%' onClick={() => setCurrent(current - 1 < 0 ? max : current - 1)} />
        <BaseButton w='50%' bottom='50%' left='50%' onClick={() => {setMax(max + 1); setCurrent(current + 1)}} />
        <BaseButton w='50%' top='50%' left='50%' onClick={() => setMax(max - 1 < 0 ? 0 : max - 1)} />
        <Center h='100%'>
          <BaseText>{current} / {max}</BaseText>
        </Center>
      </GridItem>
    )
}