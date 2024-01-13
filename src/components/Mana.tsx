import { Button, Text, Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";

export const Mana = (props: BoxProps) => {
    const [current, setCurrent] = useState<number>(0);
    const [max, setMax] = useState<number>(0);
    return (
      <Box {...props} position={'relative'} h='50vw'>
        <Button textShadow='3px 3px #000' fontSize='x-small' variant='ghost' position={'absolute'} h='50%' w='50%' bottom={'50%'} onClick={() => setCurrent(current + 1 > max ? max : current + 1)}>▲</Button>
        <Button textShadow='3px 3px #000' fontSize='x-small' variant='ghost' position={'absolute'} h='50%' w='50%' top='50%' onClick={() => setCurrent(current - 1 < 0 ? max : current - 1)}>▼</Button>
        <Button textShadow='3px 3px #000' fontSize='x-small' variant='ghost' position={'absolute'} h='50%' w='50%' bottom={'50%'} left='50%' onClick={() => {setMax(max + 1); setCurrent(current + 1)}}>▲</Button>
        <Button textShadow='3px 3px #000' fontSize='x-small' variant='ghost' position={'absolute'} h='50%' w='50%' top='50%' left='50%' onClick={() => setMax(max - 1 < 0 ? 0 : max - 1)}>▼</Button>
        <Text textShadow='3px 3px #000' pointerEvents='none' fontSize='xxx-large' position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{current}/{max}</Text>
      </Box>
    )
}