import { Loader, Text, Box } from "@mantine/core";

interface LoadingProps {
    message?: string;
}

export default function Loading({ message = "Chargement..." }: LoadingProps) {
    return (
        <Box
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                minHeight: '200px'
            }}
        >
            <Loader size="lg" />
            <Text mt="md" c="dimmed" ta="center">
                {message}
            </Text>
        </Box>
    );
}
