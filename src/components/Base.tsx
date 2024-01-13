import { Button, ButtonProps, TextProps, Text } from "@chakra-ui/react";

export const BaseButton = (props: ButtonProps) => (
    <Button textShadow='4px 4px #000' variant='ghost' position='absolute' h='50%' w='full' borderRadius='0' {...props} />
)

export const BaseText = (props: TextProps) => (
    <Text textShadow='4px 4px #000' pointerEvents='none' position='absolute' {...props} />
)