import { Button, ButtonProps, TextProps, Text } from "@chakra-ui/react";

export const BaseButton = (props: ButtonProps) => (
    <Button variant='ghost' position='absolute' h='50%' w='full' borderRadius='0' {...props} />
)

export const BaseText = (props: TextProps) => (
    <Text fontSize='xxx-large' textShadow='4px 4px #000' pointerEvents='none' position='absolute' {...props} />
)