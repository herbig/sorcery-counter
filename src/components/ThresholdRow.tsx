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
                {props.elems.map((element) => (
                    <Threshold key={Elem[element].toString()} element={element} w={widthPercent} />
                ))}
            </Flex>
        </Box>
    )
}