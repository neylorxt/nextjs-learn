import { Anchor, Container, Group, Text } from '@mantine/core';
import classes from './footer.module.css';



const Footer: React.FC = () => {
    const links: { link: string, label: string }[] = [
        { link: 'https://github.com/neylorxt', label: 'Github' },
        { link: 'https://www.youtube.com/@neylorxt', label: 'Youtube' }
    ];

    const items = links.map((link) => (
        <Anchor<'a'>
            c="dimmed"
            key={link.label}
            href={link.link}
            size="sm"
            target='_blank'
        >
            {link.label}
        </Anchor>
    ));

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Text size="xl"
                    fw={900}
                    variant="gradient"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                > The Games </Text>

                <Group className={classes.links}>
                    {items}
                </Group>
            </Container>
        </div>
    );
}


export default Footer;