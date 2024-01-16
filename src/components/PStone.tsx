import { Image, GridItemProps, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import pstone from "../assets/pstone.png";

export const PStone = (props: GridItemProps) => {
    const [isChecked, setChecked] = useState<boolean>(false);
    return (
      <GridItem {...props} position={'relative'} h='10rem' onClick={() => setChecked(!isChecked)}>
        <Image src={pstone} opacity={isChecked ? '90%' : '30%'} position={'absolute'} w='50%' top={'50%'} transform={'translate(-50%, -50%)'} />
      </GridItem>
    )
}