import { Box } from "@chakra-ui/react";
import { RowTitle } from "./RowTitle";
import { Mana } from "./Mana";

interface Props {
    pstone: boolean;
}

export const ManaRow = (props: Props) => {
    return (
        <Box>
            <RowTitle title='Mana Count' />
            <Mana pstone={props.pstone} />
        </Box>
    )
}