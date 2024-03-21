import { Box, Divider, Flex } from "@chakra-ui/react";
import { Life } from "./Life";

interface Props {
    you: boolean;
}

export const LifeRow = (props: Props) => {
    return (
        <Box>
            <Flex>
                {props.you && <Life title='Opponent ↑' w='50%' />}
                <Life title={props.you ? 'Me ↓' : ''} w={props.you ? '50%' : '100%'} />
            </Flex>
            <Divider />
        </Box>
    )
}