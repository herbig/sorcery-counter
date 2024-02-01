import { Image, ImageProps } from "@chakra-ui/react";
import { useState } from "react";
import pstone from "../assets/pstone.png";

export const PStone = (props: ImageProps) => {
    const [isChecked, setChecked] = useState<boolean>(false);
    return (
      <Image src={pstone} opacity={isChecked ? '90%' : '30%'} onClick={() => setChecked(!isChecked)} {...props} />
    )
}