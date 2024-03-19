import "../styles.css";
import { Image, BoxProps, HStack, ImageProps, Button } from "@chakra-ui/react";
import d20 from "../assets/d20.png"
import d12 from "../assets/d12.png"
import d10 from "../assets/d10.png"
import d6 from "../assets/d6.png"
import d4 from "../assets/d4.png"
// @ts-ignore
import DiceBox from "@3d-dice/dice-box";

const diceBox = new DiceBox(
  "#dice-box", // target DOM element to inject the canvas for rendering
  {
    id: "dice-canvas", // canvas element id
    // TODO fix this fourcores redirect issue
    assetPath: (process.env.NODE_ENV !== 'development' ? "/counter" : '') + "/assets/dice-box/",
    startingHeight: 8,
    throwForce: 6,
    spinForce: 5,
    lightIntensity: 0.9,
    scale: 7,
  }
);

// initialize the Dice Box outside of the component
diceBox.init().then(() => {
  diceBox.hide();
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    if (window.getComputedStyle(document.getElementById("dice-canvas")!).display !== "none") {
      diceBox.hide().clear();
    }
  });
});

const Die = (props: ImageProps) => {
    return (
        <Button variant='ghost' borderRadius='0'><Image w='4rem' sx={{filter: 'brightness(0) invert(1)'}} opacity={'70%'} {...props} /></Button>
    )
}

export const DiceRow = (props: BoxProps) => {

    const rollDie = (sides: number) => {
      let color: string;
      switch(sides) {
        case 20:
          color = '#BA4E49';
          break;
        case 12:
          color = '#D9C547';
          break;  
        // TODO d8 = #285FD1
        case 10:
          color = '#ffffff';
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
    <HStack h='6rem' w='full' justifyContent="space-between" {...props}>
        <Die src={d20} onClick={() => rollDie(20)} />
        <Die src={d12} onClick={() => rollDie(12)} />
        <Die src={d10} onClick={() => rollDie(10)} />
        <Die src={d6} onClick={() => rollDie(6)} />
        <Die src={d4} onClick={() => rollDie(4)} />
    </HStack>
  )
}