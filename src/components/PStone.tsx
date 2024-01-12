import { Image, BoxProps, Box } from "@chakra-ui/react";
import { useState } from "react";
import pstone from "../assets/pstone.png";

export const PStone = (props: BoxProps) => {
    const [isChecked, setChecked] = useState<boolean>(false);
    return (
      <Box {...props} position={'relative'} h='50vw' onClick={() => setChecked(!isChecked)}>
        <Image src={pstone} opacity={isChecked ? '100%' : '30%'} position={'absolute'} w='50%' top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} />
      </Box>
    )
}