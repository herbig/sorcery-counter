import { Image, GridItemProps, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import air from "../assets/air.png"
import earth from "../assets/earth.png"
import fire from "../assets/fire.png"
import water from "../assets/water.png"
import { BaseButton, BaseText } from "./Base";

export enum Elem {
    AIR, EARTH, FIRE, WATER
}

interface Props extends GridItemProps {
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
      <GridItem {...props} position={'relative'} h='9rem'>
        <Image pointerEvents='none' src={icon} position={'absolute'} w='50%' opacity={'50%'} top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'} />
        <BaseButton bottom={'50%'} onClick={() => setAmount(amount + 1)} />
        <BaseButton top='50%' onClick={() => setAmount(amount === 0 ? 0 : amount - 1)} />
        <BaseText fontSize='6xl' top={'50%'} left={'50%'} transform={'translate(-50%, -50%)'}>{amount}</BaseText>
      </GridItem>
    )
}