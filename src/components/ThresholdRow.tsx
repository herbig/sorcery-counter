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
            <Flex h='9.5rem'>
                {/* preserve the enum order, not the prop ordering */}
                {Object.values(Elem).map((element) => (
                    props.elems.includes(element as Elem) ? (
                      <Threshold key={element} element={element as Elem} w={widthPercent} />
                    ) : null
                ))}
            </Flex>
        </Box>
    )
}