"use client"

import { Carousel } from '@mantine/carousel';
import '@mantine/core/styles.css';
// ‼️ import carousel styles after core package styles
import '@mantine/carousel/styles.css';
import img_farCry from '../../public/far_cry.jpg';
import img_BattleField from '../../public/battlefield-4.jpg';
import img_SpiderMan from '../../public/spider-man.jpeg';
import img_Stray from '../../public/stray.jpg';
import Image from 'next/image';

export default function MyCarousel() {
    return (
        <Carousel
            withIndicators
            height={1000}

            emblaOptions={{ dragFree: true, align: 'start' }}
            slideGap="md"
            style={{ borderRadius: 10, overflow: 'hidden' }}
        >
            <Carousel.Slide>
                <Image
                    src={img_farCry}
                    alt='FarCry 4'
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={img_BattleField}
                    alt='BattleField 4'
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={img_SpiderMan}
                    alt='Spider-Man'
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Carousel.Slide>
            <Carousel.Slide>
                <Image
                    src={img_Stray}
                    alt='Stray'
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </Carousel.Slide>
            {/* ...other slides */}
        </Carousel>
    );
}