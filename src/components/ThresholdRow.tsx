import { BoxProps, Box, Flex } from "@chakra-ui/react";
import { Threshold, Elem } from "./Threshold";
import { RowTitle } from "./RowTitle";

interface Props extends BoxProps {
    elems: Elem[];
}

export const ThresholdRow = (props: Props) => {

    const widthPercent = (100 / props.elems.length) + '%';

    return (
        <Box {...props}>
            <RowTitle title='Threshold' />
            <Flex h='9rem'>
                {props.elems.map((i, element) => (
                    <Threshold key={i} element={element} w={widthPercent} />
                ))}
            </Flex>
        </Box>
    )
}