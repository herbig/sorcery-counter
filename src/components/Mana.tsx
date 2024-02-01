import { Box, Center, IconButton } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "./Base";
import { MdOutlineRefresh } from "react-icons/md";
import { PStone } from "./PStone";

interface Props {
  pstone: boolean;
}

export const Mana = (props: Props) => {
    const [current, setCurrent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    return (
      <Box position={'relative'} h='9rem'>
        <BaseButton w='50%' bottom='50%' onClick={() => setCurrent(current + 1)} />
        <BaseButton w='50%' top='50%' onClick={() => setCurrent(current - 1 < 0 ? max : current - 1)} />
        <BaseButton w='50%' bottom='50%' left='50%' onClick={() => {setMax(max + 1); setCurrent(current + 1)}} />
        <BaseButton w='50%' top='50%' left='50%' onClick={() => setMax(max - 1 < 0 ? 0 : max - 1)} />
        <Center h='100%'>
          <BaseText>{current} / {max}</BaseText>
        </Center>
        <IconButton ms='3%' onClick={() => {setCurrent(max)}} bottom='62%' aria-label='Refresh Mana' icon={<MdOutlineRefresh />} />
        {props.pstone && <PStone position='absolute' bottom='25%' left='80%' w='17%' />}
      </Box>
    )
}