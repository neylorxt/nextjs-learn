import { Card, Group, Skeleton } from '@mantine/core';

export default function CardPlaceholder() {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w={400}
        >
            <Card.Section>
                <Skeleton height={200} />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Skeleton height={20} width="70%" />
                <Skeleton height={20} width="20%" />
            </Group>

            <Skeleton height={60} mb="md" />

            <Group justify="space-between" mb="md">
                <Skeleton height={15} width="40%" />
                <Skeleton height={15} width="30%" />
            </Group>

            <Skeleton height={36} width="100%" />
        </Card>
    );
}
