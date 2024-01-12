import { Button, Text, Image, Box, BoxProps } from "@chakra-ui/react";
import { useState } from "react";
import air from "../assets/air.png"
import earth from "../assets/earth.png"
import fire from "../assets/fire.png"
import water from "../assets/water.png"

export enum Elem {
    AIR, EARTH, FIRE, WATER
}

interface Props extends BoxProps {
    element: Elem;
}

export const Threshold = (props: Props) => {
    const [amount, setAmount] = useState<number>(0);

    var icon: string;
    
    switch(props.element) {
      case Elem.AIR: 
        icon = air;
        break;
      case Elem.EARTH:
        icon = earth;
        break;  
      case Elem.FIRE:
        icon = fire;
        break;
      case Elem.WATER:
        icon = water;
        break;
    }

    return (
      <Box {...props} position={'relative'} h='50vw'>
        <Image src={icon} position={'absolute'} w='50%' opacity={'50%'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} />
        <Text fontSize='xxx-large' position={'absolute'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</Text>
        <Button variant='ghost' position={'absolute'} h='50%' w='full' bottom={'50%'} onClick={() => setAmount(amount + 1)}>▲</Button>
        <Button variant='ghost' position={'absolute'} h='50%' w='full' top='50%' onClick={() => setAmount(amount === 0 ? 0 : amount - 1)}>▼</Button>
      </Box>
    )
}