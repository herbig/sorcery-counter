import { Box, Flex } from "@chakra-ui/react";
import { RowTitle } from "./RowTitle";
import { Dice } from "./Dice";

export const DiceRow = () => {
    return (
        <Box>
            <RowTitle title='Dice' />
            <Flex h='9.5rem'>
                <Dice />
            </Flex>
        </Box>
    )
}