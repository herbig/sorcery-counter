import { BoxProps, Box, Flex, Divider } from "@chakra-ui/react";
import { Threshold, Elem } from "./Threshold";

interface Props extends BoxProps {
    elems: Elem[];
}

export const ThresholdRow = (props: Props) => {

    const widthPercent = (100 / props.elems.length) + '%';

    return (
        <Box {...props}>
            <Flex>
                {/* preserve the enum order, not the prop ordering */}
                {Object.values(Elem).map((element) => (
                    props.elems.includes(element as Elem) ? (
                      <Threshold key={element} element={element as Elem} w={widthPercent} />
                    ) : null
                ))}
            </Flex>
            <Divider />
        </Box>
    )
}