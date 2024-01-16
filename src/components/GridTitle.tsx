import { Text, GridItem, GridItemProps, Divider } from "@chakra-ui/react";

interface Props extends GridItemProps {
    title: string;
}

export const GridTitle = (props: Props) => {
    return (
        <GridItem colSpan={4} {...props} ps='1.25rem' pe='1.25rem'>
            <Text fontSize='medium' as="b">{props.title}</Text>
            <Divider />
        </GridItem>
    )
}