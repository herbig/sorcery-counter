import { Text, BoxProps, Box, Flex, Divider } from "@chakra-ui/react";
import { Threshold, Elem } from "./Threshold";

interface Props extends BoxProps {
    elems: Elem[];
    title: string;
}

export const ThresholdRow = (props: Props) => {

    const widthPercent = (100 / props.elems.length) + '%';

    return (
        <Box {...props}>
            <Flex>
                <Text as='b' ms='1.25rem' mt='0.5rem' fontSize='small' pointerEvents='none' position='absolute'>{props.title}</Text>
                {/* preserve the enum order, not the prop ordering */}
                {Object.values(Elem).map((element) => (
                    props.elems.includes(element as Elem) ? (
                      <Threshold key={props.title + element} element={element as Elem} w={widthPercent} />
                    ) : null
                ))}
            </Flex>
            <Divider />
        </Box>
    )
}