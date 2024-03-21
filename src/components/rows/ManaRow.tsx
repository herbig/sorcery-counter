import { Image, Box, Center, IconButton, ImageProps } from "@chakra-ui/react";
import { useState } from "react";
import { BaseButton, BaseText } from "../Base";
import { MdOutlineRefresh } from "react-icons/md";
import pstone from "../../assets/pstone.png";

interface Props {
  pstone: boolean;
}

const PStone = (props: ImageProps) => {
  const [isChecked, setChecked] = useState<boolean>(false);
  return (
    <Image src={pstone} opacity={isChecked ? '90%' : '30%'} onClick={() => setChecked(!isChecked)} {...props} />
  )
}

export const ManaRow = (props: Props) => {
    const [current, setCurrent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    return (
      <Box position={'relative'} h='9.5rem'>
        <BaseButton w='50%' bottom='50%' onClick={() => setCurrent(current + 1)} />
        <BaseButton w='50%' top='50%' onClick={() => setCurrent(current - 1 < 0 ? max : current - 1)} />
        <BaseButton w='50%' bottom='50%' left='50%' onClick={() => {setMax(max + 1); setCurrent(current + 1)}} />
        <BaseButton w='50%' top='50%' left='50%' onClick={() => setMax(max - 1 < 0 ? 0 : max - 1)} />
        <Center h='100%'>
          <BaseText>{current} / {max}</BaseText>
        </Center>
        <IconButton h='3.5rem' w='3.5rem' ms='3%' onClick={() => {setCurrent(max)}} bottom='69%' aria-label='Refresh Mana' icon={<MdOutlineRefresh />} />
        {props.pstone && <PStone position='absolute' bottom='28%' left='80%' w='17%' />}
      </Box>
    )
}