import "../../styles.css";
import { Image, BoxProps, HStack, ImageProps, IconButton, Box, Divider } from "@chakra-ui/react";
import d20 from "../../assets/d20.png"
import d12 from "../../assets/d12.png"
import d10 from "../../assets/d10.png"
import d8 from "../../assets/d8.png"
import d6 from "../../assets/d6.png"
import d4 from "../../assets/d4.png"
// @ts-ignore
import DiceBox from "@3d-dice/dice-box";

const canvasId = 'dice-canvas';
const diceBox = new DiceBox(
  // target DOM element to inject the dice canvas
  // this is located in the /public/index.html file
  "#dice-box",
  {
    id: canvasId,
    theme: 'smooth',
    // TODO there's an issue with the way the /counter redirect
    // works on fourcores.xyz, which requires hardcoding the
    // '/counter' path here.  Would be great to fix that...
    assetPath: (process.env.NODE_ENV !== 'development' ? "/counter" : '') + "/assets/dice-box/",
    startingHeight: 8,
    throwForce: 6,
    spinForce: 5,
    lightIntensity: 0.9,
    scale: 7,
  }
);

diceBox.init().then(() => {
  diceBox.hide();
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    if (window.getComputedStyle(document.getElementById(canvasId)!).display !== "none") {
      diceBox.hide().clear();
    }
  });
});

const Die = (props: ImageProps) => {
    return (
        <IconButton w='3.8rem' h='3.8rem' icon={<Image w='2.4rem' opacity={'70%'} {...props} />} aria-label='' variant='ghost' borderRadius='0' />
    )
}

export const DiceRow = (props: BoxProps) => {

    const rollDie = (sides: number) => {
      let color: string;
      switch(sides) {
        case 20:
          color = '#C23F1E';
          break;
        case 12:
          color = '#D9C547';
          break;  
        case 10:
          color = '#ffffff';
          break;
        case 8:
            color = '#285FD1';
            break;
        case 6:
          color = '#AE2D40';
          break;
        default: // d4
          color = '#285F66';
      }
      diceBox.show().roll({ sides: sides, themeColor: color });
    };

  return (
    <Box>
      <HStack h='6rem' w='full' justifyContent="space-between" {...props}>
          <Die src={d20} onClick={() => rollDie(20)} />
          <Die src={d12} onClick={() => rollDie(12)} />
          <Die src={d10} onClick={() => rollDie(10)} />
          <Die src={d8} onClick={() => rollDie(8)} />
          <Die src={d6} onClick={() => rollDie(6)} />
          <Die src={d4} onClick={() => rollDie(4)} />
      </HStack>
      <Divider />
    </Box>
  )
}