"use client"

import { Card, Image, Text, Badge, Group } from '@mantine/core';
import { Game } from '../data/data';
import CardPlaceholder from './CardPlaceholder';

type GameProps = {
    game: Game;
}

const CardComponent: React.FC<GameProps> = ({ game }: GameProps) => {

    if (!game) {
        return <CardPlaceholder />; // Handle case where game data is not provided
    }


    return (
        <Card
            shadow="sm"
            padding="lg"
            radius="md"
            withBorder
            w={400}
            component="a"
            href={game.freetogame_profile_url}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Card.Section>
                <Image
                    src={game.thumbnail}
                    height={200}
                    alt={game.title}
                    fit="cover"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500} lineClamp={1}>{game.title}</Text>
                <Badge color="blue" variant="light">
                    {game.genre}
                </Badge>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={3} mb="md">
                {game.short_description}
            </Text>

            <Group justify="space-between" mb="md">
                <Text size="xs" c="dimmed">
                    Plateforme: {game.platform}
                </Text>
                <Text size="xs" c="dimmed">
                    {game.developer}
                </Text>
            </Group>
        </Card>
    );
}

export default CardComponent;