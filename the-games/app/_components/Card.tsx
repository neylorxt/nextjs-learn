import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export default function CardComponent() {
    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w={400}
            component="a"
            href="http://localhost:3000/_next"
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card.Section>
                <Image
                    src="http://localhost:3000/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffar_cry.a61dae0b.jpg&w=3840&q=75"
                    height={200}
                    alt="Far Cry"
                    fit="cover"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={1}>Far Cry</Text>
                <Badge color="blue" variant="light">
                    Action
                </Badge>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={3} mb="md">
                Far Cry is an action-adventure game developed by Ubisoft.
            </Text>

            <Group justify="space-between" mb="md">
                <Text size="xs" c="dimmed">
                    Plateforme: PC
                </Text>
                <Text size="xs" c="dimmed">
                    Ubisoft
                </Text>
            </Group>

            <Button color="blue" fullWidth mt="auto" radius="md">
                Voir plus
            </Button>
        </Card>
    );
}