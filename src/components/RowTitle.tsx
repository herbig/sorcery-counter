import { Text, Divider, BoxProps, Box } from "@chakra-ui/react";

interface Props extends BoxProps {
    title: string;
}

export const RowTitle = (props: Props) => {
    return (
        <Box h='1.5rem' {...props}>
            <Text fontSize='medium' as="b">{props.title}</Text>
            <Divider />
        </Box>
    )
}