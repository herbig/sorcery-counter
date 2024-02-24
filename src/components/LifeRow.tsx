import { Box, Flex } from "@chakra-ui/react";
import { RowTitle } from "./RowTitle";
import { Life } from "./Life";

interface Props {
    you: boolean;
}

export const LifeRow = (props: Props) => {
    return (
        <Box>
            <RowTitle title='Life Total' />
            <Flex h='9.5rem'>
                {props.you && <Life title='Opponent' w='50%' />}
                <Life title='Me' w={props.you ? '50%' : '100%'} />
            </Flex>
        </Box>
    )
}