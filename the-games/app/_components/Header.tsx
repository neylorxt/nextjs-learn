"use client"
import {
    Box,
    Group,
    Text,
} from '@mantine/core';
import classes from './header.module.css';


export default function Header() {
    return (
        <Box pb={0}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Text size="xl"
                        fw={900}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    > The Games </Text>
                </Group>
            </header>
        </Box>
    );
}