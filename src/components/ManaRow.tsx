import { Box, Divider } from "@chakra-ui/react";
import { Mana } from "./Mana";

interface Props {
    pstone: boolean;
}

export const ManaRow = (props: Props) => {
    return (
        <Box>
            <Divider />
            <Mana pstone={props.pstone} />
        </Box>
    )
}